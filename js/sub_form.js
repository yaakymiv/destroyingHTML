var e_nameB = document.getElementById("e-name-b");
function validateNameB() {
  var e_name_b = document.getElementById("name_blog").value;
  if (e_name_b.length<=2) {
    e_nameB.innerHTML = "Введіть більше двох літер";
    return false;
  }
  e_nameB.innerHTML =
    '<i class="fa-solid fa-circle-check" style="color: #4aed7b; position:relative;top:-30px;right:10px;"></i>';
    return true;
}

var e_emailB = document.getElementById("e-email-b");
function validateEmailB() {
  var email_b = document.getElementById("email_blog").value;
  if (!email_b.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/)) {
    e_emailB.innerHTML = "Дотримуйтесь формату: example@user.com";
    return false;
  }
  e_emailB.innerHTML =
  '<i class="fa-solid fa-circle-check" style="color: #4aed7b; position:relative;top:-30px;right:10px;"></i>';
    return true;
}


const nameInputB = document.getElementById("name_blog");
const emailInputB = document.getElementById("email_blog");

nameInputB.addEventListener("input", updateButtonColorB);
emailInputB.addEventListener("input", updateButtonColorB);

subButtonB = document.getElementById("sub_btn_b");

function updateButtonColorB() {
  if (validateNameB() && validateEmailB()) {
    subButtonB.classList.add("button-success");
  } else {
    subButtonB.classList.remove("button-success");
  }
}

subButtonB.addEventListener("click", () => {
  if(!validateNameB() || !validateEmailB()){
    return;
  }else{
    subButtonB.classList.remove("button-success");
    e_nameB.innerHTML="";
    e_emailB.innerHTML="";
    nameInputB.value = "";
    emailInputB.value = "";
  }
});

