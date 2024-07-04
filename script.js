document.addEventListener("DOMContentLoaded", function() {
  const overlay = document.querySelector('.web-development-overlay');

  // Show overlay when needed (for demonstration)
  const showOverlayButton = document.getElementById('show-overlay');
  showOverlayButton.addEventListener('click', function() {
    overlay.classList.add('active');
  });

  // Close overlay when clicking outside
  window.addEventListener('click', function(event) {
    if (event.target.closest('.web-development-overlay') === null) {
      overlay.classList.remove('active');
    }
  });

  // Optional: Close overlay on pressing Escape key
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      overlay.classList.remove('active');
    }
  });
});

// Prevent form submission for demonstration purposes
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Form submitted successfully!');
});

function openWebDevelopmentOverlay() {
  // Show the Web Development overlay
  document.getElementById('webDevelopmentOverlay').style.display = 'flex';
}

function closeWebDevelopmentOverlay() {
  // Close the Web Development overlay
  document.getElementById('webDevelopmentOverlay').style.display = 'none';
}
