const searchInput = document.getElementById("searchInput");
const movieList = document.getElementById("movieList");

function displayMovies(movies) {
  movieList.innerHTML = "";

  if (movies.length === 0) {
    const noResultsItem = document.createElement("li");
    noResultsItem.textContent = "No results found.";
    movieList.appendChild(noResultsItem);
    return;
  }

  movies.forEach((movie) => {
    const listItem = document.createElement("li");
    listItem.textContent = movie.title;
    movieList.appendChild(listItem);
  });
}

function searchMovies() {
  const searchTerm = searchInput.value.toLowerCase();

  fetch("./movies.json")
    .then((response) => response.json())
    .then((films) => {
      const filteredMovies = films.filter((movie) => {
        const lowerCaseTitle = movie.title.toLowerCase();
        const lowerCaseGenre = movie.genre.toLowerCase();
        const yearString = movie.year.toString();

        return (
          lowerCaseTitle.includes(searchTerm) ||
          lowerCaseGenre.includes(searchTerm) ||
          yearString.includes(searchTerm)
        );
      });

      displayMovies(filteredMovies);
    });
}

function displayMovies(movies) {
    movieList.innerHTML = "";
  
    if (searchInput.value.trim() === "") {
      return;
    }
  
    if (movies.length === 0) {
      const noResultsItem = document.createElement("li");
      noResultsItem.textContent = "No results found.";
      movieList.appendChild(noResultsItem);
      return;
    }
  
    movies.forEach((movie) => {
      const listItem = document.createElement("li");
      listItem.textContent = movie.title;
      movieList.appendChild(listItem);
    });
  }

searchInput.addEventListener("input", searchMovies);
