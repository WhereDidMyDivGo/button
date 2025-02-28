document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector(".circle input");
  const circle = document.querySelector(".circle");

  input.addEventListener("change", () => {
    if (input.checked) {
      circle.style.background =
        "linear-gradient(135deg, #5df 0%, #c058f3 100%)";
      circle.classList.remove("hover-enabled");
    } else {
      circle.style.background = "#979797";
      circle.classList.add("hover-enabled");
    }
  });

  circle.addEventListener("mouseenter", () => {
    if (!input.checked) {
      circle.style.background =
        "linear-gradient(135deg, #5df 0%, #c058f3 100%)";
    }
  });

  circle.addEventListener("mouseleave", () => {
    if (!input.checked) {
      circle.style.background = "#979797";
    }
  });
});
