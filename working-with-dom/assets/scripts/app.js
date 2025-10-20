const backdrop = document.getElementById("backdrop");
const addMovieModal = document.getElementById("add-modal");
const section = document.getElementById("entry-text");
const movieListUL = document.getElementById("movie-list");

const movies = [
  { id: 1, title: 1, imageUrl: 1, rating: 1 },
  { id: 2, title: 2, imageUrl: 2, rating: 2 },
  { id: 3, title: 3, imageUrl: 3, rating: 3 },
  { id: 4, title: 4, imageUrl: 4, rating: 4 },
  { id: 5, title: 5, imageUrl: 5, rating: 5 },
];

// inputs
// Movie Modal Inputs
const addMovieModalUserInputs = addMovieModal.querySelectorAll("input");

// buttons
// add modal
const addMovieBtn = document.querySelector("header button");
const cancelAddMovieModal = addMovieModal.querySelector(".btn--passive");
const confirmAddMovieModal = cancelAddMovieModal.nextElementSibling;

// expression functions
const clearInputUser = () => {
  addMovieModalUserInputs.forEach((userInput) => {
    userInput.value = "";
  });
};

const updateUI = () => {
  if (movies.length === 0) section.style.display = "block";
  else section.style.display = "none";
};

const deleteMovieHandler = (id) => {
  let deletedMovieIndex = null;
  movies.forEach((movie, index) => {
    if (movie.id === id) deletedMovieIndex = index;
  });
  if (deletedMovieIndex === null) {
    alert("Movie not found!");
    return;
  }
  movies.splice(deletedMovieIndex, 1);
  movieListUL.children[deletedMovieIndex].remove();
  updateUI();
};

const renderNewMovie = (id, title, imageUrl, rating) => {
  const newMovieElement = document.createElement("li");
  newMovieElement.classList.add("movie-element");
  newMovieElement.innerHTML = `
    <div class="movie-element__image">
      <img src="${imageUrl}" alt="${title}"/>
    </div>
    <div class="movie-element__info">
      <h2>${title}</h2>
      <p>${rating}/5 stars</p>
    </div>
  `;
  newMovieElement.addEventListener("click", deleteMovieHandler.bind(this, id));
  movieListUL.appendChild(newMovieElement);
};

const toggleModal = () => {
  clearInputUser();
  addMovieModal.classList.toggle("visible");
  backdrop.classList.toggle("visible");
};
// handler
const addMovieHandler = () => {
  const title = addMovieModalUserInputs[0].value.trim();
  const imageUrl = addMovieModalUserInputs[1].value.trim();
  const ratingString = addMovieModalUserInputs[2].value.trim();
  const ratingNumber = +ratingString;

  // check if title and imageUrl is empty
  if (!title || !imageUrl) {
    alert("Movie Title or Image Url are empty!");
  }
  // check rating
  if (!ratingString || ratingNumber < 1 || ratingNumber > 5) {
    alert("Raing must be between 1 and 5");
  }

  const newMovie = {
    id: Math.random().toString(),
    title,
    imageUrl,
    rating: ratingNumber,
  };

  movies.push(newMovie);
  updateUI();
  renderNewMovie(newMovie.id, title, imageUrl, ratingNumber);
  toggleModal();
};

// listeners
addMovieBtn.addEventListener("click", toggleModal);
backdrop.addEventListener("click", toggleModal);
// -- modal buttons
cancelAddMovieModal.addEventListener("click", toggleModal);

confirmAddMovieModal.addEventListener("click", addMovieHandler);

// main
if (movies.length > 0) {
  updateUI();
  movies.forEach(({ id, title, imageUrl, rating }) => {
    renderNewMovie(id, title, imageUrl, rating);
  });
}
