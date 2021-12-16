import { api, movieUrl } from "../utils/config";

class Movie {
  constructor(imdbID) {
    this.id = imdbID;
  }

  async getMovie() {
    try {
      const result = await fetch(`${api}&i=${this.id}`);
      const data = await result.json();

      const {
        Title,
        Year,
        Rated,
        Released,
        Runtime,
        Genere,
        Director,
        Actors,
        Plot,
        BoxOffice,
        Ratings,
        Type,
        Awards,
        imdbRating,
        Poster,
        Production,
        Writer,
        imdbVotes,
      } = data;

      this.title = Title;
      this.rated = Rated;
      this.rating = Ratings;
      this.runtime = Runtime;
      this.production = Production;
      this.poster = Poster;
      this.plot = Plot;
      this.boxOffice = BoxOffice;
      this.awards = Awards;
      this.director = Director;
      this.url = `${movieUrl}/${this.id}`;
      this.imdbRating = imdbRating;
      this.imdbVotes = imdbVotes;

      this.ticketNumbers = 1;
      this.price = 100000 / 100;

      this.getMainActor(Actors);
      this.getMovieCrew(Writer);
      this.movieRating(imdbRating);

      // this.movies = data.Search;
    } catch (e) {
      alert("Something went wrong.");
    }
  }

  getMainActor(actors) {
    const allActors = actors.split(",");
    this.actors = allActors;
    this.mainActor = allActors[0];
  }

  getMovieCrew(writer) {
    this.writer = writer.split(",");
  }

  movieRating(rating) {
    this.ratingArray = [];

    // if the rating on movie is 10 (full rating)
    if (rating === "10") {
      for (let i = 0; i < parseInt(rating); i++) {
        this.ratingArray.push(i);
      }
    } else {
      // if rating is less than 10 (full rating)
      let theArray = rating.split(".");
      let integerPart = parseInt(theArray[0]);
      let decimalPart = parseInt(theArray[1]);

      if (decimalPart > 0) {
        // loop through the integers alone
        for (let i = 0; i < integerPart; i++) {
          // push the integers alone to the ratingsArray
          this.ratingArray.push(i);
        }

        // push the decimal to the ratingsArray
        this.ratingArray.push(0.5);
      } else if (decimalPart <= 0) {
        // if the decimal part is 0 or less
        for (let i = 0; i < integerPart; i++) {
          // push the integers to the ratingsArray
          this.ratingArray.push(i);
        }
      }
    }
  }

  updateTickets(type) {
    switch (type) {
      case "add":
        this.ticketNumbers += 1;
        return this.ticketNumbers;

      case "minus":
        this.ticketNumbers -= 1;
        return this.ticketNumbers;

      default:
        return;
    }
  }

  updateMovieInCart(qty) {
    this.ticketNumbers = qty;
  }
}

export default Movie;
