export function applyNavbarStyles() {
    const navbar = document.querySelector(".kalpanix-navbar1");

    if (!navbar) return;

    const logoSection = navbar.querySelector("div:first-child");
    const menuSection = navbar.querySelector("ul");
    const menuItems = navbar.querySelectorAll("ul li");
    const hamburger = navbar.querySelector("div:last-child");

    // Helper function to apply style conditionally
    const setStyleIfNotPresent = (element, property, value) => {
        if (!element.style[property]) {
            element.style[property] = value;
        }
    };

    // Apply styles to the navbar container
    setStyleIfNotPresent(navbar, 'display', 'flex');
    setStyleIfNotPresent(navbar, 'justifyContent', 'space-between');
    setStyleIfNotPresent(navbar, 'alignItems', 'center');
    setStyleIfNotPresent(navbar, 'backgroundColor', '#333');
    setStyleIfNotPresent(navbar, 'color', '#fff');
    setStyleIfNotPresent(navbar, 'boxShadow', '0 4px 6px rgba(0, 0, 0, 0.1)');
    setStyleIfNotPresent(navbar, 'position', 'fixed');
    setStyleIfNotPresent(navbar, 'top', '0');
    setStyleIfNotPresent(navbar, 'width', '100vw');
    setStyleIfNotPresent(navbar, 'maxWidth', '100%');
    setStyleIfNotPresent(navbar, 'padding', '10px 20px');
    setStyleIfNotPresent(navbar, 'boxSizing', 'border-box');
    setStyleIfNotPresent(navbar, 'zIndex', '1000');
    setStyleIfNotPresent(navbar, 'transition', 'background-color 0.3s ease, box-shadow 0.3s ease');
    setStyleIfNotPresent(navbar, 'borderBottom', '3px solid #007bff');

    // Apply smooth transition for scrolling effect (optional)
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = '#222';
            navbar.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.2)';
        } else {
            navbar.style.backgroundColor = '#333';
            navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        }
    });

    document.body.style.margin = '0';
    document.body.style.padding = '0';

    // Logo section styles
    setStyleIfNotPresent(logoSection, 'display', 'flex');
    setStyleIfNotPresent(logoSection, 'alignItems', 'center');

    const logoImage = logoSection.querySelector("img");
    setStyleIfNotPresent(logoImage, 'width', '50px');
    setStyleIfNotPresent(logoImage, 'height', '50px');
    setStyleIfNotPresent(logoImage, 'marginRight', '15px');
    setStyleIfNotPresent(logoImage, 'transition', 'width 0.3s ease, height 0.3s ease');

    const logoTitle = logoSection.querySelector("span");
    setStyleIfNotPresent(logoTitle, 'fontSize', '1.5rem');
    setStyleIfNotPresent(logoTitle, 'fontWeight', 'bold');
    setStyleIfNotPresent(logoTitle, 'color', '#fff');
    setStyleIfNotPresent(logoTitle, 'transition', 'font-size 0.3s ease');

    // Menu section styles
    setStyleIfNotPresent(menuSection, 'listStyle', 'none');
    setStyleIfNotPresent(menuSection, 'display', 'flex');
    setStyleIfNotPresent(menuSection, 'margin', '0');
    setStyleIfNotPresent(menuSection, 'padding', '0');
    setStyleIfNotPresent(menuSection, 'flexGrow', '1');
    setStyleIfNotPresent(menuSection, 'justifyContent', 'flex-end');
    setStyleIfNotPresent(menuSection, 'alignItems', 'center');
    setStyleIfNotPresent(menuSection, 'fontSize', '1rem');
    setStyleIfNotPresent(menuSection, 'gap', '30px');
    setStyleIfNotPresent(menuSection, 'transition', 'font-size 0.3s ease');

    // Menu item styles
    menuItems.forEach(item => {
        setStyleIfNotPresent(item, 'cursor', 'pointer');
        setStyleIfNotPresent(item, 'color', '#fff');
        setStyleIfNotPresent(item, 'transition', 'color 0.3s ease, transform 0.3s ease');
        setStyleIfNotPresent(item, 'padding', '15px');
        setStyleIfNotPresent(item, 'borderRadius', '4px');

        item.addEventListener('mouseover', () => {
            item.style.color = '#007bff';
            item.style.transform = 'scale(1.1)';
        });
        item.addEventListener('mouseout', () => {
            item.style.color = '#fff';
            item.style.transform = 'scale(1)';
        });
    });

    // Hamburger icon styles
    setStyleIfNotPresent(hamburger, 'fontSize', '2rem');
    setStyleIfNotPresent(hamburger, 'display', 'none');
    setStyleIfNotPresent(hamburger, 'cursor', 'pointer');
    setStyleIfNotPresent(hamburger, 'color', '#fff');
    setStyleIfNotPresent(hamburger, 'transition', 'transform 0.3s ease');

    // Media query handling
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const handleMediaQueryChange = (e) => {
        if (e.matches) {
            menuSection.style.display = "none";
            hamburger.style.display = "block";
            logoTitle.style.fontSize = "1.2rem";
        } else {
            menuSection.style.display = "flex";
            hamburger.style.display = "none";
            logoTitle.style.fontSize = "1.5rem";
        }
    };

    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    // Hamburger toggle for mobile
    hamburger.addEventListener("click", () => {
        if (menuSection.style.display === "none" || menuSection.style.display === "") {
            menuSection.style.display = "flex";
            menuSection.style.flexDirection = "column";
            menuSection.style.position = "absolute";
            menuSection.style.top = "60px";
            menuSection.style.right = "0";
            menuSection.style.backgroundColor = "#333";
            menuSection.style.width = "100%";
            menuSection.style.textAlign = "center";
            menuSection.style.padding = "20px 0";
        } else {
            menuSection.style.display = "none";
        }
    });
}

applyNavbarStyles();
