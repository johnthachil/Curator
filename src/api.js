export async function discoverMovies(pageNo = 2) {
  try {
    const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=e7e23d6add0a8325d12bd9817b4d7bf3&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNo}`);
    const movies = await res.json();
    return movies;
  } catch (e) {
    console.log(e);
  }
  return [];
}

export async function getMovieDetails(movieID) {
  try {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${movieID}?api_key=e7e23d6add0a8325d12bd9817b4d7bf3&language=en-US&append_to_response=credits`);
    const movie = await res.json();
    return movie;
  } catch (e) {
    console.log(e);
  }
  return [];
}

export async function getShowDetails(showID) {
  try {
    const res = await fetch(`https://api.themoviedb.org/3/tv/${showID}?api_key=e7e23d6add0a8325d12bd9817b4d7bf3&language=en-US&append_to_response=credits
    `);
    const show = await res.json();
    return show;
  } catch (e) {
    console.log(e);
  }
  return [];
}

export async function topRatedTvShows(pageNo = 1) {
  try {
    const res = await fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=e7e23d6add0a8325d12bd9817b4d7bf3&language=en-US&page=${pageNo}`);
    const movies = await res.json();
    return movies;
  } catch (e) {
    console.log(e);
  }
  return [];
}

