

// Prevent form submission for demonstration purposes
document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault();
  alert('Form submitted successfully!');
});


// WEB DEVELOPMENT OVERLAY FUNCTION
function openWebDevelopmentOverlay() {
  // Show the Web Development overlay
  document.getElementById('webDevelopmentOverlay').style.display = 'flex';
}

function closeWebDevelopmentOverlay() {
  // Close the Web Development overlay
  document.getElementById('webDevelopmentOverlay').style.display = 'none';
}

// Close the overlay if clicked outside the content
webDevelopmentOverlay.addEventListener('click', function (e) {
  if (e.target === webDevelopmentOverlay) {
    closeWebDevelopmentOverlay();
  }
});


// ABOUT ME OVERLAY FUNCTION
function openaboutMeOverlay() {
  // Show the About Me  overlay
  document.getElementById('aboutMeOverlay').style.display = 'flex';
}

function closeaboutMeOverlay() {
  // Close the About Me overlay
  document.getElementById('aboutMeOverlay').style.display = 'none';
}

// Close the overlay if clicked outside the content
aboutMeOverlay.addEventListener('click', function (e) {
  if (e.target === aboutMeOverlay) {
    closeaboutMeOverlay();
  }
});


// UX DESIGN OVERLAY FUNCTION
function openUXDesignOverlay() {
  // Show the Web Development overlay
  document.getElementById('UXDesignOverlay').style.display = 'flex';
}

function closeUXDesignOverlay() {
  // Close the Web Development overlay
  document.getElementById('UXDesignOverlay').style.display = 'none';
}

// Close the overlay if clicked outside the content
UXDesignOverlay.addEventListener('click', function (e) {
  if (e.target === UXDesignOverlay) {
    closeUXDesignOverlay();
  }
});


// JavaScript to toggle visibility based on screen width
window.addEventListener('resize', function () {
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
window.addEventListener('load', function () {
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

document.addEventListener("DOMContentLoaded", function () {
  const burgerMenu = document.querySelector('.burger-menu');
  const burgerOverlay = document.getElementById('burgeroverlay');

  // Toggle the active class on the burger overlay
  burgerMenu.addEventListener('click', function () {
    burgerOverlay.classList.toggle('active');
  });

  // Close overlay when clicking outside of it
  window.addEventListener('click', function (event) {
    if (!event.target.closest('.burger-menu') && !event.target.closest('.burgeroverlay-content')) {
      burgerOverlay.classList.remove('active');
    }
  });

  // Optional: Close overlay on pressing Escape key
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      burgerOverlay.classList.remove('active');
    }
  });
});

// Optional: Close overlay on pressing Escape key
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    burgerOverlay.classList.remove('active');
  }
});

// Function to handle intersection changes
function handleIntersection(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target); // Stop observing once the animation is triggered
    }
  });
}

// Create an intersection observer
const observer = new IntersectionObserver(handleIntersection, {
  threshold: 0.5 // Adjust the threshold as needed
});

// Observe the .data-model and .runwise-prototype1 elements
const elementsToObserve = document.querySelectorAll('.data-model, .runwise-prototype1, .runwise-prototype2, .runwise-prototype3, .statistic-1,.statistic-2,.statistic-3');
elementsToObserve.forEach(element => {
  observer.observe(element);
});

document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll('.wireframe1, .wireframe2, .wireframe3, .wireframe4, .wireframe5, .theme-1, .theme-2, .theme-3');

  // Function to handle intersection changes
  function handleIntersection(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in'); // Add fade-in class
        observer.unobserve(entry.target); // Stop observing once the animation is triggered
      }
    });
  }

  // Create an intersection observer
  const observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.1 // Adjust the threshold as needed
  });

  // Observe each image
  images.forEach(image => {
    observer.observe(image);
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const aboutMeImage = document.querySelector('.aboutMe');

  // Function to handle intersection changes
  function handleIntersection(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        console.log('Image is in view'); // Debug log
        entry.target.classList.add('bounce');
        observer.unobserve(entry.target); // Stop observing once the animation is triggered
      }
    });
  }

  // Create an intersection observer
  const observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.5 // Adjust the threshold as needed
  });

  // Observe the aboutMe image
  observer.observe(aboutMeImage);
});

