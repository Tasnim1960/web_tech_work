let projects = [
  { title: "Student System", category: "web" },
  { title: "Event System", category: "app" }
];

let container = document.getElementById("projectsContainer");
let buttons = document.querySelectorAll(".filter-btn");
let toggle = document.getElementById("themeToggle");
let form = document.getElementById("contactForm");
let btn = document.getElementById("scrollTopBtn");


// RENDER
function render(category) {

  container.innerHTML = "";

  let filtered;

  if (category === "all") {
    filtered = projects;
  } else {
    filtered = projects.filter(p => p.category === category);
  }

  for (let i = 0; i < filtered.length; i++) {

    let card = document.createElement("div");
    card.className = "project-card";
    card.innerText = filtered[i].title;

    container.appendChild(card);
  }
}

render("all");


// FILTER BUTTONS
for (let i = 0; i < buttons.length; i++) {

  buttons[i].onclick = function () {
    render(buttons[i].dataset.category);
  }
}


// THEME
function applyTheme(mode) {

  if (mode === "dark") {
    document.body.style.background = "black";
  } else {
    document.body.style.background = "white";
  }
}

let saved = localStorage.getItem("theme");
applyTheme(saved);

toggle.onclick = function () {

  let current = localStorage.getItem("theme");

  if (current === "dark") {
    localStorage.setItem("theme", "light");
    applyTheme("light");
  } else {
    localStorage.setItem("theme", "dark");
    applyTheme("dark");
  }
}


// FORM VALIDATION
form.onsubmit = function (e) {

  e.preventDefault();

  let name = document.getElementById("name").value;

  if (name === "") {
    document.getElementById("nameError").innerText = "Required";
  }
}


// SCROLL BUTTON
window.onscroll = function () {

  if (window.scrollY > 200) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
}

btn.onclick = function () {
  window.scrollTo(0, 0);
}
