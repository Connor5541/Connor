// Smooth scroll handled by CSS scroll-behavior

// Toggle hobbies
function toggleHobbies() {
  const list = document.getElementById("hobbies");
  list.style.display = list.style.display === "none" ? "block" : "none";
}

// Form validation
document.getElementById("contact-form").addEventListener("submit", function (e) {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  if (!name || !email) {
    alert("Please enter your name and email.");
    e.preventDefault();
  }
});

// Light/Dark mode
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

// Typing effect
const typingTarget = document.getElementById("typing-name");
const text = typingTarget.textContent;
let index = 0;

function typeEffect() {
  if (index < text.length) {
    typingTarget.textContent = text.slice(0, index + 1);
    index++;
    setTimeout(typeEffect, 100);
  }
}
typingTarget.textContent = "";
typeEffect();
