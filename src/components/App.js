import React, { Component } from 'react';
import MovieGrid from './MovieGrid';
import { discoverMovies } from '../api';

class App extends Component {
  state = {
    currentPage: 1,
    movies: [],
  };
  async componentWillMount() {
    const movies = await discoverMovies();
    this.setState({
      movies: movies.results,
    });
  }
  nextPage = async () => {
    const nextPage = this.state.currentPage + 1;
    const movies = await discoverMovies(nextPage);
    this.setState({
      movies: movies.results,
      currentPage: nextPage,
    });
  };

  render() {
    return (
      <div>
        <MovieGrid movies={this.state.movies} />
      </div>
    );
  }
}

export default App;
