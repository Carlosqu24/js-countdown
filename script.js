const $countdown = document.querySelector('#countdown');
const $btnStartCountdown = document.querySelector('#startCountdown');
const $btnStopCountdown = document.querySelector('#stopCountdown');

let interval;

function countdownMidnight(futureDate, elemento) {
      let future = new Date(futureDate);
      
      let futureDays = future.toUTCString();
      let futureHours = future.getHours();
      let futureMinutes = future.getMinutes();
      let futureSeconds = future.getSeconds();

      let now = new Date();

      // let nowHours = now.getHours();
      let nowHours = now.getHours();
      let nowMinutes = now.getMinutes()
      let nowSeconds = now.getSeconds();

      $countdown.innerHTML = `
            <span>${formatNumber(futureHours - nowHours)}</span>:<span>${formatNumber(futureMinutes - nowMinutes)}</span>:<span>${formatNumber(futureSeconds - nowSeconds)}</span>
      `;
}

function formatNumber(number) {

      let numberString = number.toString();
      
      if (numberString.length <= 1) {
            const newStr = numberString.replace(number, `0${number}`)
            
            return newStr;
      } else 
            return numberString
};




$btnStartCountdown.addEventListener('click', () => {
      interval = setInterval(() => countdownMidnight("December 24, 2021 23:59:59", '#countdownToday'), 1000);
});

$btnStopCountdown.addEventListener('click', () => {
      clearInterval(interval);
});