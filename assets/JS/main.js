const toggleButton = document.getElementById("theme-toggle");
const body = document.body;

// Check the stored theme preference on page load
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  toggleButton.querySelector("i").classList.remove("fa-moon");
  toggleButton.querySelector("i").classList.add("fa-sun");
}

toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  const icon = toggleButton.querySelector("i");
  if (body.classList.contains("dark-mode")) {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
    localStorage.setItem("theme", "dark");
  } else {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
    localStorage.setItem("theme", "light");
  }
});

// Disable right-click, view source, inspect element, copy, text selection, and Ctrl + A
document.addEventListener("contextmenu", (event) => event.preventDefault());
document.addEventListener("keydown", (event) => {
  if (
    event.ctrlKey &&
    (event.key === "u" ||
      event.key === "i" ||
      event.key === "c" ||
      event.key === "j" ||
      event.key === "a")
  ) {
    event.preventDefault();
  }
  if (event.key === "F12") {
    event.preventDefault();
  }
});
document.addEventListener("copy", (event) => event.preventDefault());
