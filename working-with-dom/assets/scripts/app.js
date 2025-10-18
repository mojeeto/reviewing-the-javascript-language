const backdrop = document.getElementById("backdrop");
const addMovieModal = document.getElementById("add-modal");
const section = document.getElementById("entry-text");

const movies = [];

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

const renderNewMovie = (title, imageUrl, rating) => {
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

  const movieListUL = document.getElementById("movie-list");
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
    title,
    imageUrl,
    rating: ratingNumber,
  };

  movies.push(newMovie);
  updateUI();
  renderNewMovie(title, imageUrl, ratingNumber);
  toggleModal();
};

// listeners
addMovieBtn.addEventListener("click", toggleModal);
backdrop.addEventListener("click", toggleModal);
// -- modal buttons
cancelAddMovieModal.addEventListener("click", toggleModal);

confirmAddMovieModal.addEventListener("click", addMovieHandler);
