const addMovieModal = document.getElementById("add-modal");
const addMovieBtn = document.querySelector("header button");

addMovieBtn.addEventListener("click", () => {
  addMovieModal.classList.toggle("visible");
});
