const burger = document.querySelector(".nav-burger");
const nav = document.querySelector(".nav");

burger.addEventListener("click", () => {
  console.log("bla bla bla");
  burger.classList.toggle("is-active");
  nav.classList.toggle("is-active");
});
