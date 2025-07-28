// const buttons = document.querySelectorAll('.btn');

// buttons.forEach(button => {
//     button.addEventListener('click', () => {
//       // Αφαιρεί το active από όλα
//       buttons.forEach(btn => btn.classList.remove('active'));
      
//       // Προσθέτει active στο πατημένο
//       button.classList.add('active');
     
//     });
//   });


const buttonGroups = document.querySelectorAll('.btn-group');

buttonGroups.forEach(group => {
  const buttons = group.querySelectorAll('.select-btn');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      // Απενεργοποιεί όλα τα κουμπιά της ομάδας
      buttons.forEach(btn => btn.classList.remove('active'));
      // Ενεργοποιεί το πατημένο κουμπί
      button.classList.add('active');
    });
  });
});