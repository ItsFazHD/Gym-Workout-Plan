window.addEventListener("scroll", () => {
  document.querySelectorAll(".workout-card").forEach((card) => {
    card.classList.add("fade-in");
  });
});
