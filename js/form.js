//validation
const openButton = document.getElementById("openButton");
const popup1 = document.getElementById("popup1");

openButton.addEventListener("click", () => {
  popup1.style.display = "block";
  overlay.style.display = "block";
});

const closeButton1 = document.getElementById("close_btn1");
const closeButton2 = document.getElementById("close_btn2");
const overlay = document.getElementById("overlay");


closeButton1.addEventListener("click", () => {
  popup1.style.display = "none";
  overlay.style.display = "none";
  document.getElementById("order_form").reset();
  document.getElementById('e-name').style.display="none";
  document.getElementById('e-phone').style.display="none";
  document.getElementById('e-email').style.display="none";
});

closeButton2.addEventListener("click", () => {
  popup2.style.display = "none";
  overlay.style.display = "none";
  document.getElementById("order_form").reset();
});


orderButton = document.getElementById('order_btn');
const popup2 = document.getElementById("popup2");

function validateName() {
  var name = document.getElementById("name_form").value;
  return name.length>1;
}

function validatePhone() {
  var phone = document.getElementById("phone").value;
  return phone.length == 9 && phone.match(/^[0-9]{9}$/);
}

function validateEmail() {
  var email = document.getElementById("email").value;
  var emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  return emailPattern.test(email);
}


orderButton.addEventListener("click", () => {
  if(validateName()&&validatePhone()&&validateEmail()){
    popup1.style.display = "none";
    popup2.style.display = "block";
    document.getElementById('e-name').style.display="none";
    document.getElementById('e-phone').style.display="none";
    document.getElementById('e-email').style.display="none";
  }else{
    if(!validateName()){
      document.getElementById('e-name').style.display="block";
    }else{
      document.getElementById('e-name').style.display="none";
    }
    if(!validatePhone()){
      document.getElementById('e-phone').style.display="block";
    }else{
      document.getElementById('e-phone').style.display="none";
    }

    if(!validateEmail()){
      document.getElementById('e-email').style.display="block";
    }else{
      document.getElementById('e-email').style.display="none";
    }
  }
});


const OK = document.getElementById("ok");

OK.addEventListener("click", () => {
  popup2.style.display = "none";
  overlay.style.display = "none";
  document.getElementById("order_form").reset();
});
