function Load() {
    //Timeout = setTimeout(showPage, 4852);
    Timeout = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader-wrapper").style.display = "none";
  document.getElementById("wrapper").style.display = "block";
}

var autoSlideInterval; // Global variable to hold the interval ID

function startAutoSlide() {
  autoSlideInterval = setInterval(Change, 8520); // Slide every 8.52 seconds
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval); // Clear the interval to stop auto sliding
}

function Change() {
  var positioner = document.getElementById("slide-controller");
  var currentPosition = parseInt(positioner.style.left) || 0; // Convert to an integer or use 0 as the default value

  if (currentPosition == 0) {
    positioner.style.left = "-100%";
  } else if (currentPosition == -100) {
    positioner.style.left = 0;
  }
}

startAutoSlide();

// Add event listeners only once
document.getElementById("slide-controller").addEventListener("mouseover", stopAutoSlide);
document.getElementById("slide-controller").addEventListener("mouseleave", startAutoSlide);