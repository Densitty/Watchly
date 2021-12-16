export default class Cart {
  constructor() {
    this.moviesCart = [];
  }

  purchaseMovie(num, title, price) {
    const movieItem = {
      id: new Date().getTime().toString(),
      num,
      title,
      price,
    };

    const movieInCart = this.moviesCart.find((movie) => {
      return movieItem.title === movie.title;
    });

    // console.log(movieInCart);

    if (movieInCart) {
      const movieIndex = this.moviesCart.findIndex(
        (movie) => movie.title === movieItem.title
      );

      const updatedMovie = this.moviesCart.find(
        (movie) => movie.title === movieItem.title
      );
      updatedMovie.num += 1;
      this.moviesCart.splice(movieIndex, 1);
      this.moviesCart.push(updatedMovie);
      // return updatedMovie;
    } else {
      this.moviesCart.push(movieItem);
      // return movieItem;
    }
    console.log(this.moviesCart);
    return this.moviesCart;
  }

  showCart() {
    return this.moviesCart;
  }

  removeMovie(id) {
    // const newMovies = this.moviesCart.filter(movie => {
    //   return movie.id !== id
    // })

    // this.moviesCart = newMovies;

    // return this.moviesCart

    const movieIndex = this.moviesCart.findIndex((movie) => movie.id === id);
    this.moviesCart.splice(movieIndex, 1);
  }

  updateMovieNumbers(id, newNumber) {
    const movie = this.findMovieByID(id);
    movie.num = newNumber;
    return movie;
  }

  calcPrice(id, qty, price) {
    const movie = this.findMovieByID(id);
    movie.price = parseInt(qty) * price;
    console.log(movie);
  }

  findMovieByID(id) {
    return this.moviesCart.find((movie) => movie.id === id);
  }
}
