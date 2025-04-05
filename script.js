 const logosSlide = document.getElementById('logosSlide');
        const logoItems = document.querySelectorAll('.logo-item');
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
                logosSlide.appendChild(firstItem);
            }
            
            logosSlide.style.transform = `translateX(${position}px)`;
            requestAnimationFrame(infiniteScroll);
        }

        // Start the infinite scroll
        infiniteScroll();