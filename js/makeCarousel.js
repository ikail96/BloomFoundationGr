const lightboxContainer = document.getElementById("lightboxContainer");
const showCarousel = document.getElementById("makeCarousel");

function myFunction(y) {
    if (y.matches) { 
      lightboxContainer.style.display = "none";
     
      showCarousel.style.display = "block";

    } else {
        lightboxContainer.style.display = "block";
        showCarousel.style.display = "none";
  }
}
  

  var y = window.matchMedia("(max-width: 768px)");
  
 
  myFunction(y);
  
 
  y.addEventListener("change", function() {
    myFunction(y);
  });
  

