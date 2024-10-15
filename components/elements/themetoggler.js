export function applyThemeToggler() {
  const togglerButton = document.querySelector(".kalpanix-themetoggler");
  const body = document.body;

  // Initial theme check
  const isDarkMode = localStorage.getItem("dark-mode") === "true";
  applyTheme(isDarkMode);

  // Function to apply the theme
  function applyTheme(darkMode) {
    if (darkMode) {
      body.style.backgroundColor = "#121212"; // Dark background
      body.style.color = "#ffffff"; // Light text
      togglerButton.innerHTML = '<i class="fas fa-moon"></i>'; // Change icon to moon
    } else {
      body.style.backgroundColor = "#ffffff"; // Light background
      body.style.color = "#000000"; // Dark text
      togglerButton.innerHTML = '<i class="fas fa-sun"></i>'; // Change icon to sun
    }
  }

  // Toggler button click event
  togglerButton.addEventListener("click", () => {
    const darkMode = !body.style.backgroundColor || body.style.backgroundColor === "rgb(255, 255, 255)";
    applyTheme(darkMode);
    localStorage.setItem("dark-mode", darkMode); // Save preference
  });
}

applyThemeToggler();
