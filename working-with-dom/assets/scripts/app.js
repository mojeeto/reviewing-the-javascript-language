const backdrop = document.getElementById("backdrop");
const addMovieModal = document.getElementById("add-modal");

// inputs
// Movie Modal Inputs
const addMovieModalUserInputs = addMovieModal.querySelectorAll("input");

// buttons
// add modal
const addMovieBtn = document.querySelector("header button");
const cancelAddMovieModal = addMovieModal.querySelector(".btn--passive");
const confirmAddMovieModal = cancelAddMovieModal.nextElementSibling;

// expression functions
const toggleModal = () => {
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
};

// listeners
addMovieBtn.addEventListener("click", toggleModal);
backdrop.addEventListener("click", toggleModal);
// -- modal buttons
cancelAddMovieModal.addEventListener("click", toggleModal);

confirmAddMovieModal.addEventListener("click", addMovieHandler);
