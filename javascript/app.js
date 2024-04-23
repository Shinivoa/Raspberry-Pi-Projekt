//select DOC
function checkSlide() {
  const slideIns = document.querySelectorAll(".slide-in");
  slideIns.forEach((slideIn) => {
    // Halfway through the image
    const slideInAt = window.scrollY + window.innerHeight - slideIn.height / 2;
    // Bottom of the image
    const imageBottom = slideIn.offsetTop + slideIn.height;
    const isHalfShown = slideInAt > slideIn.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;
    if (isHalfShown && isNotScrolledPast) {
      slideIn.classList.add("active");
    } else {
      slideIn.classList.remove("active");
    }
  });
}

var l = window.addEventListener("scroll", checkSlide);