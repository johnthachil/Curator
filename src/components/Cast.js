import React, { Component } from 'react';
import Styled from 'styled-components';
import { truncateString } from '../helper/utility';


const POSTER_PATH = 'https://image.tmdb.org/t/p/w185';

class Cast extends Component {
  render() {
    const { cast } = this.props;
    return (
      <div>
        <CastImageWrapper>
          <ImageWrapper>
            {cast.profile_path ? <img src={`${POSTER_PATH}${cast.profile_path}`} alt="" /> : <p>No Image </p>}
          </ImageWrapper>
          <p>{truncateString(cast.name)}</p>
          <CharacterName>as {truncateString(cast.character)}</CharacterName>
        </CastImageWrapper>
      </div>
    );
  }
}

export default Cast;

const ImageWrapper = Styled.div`
  display:flex;
  text-align:center;
  background-color:#212227;
  box-shadow: 0 2px 7px 0 rgba(0,0,0,0.72);
  border-radius: 4px;
  img{
    max-width:100%;
  }

`;
const CastImageWrapper = Styled.div`
  p{
    margin-bottom:0;
  }
  a{
    color:white;
    text-decoration:none;
  }
`;

const CharacterName = Styled.p`
    margin-top:0;
    opacity:0.6;
`;
