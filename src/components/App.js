import React, { Component } from 'react';
import MovieGrid from './MovieGrid';
import ShowGrid from './ShowGrid';

import { discoverMovies, topRatedTvShows } from '../api';

class App extends Component {
  state = {
    currentPage: 1,
    movies: [],
    shows: [],
  };
  async componentWillMount() {
    const movies = await discoverMovies();
    const shows = await topRatedTvShows();
    this.setState({
      movies: movies.results,
      shows: shows.results,
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
        <ShowGrid shows={this.state.shows} />
      </div>
    );
  }
}

export default App;
