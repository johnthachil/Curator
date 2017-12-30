export async function discoverMovies(pageNo = 1) {
  try {
    const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=e7e23d6add0a8325d12bd9817b4d7bf3&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNo}`);
    const movies = await res.json();
    return movies;
  } catch (e) {
    console.log(e);
  }
}

export async function getMovieDetails(movieID) {
  try {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${movieID}?api_key=e7e23d6add0a8325d12bd9817b4d7bf3&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`);
    const movie = await res.json();
    return movie;
  } catch (e) {
    console.log(e);
  }
}

