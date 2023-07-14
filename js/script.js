const films = [
  { title: "Inception", genre: "Sci-Fi", year: 2010 },
  { title: "The Shawshank Redemption", genre: "Drama", year: 1994 },
  { title: "The Dark Knight", genre: "Action", year: 2008 },
  { title: "Pulp Fiction", genre: "Crime", year: 1994 },
  { title: "Fight Club", genre: "Drama", year: 1999 },
];

const recentFilms = films.filter((films) => films.year >= 2000);
const actionGenre = films.filter((films) => films.genre === "Action");

console.log(recentFilms);
console.log(actionGenre);