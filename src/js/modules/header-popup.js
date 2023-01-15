function headerPopup () {
  const burger = document.querySelector(".header__burger");
  const header = document.querySelector(".header");
  const popup = document.querySelector(".header__popup");
  const links = document.querySelectorAll(".header__link");
  const html = document.querySelector("html");

  function showHide () {
    const activeItems = [burger, header, popup, html];

    activeItems.forEach(item => {
      item.classList.toggle("active");
    });
  }

  burger.onclick = function () {
    showHide();
  }

  links.forEach(item => {
    item.onclick = function () {
      showHide();
    }
  });
}

export {headerPopup};