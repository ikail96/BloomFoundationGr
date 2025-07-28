// const article = document.querySelector("article");


// const elements = article.querySelectorAll("h1, h2, p, .card");

// const articleObserver = new IntersectionObserver(entries => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       elements.forEach((el, index) => {
//         el.style.setProperty('--delay', `${index * 200}ms`);
//         el.classList.add('animate');
//       });
//       articleObserver.unobserve(article);
//     }
//   });
// }, { threshold: 0.8 });

// articleObserver.observe(article);

// const elementObserver = new IntersectionObserver(entries => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting && !entry.target.classList.contains('animate')) {
//       entry.target.style.setProperty('--delay', `0ms`);
//       entry.target.classList.add('animate');
//       elementObserver.unobserve(entry.target);
//     }
//   });
// }, { threshold: 0.8 });

// elements.forEach(el => elementObserver.observe(el));

const elements = document.querySelectorAll(".animate-on-scroll, i");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.setProperty('--delay', `0ms`);
      entry.target.classList.remove('animate'); // Reset animation
      void entry.target.offsetWidth;            // Trigger reflow
      entry.target.classList.add('animate');    // Restart animation
    } else {
      entry.target.classList.remove('animate'); // Remove animation when out of view
    }
  });
}, { threshold: 0.3 });

elements.forEach(el => observer.observe(el));
