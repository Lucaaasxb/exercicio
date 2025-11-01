const movies = [];
const ratings = [];

const movieInput = document.getElementById("movieInput");
const addMovieBtn = document.getElementById("addMovieBtn");
const movieList = document.getElementById("movieList");
const ratedMovies = document.getElementById("ratedMovies");

addMovieBtn.addEventListener("click", () => {
  const movieName = movieInput.value.trim();
  if (movieName === "") return alert("Digite o nome do filme!");

  movies.push(movieName);
  ratings.push(0);
  movieInput.value = "";
  renderMovies();
});

function renderMovies() {
  movieList.innerHTML = "";
  movies.forEach((movie, index) => {
    const div = document.createElement("div");
    div.classList.add("mb-3");

    const stars = Array.from({ length: 5 }, (_, i) => {
      const star = document.createElement("span");
      star.textContent = "★";
      star.classList.add("star");
      if (i < ratings[index]) star.classList.add("active");
      star.addEventListener("click", () => rateMovie(index, i + 1));
      return star;
    });

    const title = document.createElement("h5");
    title.textContent = movie;

    div.appendChild(title);
    stars.forEach(s => div.appendChild(s));
    movieList.appendChild(div);
  });
}

function rateMovie(index, rating) {
  ratings[index] = rating;
  renderMovies();
  renderRatedMovies();
}

function renderRatedMovies() {
  ratedMovies.innerHTML = "";
  movies.forEach((movie, i) => {
    if (ratings[i] > 0) {
      const li = document.createElement("li");
      li.classList.add("list-group-item", "text-light");
      li.textContent = `${movie} — ${"★".repeat(ratings[i])}${"☆".repeat(5 - ratings[i])}`;
      ratedMovies.appendChild(li);
    }
  });
}
 