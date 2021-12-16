import CartController from "./JS/Controllers/CartController";
import Cart from "./JS/Models/Cart";
import Movie from "./JS/Models/Movie";
import Search from "./JS/Models/Search";

import {
  FORM,
  loader,
  HEADER,
  clearLoader,
  MOVIE_SLIDER_CONTAINER,
  MAIN_CONTENT_CONTAINER,
  CART_INNER_CONTAINER,
} from "./JS/utils/classSelectors";
import { deleteMovieItem, displayCartNumber } from "./JS/Views/cartView";
import {
  displayMovie,
  resetMainContentContainer,
  updateTicketNumbers,
} from "./JS/Views/movieView";

import {
  getFormInput,
  displayMovies,
  clearFormInput,
  clearSlider,
} from "./JS/Views/searchMovieView";

/* Initialize state */
const data = {
  search: null,
  movie: null,
  // cart: new Cart(),
};

// Search Controller
const searchController = async (e) => {
  e.preventDefault();

  const query = getFormInput().toLowerCase();

  if (query) {
    // call the Search class
    const search = new Search(query);
    data["search"] = search;

    // clear form input
    clearFormInput();

    // clear the list of movies, if any, in DOM, before fetch is made
    clearSlider();

    // before data is fetched, show loader
    loader(HEADER);

    try {
      // Search for the movie
      await data["search"].searchMovie();

      // After data is fetched, stop the loader
      clearLoader(HEADER);

      // Display the data
      const { search: movies } = data;

      // console.log(movies.query);
      displayMovies(movies.movies);
    } catch (e) {
      alert("Error in getting movies");
    }
  } else {
    console.log("Query cannot be empty");
    alert("Query cannot be empty.");
  }
};

// Movie Controller
const movieController = async () => {
  // const id = window.location.hash.split("#")[1]; //or
  const id = window.location.hash.replace("#", "");
  console.log(id);

  if (id) {
    // instantiate the movie object
    data.movie = new Movie(id);

    // before movie is fetched, show loader
    loader(HEADER);

    try {
      // get the movie data - remember getMovie() is an async fxn
      await data.movie.getMovie();

      // After movie is fetched, stop the loader
      clearLoader(HEADER);

      /* to display the movie clicked on in the DOM */
      // 1. clear the movie, if any, from the dom
      resetMainContentContainer();
      // 2. then display the movie
      displayMovie(data.movie);
      // to display the tabbed contents
      movieDescription();
    } catch (e) {
      alert("Movie cannot be fetched at the moment. Please try again later.");
    }
  }
};

// const cartController = () => {
//   if(!data.cart) {
//     data.cart = new Cart();
//   }
// }

/* EVENT LISTENERS */
FORM.addEventListener("submit", searchController);

/* display arrow btns only when the slider-container has movies displayed in it */
MOVIE_SLIDER_CONTAINER.addEventListener("click", (e) => {
  // get the arrow btns if the element clicked is close to the arrow btn
  const sliderBtn = e.target.closest(".arrow-btn");

  // TO FIND THE NUMBER OF PAGES - divide the length of array by the number of data to be displayed per page
  const pages = Math.ceil(data.search.movies.length / 4);

  if (sliderBtn) {
    const pageNum = parseInt(sliderBtn.dataset.goto);

    // to switch pages,
    /* 1. check page switched to (pageNum arg) is not 0 and it is not above the total length of movies divided by number of movies displayed per chunk  */
    if (pageNum !== 0 && pageNum <= pages) {
      // 2. clear the content in slider-container
      clearSlider();
      // 3. display the next page based on pageNum ([[...],[...],[...]])
      displayMovies(data.search.movies, pageNum);
    }
  }
});

/* In the DOM, both purchase and favorite icons have different hash "#" values attached due to them, calling movieController directly will lead to errors, as no movie will have "/#target-content" or "/target-content1" or "/#". Only run the movieController when the hash values are from the movie api */
function hashHandler() {
  if (
    location.hash !== "#target-content" &&
    location.hash !== "#target-content1" &&
    location.hash !== "#"
  ) {
    movieController();
  }
}
// Listen for change in links
window.addEventListener("hashchange", hashHandler);
// window.addEventListener("hashchange", movieController);
// Onloading the Windows, run the movieController with the id of the last clicked data
window.addEventListener("load", movieController);

