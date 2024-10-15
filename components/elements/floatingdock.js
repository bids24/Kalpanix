export function applyFloatingDock() {
    const dock = document.querySelector(".kalpanix-floatingdock1");
  
    // Function to apply styles dynamically based on screen size
    const applyDockStyles = () => {
      const screenWidth = window.innerWidth;
  
      // Hide dock for larger screens (desktops)
      if (screenWidth > 1024) {
        dock.style.display = "none";
      } else {
        dock.style.display = "flex";
  
        // General dock styles for mobile and tablet
        dock.style.position = "fixed";
        dock.style.bottom = "20px";  // Stick to the bottom
        dock.style.left = "50%";
        dock.style.transform = "translateX(-50%)";
        dock.style.width = "90%";
        dock.style.justifyContent = "space-around";
        dock.style.alignItems = "center";
        dock.style.padding = "0.5rem";
        dock.style.borderRadius = "20px";
        dock.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
        dock.style.backdropFilter = "blur(8px)";
  
        // Apply styles to dock items
        Array.from(dock.children).forEach((child) => {
          // Set styles for each icon wrapper (child div)
          child.style.width = "50px";
          child.style.height = "50px";
          child.style.borderRadius = "50%";
          child.style.backgroundColor = "#1c1c1c";
          child.style.display = "flex";
          child.style.justifyContent = "center";
          child.style.alignItems = "center";
          child.style.transition = "0.3s ease";  // Smooth transition for hover
  
          // Set hover effect to move up slightly and zoom
          child.onmouseover = () => {
            child.style.transform = "translateY(-10px) scale(1.1)";  // Move up and zoom
          };
          child.onmouseout = () => {
            child.style.transform = "translateY(0) scale(1)";  // Reset to original
          };
  
          // Set styles for the Font Awesome icons inside the child divs
          const icon = child.querySelector("i");
          icon.style.fontSize = "24px";  // Adjust icon size
          icon.style.color = "#ffffff";  // Set icon color to white
        });
      }
    };
  
    // Apply the styles initially
    applyDockStyles();
  
    // Reapply styles when the window is resized
    window.addEventListener("resize", applyDockStyles);
  }
  
  applyFloatingDock();
  