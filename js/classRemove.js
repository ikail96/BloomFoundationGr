


 
const hero = document.getElementById("hero2");


if (hero) {
  function myFunction(e) {
    if (e.matches) {
      hero.classList.remove("bgimg-1"); 
    } else {
      hero.classList.add("bgimg-1");    
    }
  }

  const mediaQuery = window.matchMedia("(max-width: 768px)");

  
  myFunction(mediaQuery);


  mediaQuery.addEventListener("change", myFunction);
}


  
