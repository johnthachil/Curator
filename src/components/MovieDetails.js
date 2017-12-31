import React, { Component } from 'react';
import Styled from 'styled-components';
import Overdrive from 'react-overdrive';
import { getMovieDetails } from '../api';

const POSTER_PATH = 'https://image.tmdb.org/t/p/w154';
const BACKDROP_PATH = 'https://image.tmdb.org/t/p/w1280';

class MovieDetails extends Component {
  state = {
    movie: [],
    movieGenres: [],
  };
  async componentWillMount() {
    const movie = await getMovieDetails(this.props.match.params.id);
    this.setState({
      movie,
      movieGenres: movie.genres,
    });
  }
  render() {
    const { movie, movieGenres } = this.state;
    return (
      <div>
        <BackDropWrapper>
          <img src={`${BACKDROP_PATH}${movie.backdrop_path}`} alt="" />
          <Overlay />
        </BackDropWrapper>
        <ContentWrapper>
          <Overdrive id={`${movie.id}`} duration={500}>
            <ImageWrapper>
              <img src={`${POSTER_PATH}${movie.poster_path}`} alt="" />
            </ImageWrapper>
          </Overdrive>
          <MovieInfoWrapper>
            <h1>{movie.original_title}</h1>
            <p className="genre">{movieGenres.map(genre => genre.name).join(', ')}</p>
            <div className="genral-info">
              <div>
                <i className="fas fa-calendar-alt" /> {movie.release_date}
              </div>
              <div>
                <i className="fas fa-dollar-sign" /> {movie.budget}
              </div>
              <div>
                <i className="fas fa-clock" /> {movie.runtime} mins
              </div>
              <div>
                <i className="fas fa-language" /> {movie.original_language} Language
              </div>
            </div>
            <p>{movie.overview}</p>
          </MovieInfoWrapper>
        </ContentWrapper>
      </div>
    );
  }
}

export default MovieDetails;

const BackDropWrapper = Styled.div`
   width:100%;
   height:400px;
   overflow:hidden;
   position: relative;
   img{
     max-width:100%;
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
  img{
    box-shadow: 0 2px 7px 0 rgba(0,0,0,0.72);
    border-radius: 4px;
    max-width:100%;
  }

`;

const ContentWrapper = Styled.div`
  transform: translateY(-50px);
  max-width:800px;
  margin:0 auto;
  display:grid;
  grid-template-columns:160px auto;
  grid-column-gap:20px;

`;
const MovieInfoWrapper = Styled.div`
  padding:60px 10px;
  .genre{
    opacity:0.8;
  }
  p{
    line-height:1.8;
  }
  .genral-info{
    display:grid;
    grid-template-columns:auto auto auto auto;

  }


`;
