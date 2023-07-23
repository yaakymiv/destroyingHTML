let currentActiveButton = null;

function changeColor(index) {
  const buttons = document.querySelectorAll(".cases_main .button");

  if (currentActiveButton !== null) {
    currentActiveButton.classList.remove("active");
  }

  buttons[index].classList.add("active");

  currentActiveButton = buttons[index];
}

function expand() {
  var casesAddDiv = document.querySelector(".cases_ul");
  var lookMoreButton = document.getElementById("look_more");

  if (casesAddDiv.classList.contains("active")) {
    casesAddDiv.classList.remove("active");
    lookMoreButton.textContent = "Дивитись ще";
  } else {
    casesAddDiv.classList.add("active");
    lookMoreButton.textContent = "Закрити";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel");
  const carouselItems = document.querySelectorAll(".carousel-item");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  const itemWidth = carouselItems[0].offsetWidth;
  const numItems = carouselItems.length;
  const numVisibleItems = 4;
  let currentIndex = 0;

  function updateCarousel() {
    carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;

    if (currentIndex === 0) {
      prevBtn.style.display = "none";
      document.querySelector("#team_h2").style.marginRight = "943px";
    } else {
      document.querySelector("#team_h2").style.marginRight = "883px";
      prevBtn.style.display = "block";
    }

    if (currentIndex >= numItems - numVisibleItems) {
      nextBtn.style.display = "none";
    } else {
      nextBtn.style.display = "block";
    }
  }

  function showPrevItems() {
    currentIndex = Math.max(currentIndex - 1, 0);
    updateCarousel();
  }

  function showNextItems() {
    currentIndex = Math.min(currentIndex + 1, numItems - numVisibleItems);
    updateCarousel();
  }

  prevBtn.addEventListener("click", showPrevItems);
  nextBtn.addEventListener("click", showNextItems);

  updateCarousel();
});


//validation
const openButton = document.getElementById("openButton");
const popup1 = document.getElementById("popup1");

openButton.addEventListener("click", () => {
  popup1.style.display = "block";
  overlay.style.display = "block";
});

const closeButton = document.getElementById("close_btn");
const overlay = document.getElementById("overlay");


closeButton.addEventListener("click", () => {
  popup1.style.display = "none";
  overlay.style.display = "none";
  document.getElementById("order_form").reset();
});


orderButton = document.getElementById('order_btn');
const popup2 = document.getElementById("popup2");

function validateName() {
  var name = document.getElementById("name_form").value;
  if (name.length > 1) {
    return true;
  }
  return false;
}

function validatePhone() {
  var phone = document.getElementById("phone").value;
  if (phone.length != 10) {
    return false;
  }
  if (!phone.match(/^[0-9]{10}$/)) {
    return false;
  }
  return true;
}

function validateEmail() {
  var email = document.getElementById("email").value;
  if(email.match(/^[A-Za-z]\.\-[0-9]*[@][a-zA-Z]*[\.][a-z]{2,}$/)){
    return true;
  }
  return false;
}


orderButton.addEventListener("click", () => {
  if(validateName()&&validatePhone()&&validateEmail()){
    popup1.style.display = "none";
    popup2.style.display = "block";
  }else{
    if(!validateName()){
      document.getElementById('e-name').style.display="block";
    }
    if(!validatePhone()){
      document.getElementById('e-phone').style.display="block";
    }
    if(!validateEmail()){
      document.getElementById('e-email').style.display="block";
    }
  }
});


const OK = document.getElementById("ok");

OK.addEventListener("click", () => {
  popup2.style.display = "none";
  overlay.style.display = "none";
  document.getElementById("order_form").reset();
});







