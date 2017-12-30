import Genres from './genres';

export function truncateString(string) {
  if (string.length > 15) return `${string.substring(0, 15)}...`;
  return string;
}

export function findGenre(genreID) {
  const genreIndex = Genres.findIndex(element => element.id === genreID);
  return Genres[genreIndex].name;
}

