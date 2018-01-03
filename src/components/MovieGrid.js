import React, { Component } from 'react';
import Styled from 'styled-components';
import PropTypes from 'prop-types';
import Movie from './Movie';

class MovieGrid extends Component {
  render() {
    return (
      <div>
        <Heading>Discover Movies</Heading>
        <MovieGridWrapper>
          {this.props.movies.slice(0, 18).map(movie => <Movie movie={movie} key={movie.id} />)}
        </MovieGridWrapper>
      </div>
    );
  }
}

export default MovieGrid;

const MovieGridWrapper = Styled.div`
  padding: 0 20px;
  display:grid;
  grid-template-columns: repeat( auto-fit, minmax(160px, 1fr) );
  grid-row-gap:1rem;
  grid-column-gap:2rem;
  margin-bottom:50px;
  min-height:800px;
`;

const Heading = Styled.h1`
  font-size:24px;
  color:white;
  padding:10px 24px;
`;
