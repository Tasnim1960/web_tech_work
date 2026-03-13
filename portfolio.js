// -------------------------
// Dynamic Project Rendering
// -------------------------
const projects = [
  {
    title: "Student Management System",
    description: "A responsive web-based system to add, edit, delete, and search student records using HTML, CSS, JavaScript, and DOM manipulation.",
    image: "https://via.placeholder.com/600x400.png?text=Student+Management+System",
    link: "#",
    category: "web"
  },
  {
    title: "Event Management System",
    description: "A software project designed to manage event planning, attendees, venues, and organizers with a clean and structured interface.",
    image: "https://via.placeholder.com/600x400.png?text=Event+Management+System",
    link: "#",
    category: "app"
  },
  {
    title: "Portfolio UI Design",
    description: "A modern and aesthetic portfolio design concept focused on responsiveness, clean sections, smooth user experience, and accessibility.",
    image: "https://via.placeholder.com/600x400.png?text=Portfolio+UI+Design",
    link: "#",
    category: "design"
  }
];

const projectsContainer = document.getElementById("projectsContainer");
const filterButtons = document.querySelectorAll(".filter-btn");

function renderProjects(category = "all") {
  projectsContainer.innerHTML = "";

  const filteredProjects = category === "all"
    ? projects
    : projects.filter(project => project.category === category);

  filteredProjects.forEach(project => {
    const card = document.createElement("div");
    card.classList.add("project-card");

    card.innerHTML = `
      <img src="${project.image}" alt="${project.title}">
      <div class="project-content">
        <span class="project-category">${project.category.toUpperCase()}</span>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.link}" class="project-link" target="_blank">View Project →</a>
      </div>
    `;

    projectsContainer.appendChild(card);
  });
}

renderProjects();

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    document.querySelector(".filter-btn.active").classList.remove("active");
    button.classList.add("active");
    renderProjects(button.dataset.category);
  });
});

// -------------------------
// Dark / Light Mode Toggle
// -------------------------
const themeToggle = document.getElementById("themeToggle");

function applyTheme(theme) {
  if (theme === "dark") {
    document.body.classList.add("dark-mode");
    themeToggle.textContent = "☀️";
  } else {
    document.body.classList.remove("dark-mode");
    themeToggle.textContent = "🌙";
  }
}

const savedTheme = localStorage.getItem("theme") || "light";
applyTheme(savedTheme);

themeToggle.addEventListener("click", () => {
  const isDark = document.body.classList.contains("dark-mode");
  const newTheme = isDark ? "light" : "dark";
  localStorage.setItem("theme", newTheme);
  applyTheme(newTheme);
});

// -------------------------
// Contact Form Validation
// -------------------------
const contactForm = document.getElementById("contactForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const subjectInput = document.getElementById("subject");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const subjectError = document.getElementById("subjectError");
const messageError = document.getElementById("messageError");
const formSuccess = document.getElementById("formSuccess");

function validateEmail(email) {
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/i;
  return emailPattern.test(email);
}

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  let isValid = true;

  nameError.textContent = "";
  emailError.textContent = "";
  subjectError.textContent = "";
  messageError.textContent = "";
  formSuccess.textContent = "";

  if (nameInput.value.trim() === "") {
    nameError.textContent = "Name is required.";
    isValid = false;
  }

  if (emailInput.value.trim() === "") {
    emailError.textContent = "Email is required.";
    isValid = false;
  } else if (!validateEmail(emailInput.value.trim())) {
    emailError.textContent = "Enter a valid email address.";
    isValid = false;
  }

  if (subjectInput.value.trim() === "") {
    subjectError.textContent = "Subject is required.";
    isValid = false;
  }

  if (messageInput.value.trim() === "") {
    messageError.textContent = "Message is required.";
    isValid = false;
  }

  if (isValid) {
    formSuccess.textContent = "Your message has been submitted successfully!";
    contactForm.reset();
  }
});

// -------------------------
// Typing Animation
// -------------------------
const typingText = document.getElementById("typingText");
const typingWords = [
  "Aspiring Web Developer",
  "Creative Problem Solver",
  "Tech Enthusiast",
  "Future Software Engineer"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentWord = typingWords[wordIndex];
  const currentText = currentWord.substring(0, charIndex);
  typingText.textContent = currentText;

  if (!isDeleting && charIndex < currentWord.length) {
    charIndex++;
    setTimeout(typeEffect, 100);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(typeEffect, 60);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) {
      wordIndex = (wordIndex + 1) % typingWords.length;
    }
    setTimeout(typeEffect, 900);
  }
}

typeEffect();

// -------------------------
// Scroll To Top Button
// -------------------------
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});