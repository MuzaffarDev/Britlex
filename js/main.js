// burger menu
document.querySelector(".header__burger-open").addEventListener("click", () => {
  let header = document.querySelector(".header").classList.add("show");
});
document.querySelector(".header__burger-close").addEventListener("click", () => {
  let header = document.querySelector(".header").classList.remove("show");
});

// header buttonlari activ  holatga keltiradigan js code

let itemBtn = document.querySelectorAll(".header__menu-item");

itemBtn.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.classList.contains("active")) {
      item.classList.remove("active");
    } else {
      item.classList.add("active");
    }
  });
});