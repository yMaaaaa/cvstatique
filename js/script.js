document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.getElementById("carousel");
  const slides = document.querySelectorAll(".elementcarousel");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  let currentIndex = 0;

  function updateCarousel() {
    carousel.style.transform = `translateX(-${currentIndex * 220}px)`;
    slides.forEach((slide, idx) => {
      slide.classList.toggle("active", idx === currentIndex);
    });
  }

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
  });

  updateCarousel();
});
