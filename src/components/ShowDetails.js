import React, { Component } from 'react';
import Styled from 'styled-components';
import Overdrive from 'react-overdrive';
import Cast from './Cast';
import { getShowDetails } from '../api';

const POSTER_PATH = 'https://image.tmdb.org/t/p/w154';
const BACKDROP_PATH = 'https://image.tmdb.org/t/p/w1280';

class ShowDetails extends Component {
  state = {
    show: {
      genres: [],
      credits: {
        cast: [],
        crew: [],
      },
    },
  };

  async componentWillMount() {
    const show = await getShowDetails(this.props.match.params.id);
    this.setState({
      show,
    });
  }
  render() {
    const { show } = this.state;
    return (
      <div>
        <BackDropWrapper>
          <img src={`${BACKDROP_PATH}${show.backdrop_path}`} alt="" />
          <Overlay />
        </BackDropWrapper>
        <ContentWrapper>
          <Overdrive id={`${show.id}`} duration={500}>
            <ImageWrapper>
              <img src={`${POSTER_PATH}${show.poster_path}`} alt="" />
            </ImageWrapper>
          </Overdrive>
          <ShowInfoWrapper>
            <h1>{show.original_name}</h1>
            <p className="genre">{show.genres.map(genre => genre.name).join(', ')}</p>
            {/* <div className="genral-info">
              <div>
                <i className="fas fa-calendar-alt" /> {movie.release_date}
              </div>
              <div>
                <i className="fas fa-dollar-sign" /> {movie.budget}
              </div>
              <div>
                <i className="fas fa-clock" /> {movie.runtime} mins
              </div>
            </div> */}
            <p>{show.overview}</p>
            <h3>CASTS</h3>
            <CastWrapper>
              {this.state.show.credits.cast.slice(0, 3).map(cast => <Cast cast={cast} key={cast.id} />)}
            </CastWrapper>
          </ShowInfoWrapper>
        </ContentWrapper>
      </div>
    );
  }
}

export default ShowDetails;

const BackDropWrapper = Styled.div`
   width:100%;
   height:400px;
   overflow:hidden;
   position: relative;
   img{
     width:100%;
   }
`;
const Overlay = Styled.div`
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:400px;
  background: linear-gradient(182deg, rgba(255,255,255,0) 0%, rgba(0,0,0,0.8) 100%);
`;

const ImageWrapper = Styled.div`
  display:inline-block;
  height:228px;
  width:154px;
  background-color:#212227;
  box-shadow: 0 2px 7px 0 rgba(0,0,0,0.72);
  img{
    border-radius: 4px;
    max-width:100%;
  }

`;

const ContentWrapper = Styled.div`
  transform: translateY(-50px);
  max-width:800px;
  margin:0 auto;
  display:grid;
  grid-template-columns:auto auto;
  grid-column-gap:20px;

`;
const ShowInfoWrapper = Styled.div`
  padding:60px 10px;
  .genre{
    opacity:0.8;
  }
  p{
    line-height:1.8;
  }
  .genral-info{
    display:grid;
    grid-template-columns:auto auto auto;

  }


`;
const CastWrapper = Styled.div`
  display: grid;
  grid-template-columns:auto auto auto auto;
  grid-column-gap:20px;
`;
