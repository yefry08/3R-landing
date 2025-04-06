// Fix for the toggleMenu function - needs to be defined before it's used
function toggleMenu() {
    var navbar = document.getElementById("myNavbar");
    if (navbar.className === "navbar") {
      navbar.className += " responsive";
    } else {
      navbar.className = "navbar";
    }
    console.log("Toggle menu clicked, navbar class is now: " + navbar.className); // For debugging
  }
  
  // Logo slider functionality
  document.addEventListener('DOMContentLoaded', function() {
    const logosSlide = document.getElementById('logosSlide');
    
    // Check if the element exists to prevent errors
    if (!logosSlide) {
      console.error('Element with ID "logosSlide" not found');
      return;
    }
    
    const logoItems = document.querySelectorAll('.logo-item');
    
    // Check if we have any logo items
    if (logoItems.length === 0) {
      console.error('No elements with class "logo-item" found');
      return;
    }
    
    const slideWidth = 200; // Width of each logo item including padding
    let position = 0;
    
    // Clone the logo items and append to create infinite scroll effect
    logoItems.forEach(item => {
      const clone = item.cloneNode(true);
      logosSlide.appendChild(clone);
    });
    
    // Auto slide the logos - continuous movement
    function infiniteScroll() {
      position -= 1; // Move 1px at a time for smoother animation
      
      // Reset position when we've scrolled the width of one logo item
      if (position <= -slideWidth) {
        position = 0;
        // Move first item to the end
        const firstItem = logosSlide.querySelector('.logo-item');
        if (firstItem) {
          logosSlide.appendChild(firstItem);
        }
      }
      
      logosSlide.style.transform = `translateX(${position}px)`;
      requestAnimationFrame(infiniteScroll);
    }
    
    // Start the infinite scroll
    infiniteScroll();
  });
