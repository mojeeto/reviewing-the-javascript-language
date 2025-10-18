const backdrop = document.getElementById("backdrop");

// buttons
// add modal
const addMovieModal = document.getElementById("add-modal");
const addMovieBtn = document.querySelector("header button");
const cancelAddMovieModal = addMovieModal.querySelector(".btn--passive");

// expression functions
const toggleModal = () => {
  addMovieModal.classList.toggle("visible");
  backdrop.classList.toggle("visible");
};

// listeners
addMovieBtn.addEventListener("click", toggleModal);
backdrop.addEventListener("click", toggleModal);
// -- modal buttons
cancelAddMovieModal.addEventListener("click", toggleModal);
