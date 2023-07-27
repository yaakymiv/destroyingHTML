//validation
const openButtonT = document.getElementById("talk_btn");
const popup1T = document.getElementById("popup1_t");
const overlayT = document.getElementById("overlay_talk");

openButtonT.addEventListener("click", () => {
  popup1T.style.display = "block";
  overlayT.style.display = "block";
});

const closeButton1T = document.getElementById("close_btn1_t");
const closeButton2T = document.getElementById("close_btn2_t");


closeButton1T.addEventListener("click", () => {
  popup1T.style.display = "none";
  overlayT.style.display = "none";
  e_nameT.innerHTML="";
  e_phoneT.innerHTML="";
  e_emailT.innerHTML="";
  document.getElementById("talk_form").reset();
});

var e_nameT = document.getElementById("e-name-t");
function validateNameT() {
  var nameT = document.getElementById("name_t").value;
  if (nameT.length<=2) {
    e_nameT.innerHTML = "Введіть більше двох літер";
    return false;
  }
  e_nameT.innerHTML =
    '<i class="fa-solid fa-circle-check" style="color: #4aed7b; position:relative;top:-30px;right:10px;"></i>';
    return true;
}

var e_phoneT = document.getElementById("e-phone-t");
function validatePhoneT() {
  var phoneT = document.getElementById("phone_t").value;
  if (phoneT.length === 0) {
    e_phoneT.innerHTML = ""; 
    return true; 
  }
  if (phoneT.length!=9||!phoneT.match(/^[0-9]{9}$/)) {
    e_phoneT.innerHTML = "Номер має містити 9 цифр";
    return false;
  }
  e_phoneT.innerHTML =
  '<i class="fa-solid fa-circle-check" style="color: #4aed7b; position:relative;top:-30px;right:10px;"></i>';
    return true;
}

var e_emailT = document.getElementById("e-email-t");
function validateEmailT() {
  var emailT = document.getElementById("email_t").value;
  if (!emailT.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/)) {
    e_emailT.innerHTML = "Дотримуйтесь формату: example@user.com";
    return false;
  }
  e_emailT.innerHTML =
  '<i class="fa-solid fa-circle-check" style="color: #4aed7b; position:relative;top:-30px;right:10px;"></i>';
    return true;
}


const nameInputT = document.getElementById("name_t");
const phoneInputT = document.getElementById("phone_t");
const emailInputT = document.getElementById("email_t");

nameInputT.addEventListener("input", updateButtonColorT);
phoneInputT.addEventListener("input", updateButtonColorT);
emailInputT.addEventListener("input", updateButtonColorT);

function updateButtonColorT() {
  if (validateNameT() && validatePhoneT() && validateEmailT()) {
    orderButtonT.classList.add("button-success");
  } else {
    orderButtonT.classList.remove("button-success");
  }
}

const popup2T = document.getElementById("popup2_t");
orderButtonT = document.getElementById("talk_btn_o");

orderButtonT.addEventListener("click", () => {
  if(!validateNameT() || !validatePhoneT() || !validateEmailT()){
    return;
  }else{
    orderButtonT.classList.remove("button-success");
    e_nameT.innerHTML="";
    e_phoneT.innerHTML="";
    e_emailT.innerHTML="";
    popup1T.style.display = "none";
    popup2T.style.display = "block";
  }
});

closeButton2T.addEventListener("click", () => {
  popup2T.style.display = "none";
  overlayT.style.display = "none";
  document.getElementById("talk_form").reset();
});


const OKT = document.getElementById("ok_t");

OKT.addEventListener("click", () => {
  popup2T.style.display = "none";
  overlayT.style.display = "none";
  document.getElementById("talk_form").reset();
});
