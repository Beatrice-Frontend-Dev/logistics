window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  if (window.scrollY > 50) {
    // Adjust the scrollY value as needed
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

//Testimonials slider

const slides = document.querySelectorAll(".testimonial-slide");
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

document.querySelector(".next").addEventListener("click", nextSlide);
document.querySelector(".prev").addEventListener("click", prevSlide);

// Initialize the slider
showSlide(currentSlide);

// Optional: Automatic slide change
setInterval(nextSlide, 5000); // Change slide every 5 seconds
