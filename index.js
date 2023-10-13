function age() {
// getting input values 
  let day = document.getElementById("day").value;
  let month = document.getElementById("month").value;
  let year = document.getElementById("year").value;

//   creates date object, representing current date and time 
  let currentDate = new Date();
  let getDay = currentDate.getDay();
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
