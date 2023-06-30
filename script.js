let button = document.getElementById("myBtn");

// Get a reference to the preloader element
var preloader = document.getElementById('preloader');

// Hide the preloader when the page is loaded
window.onload = function() {
    preloader.style.display = 'none';
};

// Delay the name showing up during delay
const nameElement = document.getElementById("name");
nameElement.style.visibility = "hidden";
// Set a timeout to reveal the 'name' element after the delay
setTimeout(function() {
  nameElement.style.visibility = "visible";
}, 3100);

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  }
  
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Scroll animation for icons
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// Google Form
const form = document.getElementById("my-form");
const thankYouMessage = document.getElementById("thank-you-message");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  const preFilledUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfnwRXqzLCxREF-frlYiR8HdwJ4ipSPR3nlxkCx23HxJLwTgg/formResponse?entry.1234567890=" 
  + encodeURIComponent(data["entry.1234567890"]) + "&entry.0987654321=" + encodeURIComponent(data["entry.0987654321"]) + "&entry.2468013579=" 
  + encodeURIComponent(data["entry.2468013579"]);

  const response = await fetch(preFilledUrl, {
    mode: 'no-cors'
  });
  const text = await response.text();

  console.log(text);

  // you can redirect to a thank you page or display a message to the user here
  form.style.display = "none";
  thankYouMessage.style.display = "block";
});


