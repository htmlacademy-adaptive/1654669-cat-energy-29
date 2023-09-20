window.addEventListener("load", function (event) {
  const btn = document.querySelector(".js-menu-button");
  const menu = document.querySelector(".js-nav-menu");
  btn.addEventListener("click", (event) => {
    event.preventDefault();
    btn.classList.toggle("active");
    menu.classList.toggle("active");
  });
});
