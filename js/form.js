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
  document.getElementById('e-name').style.display="none";
  document.getElementById('e-phone').style.display="none";
  document.getElementById('e-email').style.display="none";
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
