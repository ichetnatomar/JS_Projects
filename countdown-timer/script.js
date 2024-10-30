



const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

const newYears = '1 Jan 2025';

const countdown = function () {

  const currentDate = new Date();

  const newYearDate = new Date(newYears);

  const totalSeconds = (newYearDate - currentDate) / 1000;

  const daysLeft = Math.floor(totalSeconds / (60 * 60 * 24));                           //converted seconds to days
  const hoursLeft = Math.floor(totalSeconds / (60 * 60)) % 24;                          //converted seconds to hours and then % 24,remove days
  const minutesLeft = Math.floor(totalSeconds / 60) % 60;                               //seconds to minutes then %60 to remove hours
  const secondsLeft = Math.floor((totalSeconds)) % 60;                                  //removed minutes

  daysEl.innerHTML = daysLeft;
  hoursEl.innerHTML = hoursLeft;
  minutesEl.innerHTML = minutesLeft;
  secondsEl.innerHTML = secondsLeft;
}

countdown();

setInterval(countdown, 1000);


