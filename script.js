// Select all elements you want to fade in
const fadeElements = document.querySelectorAll('.fade-in');

// Create an IntersectionObserver to trigger fade-in when the element is in view
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in-visible');
      observer.unobserve(entry.target); // Stop observing once the element is in view
    }
  });
}, { threshold: 0.1 }); // Adjust threshold for earlier visibility

// Observe each element with the 'fade-in' class
fadeElements.forEach(element => {
  observer.observe(element);
});

// Smooth Scroll for Navigation Links
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".navbar a");

  navLinks.forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();
      const targetId = event.target.getAttribute("href").slice(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 50,
          behavior: "smooth",
        });
      } else {
        console.warn(`Element with ID ${targetId} not found!`);
      }
    });
  });
});
