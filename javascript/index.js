function updateCityTimes() {
  // === cityone ===
  const cityoneElement = document.querySelector("#cityone");
  const headingOne = cityoneElement.querySelector("h2");
  const timeOne = cityoneElement.querySelector(".time");
  const dateOne = document.querySelectorAll(".date")[0];

  const cityoneTime = moment().tz("America/Havana"); // Cuba timezone

  headingOne.innerHTML = "Cuba 🇨🇺";
  timeOne.innerHTML = `${cityoneTime.format(
    "h:mm:ss"
  )} <small>${cityoneTime.format("A")}</small>`;
  dateOne.innerHTML = cityoneTime.format("D MMMM YYYY");

  // === citytwo ===
  const citytwoElement = document.querySelector("#citytwo");
  const headingTwo = citytwoElement.querySelector("h2");
  const timeTwo = citytwoElement.querySelector(".time");
  const dateTwo = document.querySelectorAll(".date")[1];

  const citytwoTime = moment().tz("America/Mexico_City"); // Mexico City timezone

  headingTwo.innerHTML = "Mexico City 🇲🇽";
  timeTwo.innerHTML = `${citytwoTime.format(
    "h:mm:ss"
  )} <small>${citytwoTime.format("A")}</small>`;
  dateTwo.innerHTML = citytwoTime.format("D MMMM YYYY");
}

// Initial call
updateCityTimes();

// Update every second
setInterval(updateCityTimes, 1000);
