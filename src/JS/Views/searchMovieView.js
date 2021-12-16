import {
  ARROW_BTN,
  FORM,
  FORM_INPUT,
  KEY,
  MOVIE_SLIDER_CONTAINER,
} from "../utils/classSelectors";

const displayMovie = (movie) => {
  const { Title, Poster, Type, Year, imdbID } = movie;
  const markup = `
    <div class="movie__slider-item">
      <a href="#${imdbID}">
          <img src=${Poster} alt=${Title} >
      </a>
    </div>
  `;
  MOVIE_SLIDER_CONTAINER.insertAdjacentHTML("beforeend", markup);
};

/* GET FORM INPUT VALUE */
export const getFormInput = () => {
  return FORM_INPUT.value;
};

/* DISPLAY FETCHED MOVIES IN DOM IN BATCHES */
export const displayMovies = (movies, page = 1, itemsPerPage = 4) => {
  // display the pages [10 results are displayed per search]
  /* pg1: 0-3; pg2: 4-8; pg3: 9-12 ... */
  const first = (page - 1) * itemsPerPage; // starts from 0
  /* pg=1, last=4; pg=2, last=8; pg=3, last=12 ... */
  const last = page * itemsPerPage; // the last page

  if (!movies) {
    console.log("There are no movies to display.");
  } else {
    /* split the entire array into chunks, i.e array of arrays (4 items in inner array) */
    movies.slice(first, last).forEach(displayMovie);
    /* call the arrow btns and manipulate the page passed as arguments based on left or right btn */
    arrowBtn(page);
  }
};

/* CREATE THE ARROW BTNS AND INSERT INTO DOM */
const arrowBtn = (page) => {
  const arrowBtns = `
    <button class="movie__slider-left arrow-btn" data-goto=${page - 1}>
      <svg class="icon">
        <use xlink:href="img/svg/icons.svg#icon-arrow_back_ios"></use>
      </svg>
    </button>

    <button class="movie__slider-right arrow-btn" data-goto=${page + 1}>
      <svg class="icon">
        <use xlink:href="img/svg/icons.svg#icon-arrow_forward_ios"></use>
      </svg>
    </button>
  `;

  // append the arrowBtns to the end of slider container
  MOVIE_SLIDER_CONTAINER.insertAdjacentHTML("beforeend", arrowBtns);
};

/* CLEAR FORM INPUT */
export const clearFormInput = () => {
  FORM_INPUT.value = "";
};

/* CLEAR CONTENT DISPLAYED ON DOM */
export const clearSlider = () => {
  while (MOVIE_SLIDER_CONTAINER.firstElementChild) {
    MOVIE_SLIDER_CONTAINER.firstElementChild.remove();
  }
};
