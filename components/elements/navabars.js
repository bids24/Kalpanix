export function applyNavbarStyles() {
    const navbar = document.querySelector(".kalpanix-navbar1");

    if (!navbar) return;

    const logoSection = navbar.querySelector("div:first-child");
    const menuSection = navbar.querySelector("ul");
    const menuItems = navbar.querySelectorAll("ul li");
    const hamburger = navbar.querySelector("div:last-child");

    // Apply styles to the navbar container
    Object.assign(navbar.style, {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#333",
        color: "#fff",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        position: "fixed",
        top: "0",
        width: "100vw", // Full viewport width
        maxWidth: "100%", // Prevent overflow
        padding: "10px 20px", // Outer padding (top-bottom 10px, left-right 20px)
        boxSizing: "border-box", // Ensure padding is included in the width calculation
        zIndex: "1000",
        transition: "background-color 0.3s ease, box-shadow 0.3s ease",
        borderBottom: "3px solid #007bff"
    });

    // Apply smooth transition for scrolling effect (optional)
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = "#222"; // Darker when scrolling
            navbar.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.2)";
        } else {
            navbar.style.backgroundColor = "#333";
            navbar.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
        }
    });

    // Ensure the body has no margin/padding
    document.body.style.margin = "0";
    document.body.style.padding = "0";

    // Apply flexbox to the logo section for side-by-side alignment
    Object.assign(logoSection.style, {
        display: "flex",
        alignItems: "center" // Align logo and title vertically in the center
    });

    const logoImage = logoSection.querySelector("img");
    Object.assign(logoImage.style, {
        width: "50px",
        height: "50px",
        marginRight: "15px",
        transition: "width 0.3s ease, height 0.3s ease"
    });

    const logoTitle = logoSection.querySelector("span");
    Object.assign(logoTitle.style, {
        fontSize: "1.5rem",
        fontWeight: "bold",
        color: "#fff",
        transition: "font-size 0.3s ease"
    });

    Object.assign(menuSection.style, {
        listStyle: "none",
        display: "flex",
        margin: "0",
        padding: "0",
        flexGrow: "1",
        justifyContent: "flex-end",
        alignItems: "center",
        fontSize: "1rem",
        gap: "30px", // Adds spacing between menu items
        transition: "font-size 0.3s ease"
    });

    menuItems.forEach(item => {
        Object.assign(item.style, {
            cursor: "pointer",
            color: "#fff",
            transition: "color 0.3s ease, transform 0.3s ease",
            padding: "15px", // Add padding for clickable area
            borderRadius: "4px"
        });
        item.addEventListener("mouseover", () => {
            item.style.color = "#007bff";
            item.style.transform = "scale(1.1)"; // Slight zoom effect on hover
        });
        item.addEventListener("mouseout", () => {
            item.style.color = "#fff";
            item.style.transform = "scale(1)"; // Reset zoom effect
        });
    });

    Object.assign(hamburger.style, {
        fontSize: "2rem",
        display: "none",
        cursor: "pointer",
        color: "#fff",
        transition: "transform 0.3s ease"
    });

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
            menuSection.style.padding = "20px 0"; // Added padding for mobile menu
        } else {
            menuSection.style.display = "none";
        }
    });
}

applyNavbarStyles();
