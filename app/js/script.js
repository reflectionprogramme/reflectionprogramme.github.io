const hamburgerBtn = document.querySelector(".hamburger__button");
const header = document.querySelector(".header");
const mobile = document.querySelector(".mobile");

hamburgerBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("hamburger button clicked");
  if (
    header.classList.contains("open") &&
    mobile.classList.contains("expand")
  ) {
    header.classList.remove("open");
    mobile.classList.remove("expand");
  } else {
    header.classList.add("open");
    mobile.classList.add("expand");
  }
});

const year = document.getElementById("year");
const date = new Date();
year.innerText = date.getFullYear();
