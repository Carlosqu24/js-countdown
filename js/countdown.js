export function countdownMidnight(futureDate, elemento) {
      let future = new Date(futureDate);
      
      let futureDays = future.toUTCString();
      let futureHours = future.getHours();
      let futureMinutes = future.getMinutes();
      let futureSeconds = future.getSeconds();

      let now = new Date();

      let nowInfo = now.toLocaleTimeString()
      // let nowHours = now.getHours();
      let nowHours = now.getHours();
      let nowMinutes = now.getMinutes()
      let nowSeconds = now.getSeconds();

      $countdown.innerHTML = `
            <div class="time">
                  <span>${formatNumber(futureHours - nowHours)}</span>:<span>${formatNumber(futureMinutes - nowMinutes)}</span>:<span>${formatNumber(futureSeconds - nowSeconds)}</span>
            </div>
            <div class="info">
                  <span>${nowInfo}</span>
            </div>
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

export function countdown(element, limitDate) {
      const $countdown = document.querySelector(element);

      let countdownDate = new Date(limitDate).getTime();
      let now = Date.now();
      
      let differenceTime = countdownDate - now;

      let days = Math.floor(differenceTime / (1000 * 60 * 60 * 24));
      let hours = Math.floor(differenceTime % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
      let minutes = Math.floor(differenceTime % (1000 * 60 * 60) / (1000 * 60));
      let seconds = Math.floor(differenceTime % (1000 * 60) / (1000));

      $countdown.classList.add("is-active")

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