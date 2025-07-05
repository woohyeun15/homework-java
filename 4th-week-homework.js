document.addEventListener("DOMContentLoaded", function () {
  const animatedElements = document.querySelectorAll(".animation");

  animatedElements.forEach((el, idx) => {
    setTimeout(() => {
      el.classList.add("active");
    }, 100 + idx * 120);
  });
});
