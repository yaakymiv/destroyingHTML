//validation
const openButton = document.getElementById("openButton");
const openTalk = document.getElementById("talk_btn");
const openConsults = document.getElementsByClassName("consult_btn");
const popup1 = document.getElementById("popup1");
const targetElement = document.getElementById('targetElement');


for (let i = 0; i < openConsults.length; i++) {
  openConsults[i].addEventListener("click", () => {
      popup1.style.display = "block";
      overlay.style.display = "block";
      targetElement.textContent = 'Замовити консультацію';
  });
}

openTalk.addEventListener("click", () => {
  popup1.style.display = "block";
  overlay.style.display = "block";
  targetElement.textContent = 'Замовити демо';
});

openButton.addEventListener("click", () => {
  popup1.style.display = "block";
  overlay.style.display = "block";
  targetElement.textContent = 'Замовити демо';
});

const closeButton1 = document.getElementById("close_btn1");
const closeButton2 = document.getElementById("close_btn2");
const overlay = document.getElementById("overlay");

closeButton1.addEventListener("click", () => {
  popup1.style.display = "none";
  overlay.style.display = "none";
  e_name.innerHTML="";
  e_phone.innerHTML="";
  e_email.innerHTML="";
  document.getElementById("order_form").reset();
});



var e_name = document.getElementById("e-name");
function validateName() {
  var name = document.getElementById("name").value;
  if (name.length<=2) {
    e_name.innerHTML = "Введіть більше двох літер";
    return false;
  }
  e_name.innerHTML =
    '<i class="fa-solid fa-circle-check" style="color: #4aed7b; position:relative;top:-30px;right:10px;"></i>';
    return true;
}

var e_phone = document.getElementById("e-phone");
function validatePhone() {
  var phone = document.getElementById("phone").value;
  if (phone.length === 0) {
    e_phone.innerHTML = ""; 
    return true; 
  }
  if (phone.length!=9||!phone.match(/^[0-9]{9}$/)) {
    e_phone.innerHTML = "Номер має містити 9 цифр";
    return false;
  }
  e_phone.innerHTML =
  '<i class="fa-solid fa-circle-check" style="color: #4aed7b; position:relative;top:-30px;right:10px;"></i>';
    return true;
}

var e_email = document.getElementById("e-email");
function validateEmail() {
  var email = document.getElementById("email").value;
  if (!email.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/)) {
    e_email.innerHTML = "Дотримуйтесь формату: example@user.com";
    return false;
  }
  e_email.innerHTML =
  '<i class="fa-solid fa-circle-check" style="color: #4aed7b; position:relative;top:-30px;right:10px;"></i>';
    return true;
}


const nameInput = document.getElementById("name");
const phoneInput = document.getElementById("phone");
const emailInput = document.getElementById("email");

nameInput.addEventListener("input", updateButtonColor);
phoneInput.addEventListener("input", updateButtonColor);
emailInput.addEventListener("input", updateButtonColor);

function updateButtonColor() {
  if (validateName() && validatePhone() && validateEmail()) {
    orderButton.classList.add("button-success");
  } else {
    orderButton.classList.remove("button-success");
  }
}

const popup2 = document.getElementById("popup2");
orderButton = document.getElementById("order_btn");

orderButton.addEventListener("click", () => {
  if(!validateName() || !validatePhone() || !validateEmail()){
    return;
  }else{
    orderButton.classList.remove("button-success");
    e_name.innerHTML="";
    e_phone.innerHTML="";
    e_email.innerHTML="";
    popup1.style.display = "none";
    popup2.style.display = "block";
  }
});

closeButton2.addEventListener("click", () => {
  popup2.style.display = "none";
  overlay.style.display = "none";
  document.getElementById("order_form").reset();
});


const OK = document.getElementById("ok");

OK.addEventListener("click", () => {
  popup2.style.display = "none";
  overlay.style.display = "none";
  document.getElementById("order_form").reset();
});
