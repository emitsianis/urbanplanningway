showDropDown = () => {
  document.getElementById("dropdown-menu").style.height = "230px";
  setTimeout(() => {
    document.querySelector(".dropdown-nav").classList.remove("no-display");
    document.querySelector(".bars").classList.add("no-display");
    document.querySelector(".times").classList.remove("no-display");
  }, 500);
};

hideDropDown = () => {
  document.getElementById("dropdown-menu").style.height = "0px";
  setTimeout(() => {
    document.querySelector(".dropdown-nav").classList.add("no-display");
    document.querySelector(".bars").classList.remove("no-display");
    document.querySelector(".times").classList.add("no-display");
  }, 300);
};

const scroll = new SmoothScroll('a[href*="#"]', { speed: 800 });

document.getElementById("dropdown-btn").addEventListener("click", showDropDown);
document
  .getElementById("dropdown-close-btn")
  .addEventListener("click", hideDropDown);

document.getElementById("home").addEventListener("click", hideDropDown);
document.getElementById("about").addEventListener("click", hideDropDown);
document.getElementById("skills").addEventListener("click", hideDropDown);
document.getElementById("contact").addEventListener("click", hideDropDown);
const images = document.querySelectorAll(".parallax");

for (const image of images) {
  image.addEventListener("click", hideDropDown);
}
