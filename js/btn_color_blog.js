let currentActiveButton = null;

function changeColor(index) {
  const buttons = document.querySelectorAll(".blog_btns .button");

  if (currentActiveButton !== null) {
    currentActiveButton.classList.remove("active");
  }

  buttons[index].classList.add("active");

  currentActiveButton = buttons[index];
}