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