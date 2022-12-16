let timeLeft = document.getElementById(`timeLeft`);

let givenDateInitial = prompt("Please enter a day, a month and a year:"); //day month year

let givenDateArr = givenDateInitial.split(" "); //for converting to month day year

let givenDateLast = new Date(
  givenDateArr[2],
  givenDateArr[1] - 1,
  givenDateArr[0]
);
let second = 1000;

let minute = second * 60;

let hour = minute * 60;

let day = hour * 24; //milliseconds

let month = day * 30;

let year = month * 12;

setInterval(function () {
  let today = new Date();

  let timeDiffer = givenDateLast - today; //354759275200357

  timeLeft.innerHTML = timeDiffer;

  let years = Math.floor(timeDiffer / year); //year

  let months = Math.floor((timeDiffer % year) / month); //month

  let days = Math.floor((timeDiffer % month) / day); //day 

  let hours = Math.floor((timeDiffer % day) / hour); //hour

  let minutes = Math.floor((timeDiffer % hour) / minute); // minute

  let seconds = Math.floor((timeDiffer % minute) / second); // second

  timeLeft.innerHTML =
    years +
    " years " +
    months +
    " months " +
    days +
    " days " +
    hours +
    " hours " +
    minutes +
    " minutes " +
    seconds +
    " seconds";
}, second);