// TO TARGET EACH (HEADER & CONTENT) TAB FOR THE MOVIE DISPLAYED
// use the data-tab-target to access the id on data-tab-content
const movieDescription = () => {
  const headingTabs = document.querySelectorAll("[data-tab-target]");
  const displayTabs = document.querySelectorAll("[data-tab-content]");

  headingTabs.forEach((headingTab) => {
    headingTab.addEventListener("click", () => {
      // get the heading panel
      const headingTabTarget = document.querySelector(
        headingTab.dataset.tabTarget
      );

      // to remove activeClass on tabs loop through the content panel
      headingTabs.forEach((headingTab) => {
        // remove the activeTab class headingTab
        headingTab.classList.remove("activeTab");
      });

      // loop through the content panel
      displayTabs.forEach((displayTab) => {
        // remove the activeTab class on all of the displayTab
        displayTab.classList.remove("activeTab");
      });

      // add 'activeTab' to the headingTab clicked upon
      headingTab.classList.add("activeTab");

      // add the 'activeTab' class on the headTabTarget clicked, which will in turn add "activeTab" to the appropriate panel in displayTabs
      headingTabTarget.classList.add("activeTab");
    });
  });
};

// Add or Reduce Tickets
// Target the ancestor of the ticket buttons already on the DOM
MAIN_CONTENT_CONTAINER.addEventListener("click", (e) => {
  const addTicket = e.target.closest(".main-content__right-social--add");
  const minusTicket = e.target.closest(".main-content__right-social--minus");
  const cartTicket = e.target.closest(".main-content__left--buy");

  if (addTicket) {
    // update the movie ticket numbers
    data.movie.updateTickets("add");
    // update the movie ticket in dom (i.e the buy tickets btn)
    updateTicketNumbers(data.movie);
  }

  if (minusTicket) {
    if (data.movie) {
      if (data.movie.ticketNumbers > 1) {
        // update the movie ticket numbers
        data.movie.updateTickets("minus");
        // update the movie ticket in dom (i.e the buy tickets btn)
        updateTicketNumbers(data.movie);
      }
    }
    // console.log(data.movie.ticketNumbers);
  }

  if (cartTicket) {
    // call the cart controller
    CartController(data);
  }
});

// To target the items in cart ()
CART_INNER_CONTAINER.addEventListener("click", (e) => {
  const targetElement = e.target.closest(".target-inner__list-delete");
  const updateMovieQty = e.target.closest(".target-inner__list-number");

  if (targetElement) {
    // const parentElement = targetElement.parentElement;
    const targetedCartItemID = targetElement.parentElement.dataset.deleteid;
    // Delete movie from cart
    data.cart.removeMovie(targetedCartItemID);
    // Delete movie from dom
    deleteMovieItem(targetedCartItemID);
    // Update the number of items in cart
    const numberOfCartItems = data.cart.showCart();
    displayCartNumber(numberOfCartItems.length);
  }

  if (updateMovieQty) {
    const movieID = updateMovieQty.parentElement.parentElement.dataset.deleteid;
    const newTicketNumber = parseInt(updateMovieQty.value);

    // update movie ticket number in cart when ticket number is above 1
    if (newTicketNumber > 1) {
      data.cart.updateMovieNumbers(movieID, newTicketNumber);
      // update the movie in cart too
      data.movie.updateMovieInCart(newTicketNumber);
      // calculate the price
      data.cart.calcPrice(movieID, data.movie.ticketNumbers, data.movie.price);
    }
  }
});

// CART Controllers
// const cart = new Cart();
// cart.purchaseMovie(2, "Batman Begins", 2.99);
// cart.purchaseMovie(1, "Red Moves", 5.99);
// cart.purchaseMovie(1, "Dragon Scopes", 4.99);
