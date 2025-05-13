const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");
const dropdowns = document.querySelectorAll(".dropdown");

menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

// Dropdown toggle for mobile
dropdowns.forEach((dropdown) => {
  dropdown.addEventListener("click", (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      dropdown.classList.toggle("open");
    }
  });
});
