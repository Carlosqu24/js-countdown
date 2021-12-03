export function changeTheme(theme) {
      const $elements = document.querySelectorAll("[data-theme]");

      let lightTheme = "light-theme";
      let darkTheme = "dark-theme";

      $elements.forEach(element => {

            if (element.classList.contains(lightTheme) || element.classList.contains(darkTheme)) {
                  
                  if (theme != lightTheme) {
                        element.classList.replace(lightTheme, darkTheme)
                  } else if (theme != darkTheme) {
                        element.classList.replace(darkTheme, lightTheme)
                  };

            } else {
                  element.classList.add(theme)
            };
      });
};