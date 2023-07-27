function expand() {
    var casesAddDiv = document.querySelector(".blog_ul");
    var lookMoreButton = document.getElementById("more_blog");
  
    if (casesAddDiv.classList.contains("active")) {
      casesAddDiv.classList.remove("active");
      lookMoreButton.classList.remove("button-active");
      lookMoreButton.textContent = "Дивитись ще";
    } else {
      casesAddDiv.classList.add("active");
      lookMoreButton.classList.add("button-active");
      lookMoreButton.textContent = "Закрити";
    }
  }