import React, { Component } from 'react';
import { ScaleLoader } from 'halogenium';
import Styled from 'styled-components';

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
        {this.state.movies.length === 0 ? (
          <SpinnerWrapper><ScaleLoader color="#fff" size="16px" margin="2px" /></SpinnerWrapper>
        ) : (
          <MovieGrid movies={this.state.movies} />
        )}
        {this.state.shows.length === 0 ? (
          <div />
        ) : (
          <ShowGrid shows={this.state.shows} />
        )}
      </div>
    );
  }
}

export default App;

const SpinnerWrapper = Styled.div`
  width:100%;
  display:flex;
  margin:200px auto;
  justify-content: space-around;
`;
