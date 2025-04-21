// Loading Screen
window.addEventListener('load', () => {
  setTimeout(() => {
    const loadingScreen = document.getElementById('loading-screen');
    loadingScreen.style.display = 'none';
  }, 2000);
});

// Dark Mode Toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  body.classList.add('dark-mode');
}

// Theme toggle functionality
themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  const isDark = body.classList.contains('dark-mode');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// Live Search Filter
const searchInput = document.getElementById('searchDestinations');
const destinationCards = document.querySelectorAll('.card');

searchInput.addEventListener('keyup', (e) => {
  const searchTerm = e.target.value.toLowerCase();

  destinationCards.forEach(card => {
    const cityName = card.getAttribute('data-city').toLowerCase();
    const description = card.querySelector('p').textContent.toLowerCase();
    
    if (cityName.includes(searchTerm) || description.includes(searchTerm)) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  });
});

// Form validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name");
  const email = document.getElementById("email");

  if (!name.value || !email.value || !email.value.includes("@")) {
    alert("Please fill out the form correctly.");
    return;
  }

  alert("Thank you for your message!");
  this.reset();
});

// Scroll-to-top button
let topBtn = document.createElement("button");
topBtn.innerText = "To the top";
topBtn.style.position = "fixed";
topBtn.style.bottom = "20px";
topBtn.style.right = "20px";
topBtn.style.display = "none";
topBtn.style.padding = "10px";
topBtn.style.backgroundColor = "#0066cc";
topBtn.style.color = "white";
document.body.appendChild(topBtn);

topBtn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });

window.onscroll = () => {
  if (window.scrollY > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};
