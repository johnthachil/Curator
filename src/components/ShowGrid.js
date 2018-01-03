import React, { Component } from 'react';
import Styled from 'styled-components';
import PropTypes from 'prop-types';
import Show from './Show';

class ShowGrid extends Component {
  render() {
    return (
      <div>
        <Heading>Top Rated Shows</Heading>
        <ShowGridWrapper>
          {this.props.shows.slice(0, 18).map(show => <Show show={show} key={show.id} />)}
        </ShowGridWrapper>
      </div>
    );
  }
}

export default ShowGrid;

const ShowGridWrapper = Styled.div`
  padding: 0 20px;
  display:grid;
  grid-template-columns: repeat( auto-fit, minmax(160px, 1fr) );
  grid-row-gap:1rem;
  grid-column-gap:2rem;
  margin-bottom:50px;
`;

const Heading = Styled.h1`
  font-size:24px;
  color:white;
  padding:10px 24px;
`;
