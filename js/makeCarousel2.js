
const getDiv = document.getElementById("lightboxContainer2");
const makeCarousel2 = document.getElementById("makeCarousel2");

function myFunction(a) {
        if (a.matches) { 
          getDiv.style.display = "none";
         
          makeCarousel2.style.display = "block";
    
        } else {
            getDiv.style.display = "block";
            makeCarousel2.style.display = "none";
      }
    }
      
    
      var a = window.matchMedia("(max-width: 700px)");
      
     
      myFunction(a);
      
     
      a.addEventListener("change", function() {
        myFunction(a);
      });