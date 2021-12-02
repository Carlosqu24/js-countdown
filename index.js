import { countdown, validateInput } from "./js/countdown.js";

// VARIEABLES
const $inputDate = document.querySelector('#input-date');

const $btnStartCountdown = document.querySelector('#startCountdown');
const $btnStopCountdown = document.querySelector('#stopCountdown');

let interval;

// EVENTS
$btnStartCountdown.addEventListener('click', () => {

      if (validateInput($inputDate.value)) {
            interval = setInterval(() => {

                  countdown('#countdown', $inputDate.value);
      
            }, 1000);
      } else {
            alert("Elija una fecha");
      };
});

$btnStopCountdown.addEventListener('click', () => {
      clearInterval(interval);
});
