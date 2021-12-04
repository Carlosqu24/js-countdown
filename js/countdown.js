export function countdown(element, limitDate) {
      const $countdown = document.querySelector(element);

      let countdownDate = new Date(limitDate).getTime();
      let now = Date.now();
      
      let differenceTime = countdownDate - now;

      let days = Math.floor(differenceTime / (1000 * 60 * 60 * 24));
      let hours = Math.floor(differenceTime % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
      let minutes = Math.floor(differenceTime % (1000 * 60 * 60) / (1000 * 60));
      let seconds = Math.floor(differenceTime % (1000 * 60) / (1000));

      $countdown.classList.add("is-active");

      $countdown.innerHTML = `
            <div class="days">${days} days</div>
            <div class="time">
                  <span class="time-group time-group--hours">
                        <span class="time-group__unit">${hours}</span>
                        <span class="time-group__title">Hours</span>
                  </span>
                  :
                  <span class="time-group time-group--minutes">
                        <span class="time-group__unit">${minutes}</span>
                        <span class="time-group__title">Minutes</span>
                  </span>
                  :
                  <span class="time-group time-group--seconds">
                        <span class="time-group__unit">${seconds}</span>
                        <span class="time-group__title">Seconds</span>
                  </span>
            </div>
      `;
};

export function validateInput(dateValue) {
      if (dateValue == "") {
            return false;
      };

      return true;
};

export function resetCountdown(interval, input, countdownSelector) {
      clearInterval(interval);

      input.value = "";

      document.querySelector(countdownSelector).classList.remove("is-active");
      document.querySelector(countdownSelector).innerHTML = "";

}