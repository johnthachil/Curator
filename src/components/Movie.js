import React, { Component } from 'react';
import Styled from 'styled-components';
import { Link } from 'react-router-dom';
import Overdrive from 'react-overdrive';
import { truncateString, findGenre } from '../helper/utility';

const POSTER_PATH = 'https://image.tmdb.org/t/p/w154';

class Movie extends Component {
  render() {
    const { movie } = this.props;
    return (
      <div>
        <MovieWrapper>
          <Link to={`movies/${movie.id}`}>
            <Overdrive id={`${movie.id}`} duration={500}>
              <ImageWrapper>
                {movie ? <img src={`${POSTER_PATH}${movie.poster_path}`} alt="" /> : 'hello'}
              </ImageWrapper>
            </Overdrive>
            <p>{truncateString(movie.original_title)}</p>
            <Genres>{truncateString(movie.genre_ids.map(id => findGenre(id)).join(', '))}</Genres>
          </Link>
        </MovieWrapper>
      </div>
    );
  }
}

export default Movie;

const ImageWrapper = Styled.div`
  display:inline-block;
  height:228px;
  width:154px;
  background-color:#212227;
  box-shadow: 0 2px 7px 0 rgba(0,0,0,0.72);
  border-radius: 4px;
  img{
    max-width:100%;
  }


`;
const MovieWrapper = Styled.div`
  p{
    margin-bottom:0;
  }
  a{
    color:white;
    text-decoration:none;
  }
`;

const Genres = Styled.span`
  font-size:12px;
  word-wrap: break-word;
`;
