import Cart from "../Models/Cart";
import { displayCartNumber, displayMovieItem } from "../Views/cartView";

const CartController = (dataObj) => {
  // const { search, movie, cart } = dataObj;
  // Create new cart if cart is not present
  if (!dataObj.cart) {
    dataObj.cart = new Cart();
  }

  const movieItem = dataObj.cart.purchaseMovie(
    dataObj.movie.ticketNumbers,
    dataObj.movie.title,
    dataObj.movie.price
  );

  // console.log(movieItem);
  // display the movie item
  displayMovieItem(dataObj.cart.moviesCart);

  // display cart number
  const cartNumber = dataObj.cart.showCart();
  displayCartNumber(cartNumber.length);
};

export default CartController;
