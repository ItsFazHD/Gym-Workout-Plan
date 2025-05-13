document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const navbar = document.getElementById("navbar");
  const dropdowns = document.querySelectorAll(".dropdown");

  // Toggle the mobile menu on click
  menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("active");
  });

  // Mobile dropdown toggle
  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("click", (e) => {
      if (window.innerWidth <= 768) {
        e.preventDefault(); // Prevent link click for mobile
        dropdown.classList.toggle("open");
      }
    });
  });

  // Close dropdown if clicking outside of it (for mobile)
  document.addEventListener("click", (e) => {
    if (window.innerWidth <= 768) {
      dropdowns.forEach((dropdown) => {
        if (!dropdown.contains(e.target) && !menuToggle.contains(e.target)) {
          dropdown.classList.remove("open");
        }
      });
    }
  });
});
