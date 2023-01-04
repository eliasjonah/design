function burger () {
  document.querySelector(".header__burger").onclick = function () {
    this.classList.toggle("clicked");
  };
}

export {burger};
