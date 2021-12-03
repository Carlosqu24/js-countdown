import { countdown, validateInput } from "./js/countdown.js";
import { displayModal } from "./js/modal.js"
import { changeTheme } from "./js/themes.js";

// VARIABLES
const $inputDate = document.querySelector('#input-date');

const $btnStartCountdown = document.querySelector('#startCountdown');
const $btnStopCountdown = document.querySelector('#stopCountdown');

const $btnLightTheme = document.querySelector("#light-theme");
const $btnDarkTheme = document.querySelector("#dark-theme");

let interval;

// EVENTS
document.addEventListener("DOMContentLoaded", e => {
      
})

document.addEventListener("click", e => {
      if (e.target == $btnStartCountdown) {
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
      };

      if (e.target == $btnStopCountdown) {
            clearInterval(interval);
      };

      if (e.target == $btnDarkTheme) changeTheme(e.target.id)

      if (e.target == $btnLightTheme) changeTheme(e.target.id)
});
