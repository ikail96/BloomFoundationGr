let display = document.querySelector(".display");
let days = document.querySelector(".days");
let previous = document.querySelector(".left");
let next = document.querySelector(".right");
let eventPanel = document.getElementById("eventPanel");
let eventTitle = document.getElementById("eventTitle");
let eventBody = document.getElementById("eventBody");
let closePanel = document.getElementById("closePanel");
let calendarContainer = document.getElementById("calenCont");


const events = {
  "2025-07-20": {
    title: "Food Donation",
    description: "9:00 - 19:00 at the Mall Venue ",
    image: "images/food.jpg",
    url: "#cardFoodDonation"
  },
  "2025-08-15": {
    title: "Toys and Clothing Donation",
    description: "Celebrations all over Greece.",
    image: "images/donation1.jpg",
    url: "#cardToysDonation"
  },
  "2025-09-01": {
    title: "Donation for the School Fees",
    description: "9:00 - 19:00 at the Mall Venue ",
    image: "images/donation2.jpg",
    url: "#cardFeesDonation"
  },
  "2025-09-10": {
    title: "Donation for the Clean Water campaign",
    description: "9:00 - 19:00 at the Mall Venue ",
    image: "images/donation3.jpg",
    url: "#cardWaterDonation"
  }
};

let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();

function formatDateKey(currentDate) {
  const y = currentDate.getFullYear();
  const m = String(currentDate.getMonth() + 1).padStart(2, "0");
  const d = String(currentDate.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function displayCalendar() {
  days.innerHTML = "";

  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const firstDayIndex = firstDay.getDay();
  const numberOfDays = lastDay.getDate();

  let formattedDate = date.toLocaleString("en-US", {
    month: "long",
    year: "numeric"
  });

  display.textContent = formattedDate;

  
  for (let x = 0; x < firstDayIndex; x++) {
    const div = document.createElement("div");
    div.classList.add("empty");
    days.appendChild(div);
  }

  
  for (let i = 1; i <= numberOfDays; i++) {
    let div = document.createElement("div");
    let currentDate = new Date(year, month, i);
    const dateKey = formatDateKey(currentDate);

    div.dataset.date = dateKey;
    div.textContent = i;

    if (events[dateKey]) {
      div.classList.add("has-event");
    }

    if (
      currentDate.getFullYear() === new Date().getFullYear() &&
      currentDate.getMonth() === new Date().getMonth() &&
      currentDate.getDate() === new Date().getDate()
    ) {
      div.classList.add("current-date");
    }

    div.addEventListener("click", () => {
      document.querySelectorAll(".days div").forEach(d => d.classList.remove("selected-date"));
      div.classList.add("selected-date");

      if (events[dateKey]) {
        const event = events[dateKey];
        eventTitle.textContent = event.title;
        eventBody.innerHTML = `
          <p>${event.description}</p>
          ${event.image ? `<img src="${event.image}" alt="Event image">` : ""}
          ${event.url ? `<a href="${event.url}" target="_blank"> More Info</a>` : ""}
        `;
        eventPanel.classList.add("active");
        calendarContainer.classList.add("calendarContainerOpac");
        
        
      } else {
        eventPanel.classList.remove("active");
        calendarContainer.classList.remove("calendarContainerOpac")
        
      }
    });

    days.appendChild(div);
  }
}


  closePanel.addEventListener("click", () => {
  eventPanel.classList.remove("active");
  calendarContainer.classList.remove("calendarContainerOpac");
  
});







previous.addEventListener("click", () => {
  month--;
  if (month < 0) {
    month = 11;
    year--;
  }
  date = new Date(year, month, 1);
  displayCalendar();
});

next.addEventListener("click", () => {
  month++;
  if (month > 11) {
    month = 0;
    year++;
  }
  date = new Date(year, month, 1);
  displayCalendar();
});

displayCalendar();
