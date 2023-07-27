
var e_name_c = document.getElementById("e-name-c");
function validateNameC() {
  var name_c = document.getElementById("name_contacts").value;
  if (name_c.length<=2) {
    e_name_c.innerHTML = "Введіть більше двох літер";
    return false;
  }
  e_name_c.innerHTML =
    '<i class="fa-solid fa-circle-check" style="color: #4aed7b; position:relative;top:-30px;right:10px;"></i>';
    return true;
}

var e_phone_c = document.getElementById("e-phone-c");
function validatePhoneC() {
  var phone_c = document.getElementById("phone_contacts").value;
  if (phone_c.length === 0) {
    e_phone_c.innerHTML = ""; 
    return true; 
  }
  if (phone_c.length!=9||!phone_c.match(/^[0-9]{9}$/)) {
    e_phone_c.innerHTML = "Номер має містити 9 цифр";
    return false;
  }
  e_phone_c.innerHTML =
  '<i class="fa-solid fa-circle-check" style="color: #4aed7b; position:relative;top:-30px;right:10px;"></i>';
    return true;
}

var e_email_c = document.getElementById("e-email-c");
function validateEmailC() {
  var email_c = document.getElementById("email_contacts").value;
  if (!email_c.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/)) {
    e_email_c.innerHTML = "Дотримуйтесь формату: example@user.com";
    return false;
  }
  e_email_c.innerHTML =
  '<i class="fa-solid fa-circle-check" style="color: #4aed7b; position:relative;top:-30px;right:10px;"></i>';
    return true;
}


const nameInputC = document.getElementById("name_contacts");
const phoneInputC = document.getElementById("phone_contacts");
const emailInputC = document.getElementById("email_contacts");

nameInputC.addEventListener("input", updateButtonColorC);
phoneInputC.addEventListener("input", updateButtonColorC);
emailInputC.addEventListener("input", updateButtonColorC);

orderButtonC = document.getElementById("order_btn_c");

function updateButtonColorC() {
  if (validateNameC() && validatePhoneC() && validateEmailC()) {
    orderButtonC.classList.add("button-success");
  } else {
    orderButtonC.classList.remove("button-success");
  }
}

orderButtonC.addEventListener("click", () => {
  if(!validateNameC() || !validatePhoneC() || !validateEmailC()){
    return;
  }else{
    orderButtonC.classList.remove("button-success");
    e_name_c.innerHTML="";
    e_phone_c.innerHTML="";
    e_email_c.innerHTML="";
    document.getElementById("contacts_form").reset();
  }
});

