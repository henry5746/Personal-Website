document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetSection = document.querySelector(this.getAttribute('href'));
    targetSection.scrollIntoView({
      behavior: 'smooth'
    });
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('.slider');
  const sliderContainer = document.querySelector('.slider-container');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  const dots = document.querySelectorAll('.dot');

  let currentSlide = 0;
  const totalSlides = dots.length;

  function updateSlider() {
    // Calculate the container's current width in pixels
    const containerWidth = sliderContainer.offsetWidth;
    // Use translate3d for smoother, GPU-accelerated animations
    slider.style.transform = `translate3d(-${currentSlide * containerWidth}px, 0, 0)`;
    
    // Update active dot indicator
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentSlide);
    });
  }

  nextBtn.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlider();
  });

  prevBtn.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlider();
  });

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentSlide = index;
      updateSlider();
    });
  });

  // Initialize slider
  updateSlider();
});
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("resumeModal");
  const openBtn = document.getElementById("openResumeBtn");
  const closeBtn = document.querySelector(".close");

  // Open the modal
  openBtn.addEventListener("click", () => {
    modal.style.display = "block";
  });

  // Close the modal on "x" click
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Close if user clicks outside the modal-content
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});