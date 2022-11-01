// burger menu
document.querySelector(".header__burger-open").addEventListener("click", () => {
  let header = document.querySelector(".header").classList.add("show");
});
document.querySelector(".header__burger-close").addEventListener("click", () => {
  let header = document.querySelector(".header").classList.remove("show");
});