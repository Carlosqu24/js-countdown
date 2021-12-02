export function displayModal(element, message, time) {
      const $modal = document.querySelector(element);
      $modal.classList.add("active");
      $modal.insertAdjacentHTML("beforeend", message);

      if($modal.textContent.includes("Success")) {

            if($modal.classList.contains("error")) {
                  $modal.classList.replace("error", "success");
            } else {
                  $modal.classList.add("success");
            };

      };
      
      if ($modal.textContent.includes("Error")) {

            if($modal.classList.contains("success")) {
                  $modal.classList.replace("success", "error");
            } else {
                  $modal.classList.add("error");
            };

      };

      setTimeout(()=>{
            $modal.classList.remove("active");
            $modal.innerHTML = "";
      }, time);
};