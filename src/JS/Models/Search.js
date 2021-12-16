import { api } from "../utils/config";

class Search {
  movies = [];

  constructor(searchTerm) {
    this.query = searchTerm;
  }

  async searchMovie() {
    try {
      const result = await fetch(`${api}&s=${this.query}`);
      const data = await result.json();
      this.movies = data.Search;
    } catch (e) {
      return e;
    }
  }
}

export default Search;
