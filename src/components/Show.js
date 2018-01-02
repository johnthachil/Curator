import React, { Component } from 'react';
import Styled from 'styled-components';
import { Link } from 'react-router-dom';
import Overdrive from 'react-overdrive';
import { truncateString, findGenre } from '../helper/utility';

const POSTER_PATH = 'https://image.tmdb.org/t/p/w154';

class Show extends Component {
  render() {
    const { show } = this.props;
    return (
      <div>
        <ShowWrapper>
          <Link to={`shows/${show.id}`}>
            <Overdrive id={`${show.id}`} duration={500}>
              <ImageWrapper>
              {show ? <img src={`${POSTER_PATH}${show.poster_path}`} alt="" /> : 'hello'}
            </ImageWrapper>
            </Overdrive>
            <p>{truncateString(show.original_name)}</p>
            <Genres>{truncateString(show.genre_ids.map(id => findGenre(id)).join(', '))}</Genres>
          </Link>
        </ShowWrapper>
      </div>
    );
  }
}

export default Show;

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
const ShowWrapper = Styled.div`
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
