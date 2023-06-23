document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Function to check if an element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    const elemTop = rect.top;
    const elemBottom = rect.bottom;

    // Only completely visible elements return true:
    const isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    
    // Partially visible elements return true:
    //isVisible = elemTop < window.innerHeight && elemBottom >= 0;

    // Adjust this as per your requirement.
    const halfwayThrough = elemTop < (window.innerHeight / 2) && elemBottom >= (window.innerHeight / 2);
    
    return isVisible || halfwayThrough;
}

// Listen for the scroll event
window.addEventListener('scroll', function (e) {
    // For each section
    document.querySelectorAll('section').forEach(section => {
        // If the section is in the viewport
        if (isInViewport(section)) {
            // Add the 'visible' class
            section.classList.add('visible');
        }
    });
});


  
  
  



