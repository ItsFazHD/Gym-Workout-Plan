document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const navbar = document.getElementById("navbar");
  const dropdowns = document.querySelectorAll(".dropdown");

  // Toggle main menu
  menuToggle?.addEventListener("click", () => {
    navbar?.classList.toggle("active");
  });

  // Toggle dropdowns on mobile
  dropdowns.forEach((dropdown) => {
    const toggle = dropdown.querySelector("a");
    toggle.addEventListener("click", (e) => {
      if (window.innerWidth <= 768) {
        e.preventDefault(); // Only prevent the click if it's the parent <a href="#">
        dropdown.classList.toggle("open");
      }
    });
  });
});
