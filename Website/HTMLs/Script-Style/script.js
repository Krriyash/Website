// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {

    // Get all the navigation links
    var navLinks = document.querySelectorAll('.navbar a');
  
    // Attach click event listeners to the navigation links
    navLinks.forEach(function(link) {
      link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default navigation behavior
  
        // Get the target URL from the clicked link's href attribute
        var targetUrl = this.getAttribute('href');
  
        // Animate the body element out
        animateBodyOut(function() {
          // Navigate to the target URL after the animation is complete
          window.location.href = targetUrl;
        });
      });
    });
  
    // Function to animate the body element out
    function animateBodyOut(callback) {
      var body = document.body;
  
      // Apply the desired animation here, e.g., fade out or slide out
      body.style.opacity = 0; // Example: fade out effect
  
      // Wait for the animation to complete, then call the callback function
      setTimeout(callback, 500); // Adjust the duration as needed
    }
  
});