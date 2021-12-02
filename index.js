import { countdown, validateInput } from "./js/countdown.js";
import { displayModal } from "./js/modal.js"


// VARIEABLES
const $inputDate = document.querySelector('#input-date');

const $btnStartCountdown = document.querySelector('#startCountdown');
const $btnStopCountdown = document.querySelector('#stopCountdown');

let interval;

// EVENTS
$btnStartCountdown.addEventListener('click', () => {

      if (validateInput($inputDate.value)) {
            let message = `
                  <div class="modal__header">
                        <h5>Success</h5>
                        <span>X</span>
                  </div>
                  <div class="modal__information">
                        <p>Sucess</p>
                  </div>
            `;

            displayModal("#modal", message, 2000);

            interval = setInterval(() => {

                  countdown('#countdown', $inputDate.value);
      
            }, 1000);
      } else {

            let message = `
                  <div class="modal__header">
                        <h5>Error</h5>
                        <span>X</span>
                  </div>
                  <div class="modal__information">
                        <p>Insert a valid date</p>
                  </div>
            `;

            displayModal("#modal", message, 2000);
      };
});

$btnStopCountdown.addEventListener('click', () => {
      clearInterval(interval);
});
