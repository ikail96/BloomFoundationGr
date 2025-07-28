// let upto = 0;
//         let counts = setInterval(updated, 1);

//         function updated() {
//             let count = document.getElementById("counter");
//             count.innerHTML = ++upto;
//             if (upto === 13258) {
//                 clearInterval(counts);
//             }
//         }

function startCounter(el, endValue, duration) {
    let start = null;
  
    function animate(timestamp) {
      if (!start) start = timestamp;
      let progress = timestamp - start;
      let current = Math.floor((progress / duration) * endValue);
      current = Math.min(current, endValue);
      el.textContent = current.toLocaleString();
  
      if (progress < duration) {
        requestAnimationFrame(animate);
      } else {
        el.textContent = endValue.toLocaleString();
      }
    }
  
    requestAnimationFrame(animate);
  }
  
  // Παρακολούθηση του element
  const counterObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.dataset.animated) {
        let endValue = parseInt(entry.target.dataset.end);
        let duration = parseInt(entry.target.dataset.duration) || 2000;
        startCounter(entry.target, endValue, duration);
        entry.target.dataset.animated = "true";
      }
    });
  }, { threshold: 0.5 });
  
  // Βρίσκει όλα τα counters
  document.querySelectorAll('.counter-on-scroll').forEach(counter => {
    counterObserver.observe(counter);
  
  });
      
        















