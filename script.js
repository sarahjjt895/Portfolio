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

// JavaScript to toggle visibility based on screen width
window.addEventListener('resize', function() {
  var navBar = document.querySelector('.nav-bar');
  var burgerMenu = document.querySelector('.burger-menu');
  
  if (window.innerWidth <= 600) {
    navBar.style.display = 'none';
    burgerMenu.style.display = 'block';
  } else {
    navBar.style.display = 'flex';
    burgerMenu.style.display = 'none';
  }
});

// Initial check on page load
window.addEventListener('load', function() {
  var navBar = document.querySelector('.nav-bar');
  var burgerMenu = document.querySelector('.burger-menu');
  
  if (window.innerWidth <= 600) {
    navBar.style.display = 'none';
    burgerMenu.style.display = 'block';
  } else {
    navBar.style.display = 'flex';
    burgerMenu.style.display = 'none';
  }
});

document.addEventListener("DOMContentLoaded", function() {
  const burgerMenu = document.querySelector('.burger-menu');
  const burgerOverlay = document.getElementById('burgeroverlay');

  // Toggle the active class on the burger overlay
  burgerMenu.addEventListener('click', function() {
    burgerOverlay.classList.toggle('active');
  });

  // Close overlay when clicking outside of it
  window.addEventListener('click', function(event) {
    if (!event.target.closest('.burger-menu') && !event.target.closest('.burgeroverlay-content')) {
      burgerOverlay.classList.remove('active');
    }
  });

  // Optional: Close overlay on pressing Escape key
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      burgerOverlay.classList.remove('active');
    }
  });
});

// Optional: Close overlay on pressing Escape key
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    burgerOverlay.classList.remove('active');
  }
});
// Check if the element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle scroll event
function onScroll() {
  const dataModelImage = document.querySelector('.data-model');
  if (isInViewport(dataModelImage)) {
    dataModelImage.classList.add('in-view');
    window.removeEventListener('scroll', onScroll); // Remove the event listener once the animation is triggered
  }
}

// Attach scroll event listener
window.addEventListener('scroll', onScroll);
window.addEventListener('load', onScroll); // Check if it's already in view on page load

