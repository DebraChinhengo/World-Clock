let selectedCityTimezone = null;

function updateCityTimes() {
  // cityone

  let cityoneElement = document.querySelector("#cityone");
  let headingOne = cityoneElement.querySelector("h2");
  let timeOne = cityoneElement.querySelector(".time");
  let dateOne = document.querySelector(".date");

  let cityoneTime;
  let cityLabel;

  if (selectedCityTimezone && selectedCityTimezone.timezone) {
    cityoneTime = moment().tz(selectedCityTimezone.timezone);
    cityLabel = selectedCityTimezone.label;
  } else {
    cityoneTime = moment().tz("America/Havana");
    cityLabel = "Cuba 🇨🇺";
  }

  headingOne.innerHTML = cityLabel;
  timeOne.innerHTML =
    cityoneTime.format("h:mm:ss") +
    " <small>" +
    cityoneTime.format("A") +
    "</small>";
  dateOne.innerHTML = cityoneTime.format("D MMMM YYYY");

  //citytwo
  let citytwoElement = document.querySelector("#citytwo");
  let headingTwo = citytwoElement.querySelector("h2");
  let timeTwo = citytwoElement.querySelector(".time");
  let dateTwo = document.querySelector(".dates");

  let localTimeZone = moment.tz.guess(); // Detect user's timezone
  let citytwoTime = moment().tz(localTimeZone);
  let citytwoLabel = "Current Location 📍";

  headingTwo.innerHTML = citytwoLabel;
  timeTwo.innerHTML =
    citytwoTime.format("h:mm:ss") +
    " <small>" +
    citytwoTime.format("A") +
    "</small>";
  dateTwo.innerHTML = citytwoTime.format("D MMMM YYYY");
}

// Event Listener for City Selection
function updatecityone(event) {
  let cityTimezone = event.target.value;
  if (!cityTimezone) {
    selectedCityTimezone = null;
    return;
  }

  let selectedText = event.target.options[event.target.selectedIndex].text;

  selectedCityTimezone = {
    timezone: cityTimezone,
    label: selectedText,
  };
}

// Attach the event listener
let selectCityElement = document.querySelector("#selectcity");
selectCityElement.addEventListener("change", updatecityone);

// Initial call and interval
updateCityTimes();
setInterval(updateCityTimes, 1000);
