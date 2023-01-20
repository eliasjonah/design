function headerPopup () {
  const burger = document.querySelector(".header__burger");
  const header = document.querySelector(".header");
  const popup = document.querySelector(".header__popup");
  const linksWrapper = document.querySelector(".header__links");
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

  popup.addEventListener('click', (e) => {
    if(e.target == popup && e.target != linksWrapper) {
      showHide();
    }
  })
}

export {headerPopup};