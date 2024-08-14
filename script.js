const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function ageCalculator() {
  let today = new Date();
  let inputDate = new Date(document.getElementById("date").value);
  let birthYear, birthMonth, birthDay;

  let birthDetails = {
    date: inputDate.getDate(),
    month: inputDate.getMonth() + 1,
    year: inputDate.getFullYear(),
  };
  let currentYear = today.getFullYear();
  let currentMonth = today.getMonth() + 1;
  let currentDate = today.getDate();

  if (
    birthDetails.year > currentYear ||
    (birthDetails.month > currentMonth && birthDetails.year == currentYear) ||
    (birthDetails.date > currentDate &&
      birthDetails.month == currentMonth &&
      birthDetails.year == currentYear)
  ) {
    alert("Not Born Yet");
    displayAge("-", "-", "-");
    return;
  }

  birthYear = currentYear - birthDetails.year;

  if (currentMonth >= birthDetails.month) {
    birthMonth = currentMonth - birthDetails.month;
  } else {
    birthYear--;
    birthMonth = 12 + currentMonth - birthDetails.month;
    months;
  }

  if (currentDate >= birthDetails.date) {
    birthDay = currentDate - birthDetails.date;
  } else {
    birthMonth--;
    let days = months[currentMonth - 2];
    birthDay = days + currentDate - birthDetails.date;

    if (birthMonth < 0) {
      birthMonth = 11;
      birthYear--;
    }
  }
  // checking for leap year.......
  function leapCheck(year) {
    if ((year % 4 || (year % 400 && year % 100) )== 0) {
      months[1] = 29;
    } else {
      months[1] = 28;
    }
  }
  displayAge(birthYear, birthMonth, birthDay);
}

function displayAge(bYear, bMonth, bDay) {
  document.getElementById("1").textContent = bYear;
  document.getElementById("2").textContent = bMonth;
  document.getElementById("3").textContent = bDay;
}
