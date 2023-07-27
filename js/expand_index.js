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