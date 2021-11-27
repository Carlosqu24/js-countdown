import { countdown } from "./js/countdown.js";

// VARIEABLES
const $inputDate = document.querySelector('#input-date');

const $btnStartCountdown = document.querySelector('#startCountdown');
const $btnStopCountdown = document.querySelector('#stopCountdown');

let interval;

// EVENTS
$btnStartCountdown.addEventListener('click', () => {
      interval = setInterval(() => countdown('#countdown', $inputDate.value), 1000);
});

$btnStopCountdown.addEventListener('click', () => {
      clearInterval(interval);
});
