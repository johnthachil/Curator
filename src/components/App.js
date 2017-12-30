import React, { Component } from 'react';
import MovieGrid from './MovieGrid';
import { discoverMovies } from '../api';

class App extends Component {
  state = {
    movies: [],
  };
  async componentWillMount() {
    const movies = await discoverMovies();
    this.setState({
      movies: movies.results,
    });
  }

  render() {
    return (
      <div>
        <MovieGrid movies={this.state.movies} />
      </div>
    );
  }
}

export default App;
