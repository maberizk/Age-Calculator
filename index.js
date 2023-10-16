function age() {
  // getting input values
  let day = document.getElementById("day").value;
  let month = document.getElementById("month").value;
  let year = document.getElementById("year").value;

  //   validating inputs
  if (!errorValidation(day, month, year)) {
    return;
  }
  //   creates date object, representing current date and time/ methods are built in with new Date. getDate()/ month etc = current date
  let currentDate = new Date();
  let getDay = currentDate.getDate();
  let getMonth = 1 + currentDate.getMonth();
  let getYear = currentDate.getFullYear();
  let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (day > getDay) {
    getDay = getDay + months[getMonth - 1];
    getMonth = getMonth - 1;
  }

  if (month > getMonth) {
    getMonth = getMonth + 12;
    getYear = getYear - 1;
  }

  let finalDate = getDay - day;
  let finalMonth = getMonth - month;
  let finalYear = getYear - year;

  document.getElementById("finalYear").innerHTML = finalYear;
  document.getElementById("finalMonth").innerHTML = finalMonth;
  document.getElementById("finalDay").innerHTML = finalDate;
}

function errorValidation() {
  let errorDay = document.getElementById("errorDay");
  let day = document.getElementById("day");
  let dayLabel = document.getElementById("dayLabel");
  if (day.value > 31 || day.value < 1) {
    errorDay.innerText = "Must be valid day";
    day.style.borderColor = "hsl(0, 100%, 67%)";
    dayLabel.style.color = "hsl(0, 100%, 67%)";
    return false;
  } else {
    errorDay.innerText = "";
  }

  let errorMonth = document.getElementById("errorMonth");
  let month = document.getElementById("month");
  let monthLabel = document.getElementById("monthLabel");
  if (month.value > 12 || month.value < 1) {
    errorMonth.innerText = "Must be valid month";
    month.style.borderColor = "hsl(0, 100%, 67%)";
    monthLabel.style.color = "hsl(0, 100%, 67%)";
    return false;
  } else {
    errorMonth.innerText = "";
  }

  let errorYear = document.getElementById("errorYear");
  let year = document.getElementById("year");
  if (year.value > 2023 || year.value < 1900) {
    errorYear.innerText = "Must be in the past";
    year.style.borderColor = "hsl(0, 100%, 67%)";
    yearLabel.style.color = "hsl(0, 100%, 67%)";
    return false;
  } else {
    errorYear.innerText = "";
  }

  return true;
}
