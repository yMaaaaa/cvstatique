document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector("#maquettefigma .carousel-images");
  const images = carousel.querySelectorAll("img");
  const prevButton = document.getElementById("prevButton");
  const nextButton = document.getElementById("nextButton");
  let currentIndex = 0;

  // Fonction pour montrer une image spécifique
  function showImage(index) {
    images.forEach((img) => img.classList.remove("active"));
    // Handle wraparound
    currentIndex = (index + images.length) % images.length;
    images[currentIndex].classList.add("active");
  }

  // On écoute les clics sur les boutons
  prevButton.addEventListener("click", () => {
    showImage(currentIndex - 1);
  });

  nextButton.addEventListener("click", () => {
    showImage(currentIndex + 1);
  });

  // Optionnel: Navigation au clavier
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
      showImage(currentIndex - 1);
    } else if (e.key === "ArrowRight") {
      showImage(currentIndex + 1);
    }
  });
});
