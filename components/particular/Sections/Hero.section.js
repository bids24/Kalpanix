export function applyHeroStyles() {
    const hero = document.querySelector(".kalpanix-hero1");

    if (!hero) return;

    const children = hero.children;
    const contentSection = children[0];
    const imageSection = children[1];
    const buttons = contentSection.querySelectorAll("button");

    // Helper function to apply style conditionally
    const setStyleIfNotPresent = (element, property, value) => {
        if (!element.style[property]) {
            element.style[property] = value;
        }
    };

    // Apply styles to the hero section container
    setStyleIfNotPresent(hero, 'display', 'flex');
    setStyleIfNotPresent(hero, 'alignItems', 'center');
    setStyleIfNotPresent(hero, 'justifyContent', 'space-between');
    setStyleIfNotPresent(hero, 'padding', '50px');
    setStyleIfNotPresent(hero, 'height', '100vh');
    setStyleIfNotPresent(hero, 'width', '100vw');
    setStyleIfNotPresent(hero, 'max-width', '100%');
    setStyleIfNotPresent(hero, 'boxSizing', 'border-box');
    setStyleIfNotPresent(hero, 'background', 'linear-gradient(to right, #007bff, #6610f2)');

    // Content section styles
    setStyleIfNotPresent(contentSection, 'flex', '1');
    setStyleIfNotPresent(contentSection, 'color', '#fff');
    setStyleIfNotPresent(contentSection, 'textAlign', 'left');
    setStyleIfNotPresent(contentSection.querySelector("h1"), 'fontSize', '3rem');
    setStyleIfNotPresent(contentSection.querySelector("h1"), 'marginBottom', '20px');
    setStyleIfNotPresent(contentSection.querySelector("p"), 'fontSize', '1.25rem');
    setStyleIfNotPresent(contentSection.querySelector("p"), 'marginBottom', '30px');

    // Button styles
    buttons.forEach(button => {
        setStyleIfNotPresent(button, 'padding', '10px 20px');
        setStyleIfNotPresent(button, 'fontSize', '1rem');
        setStyleIfNotPresent(button, 'color', '#fff');
        setStyleIfNotPresent(button, 'backgroundColor', '#007bff');
        setStyleIfNotPresent(button, 'border', 'none');
        setStyleIfNotPresent(button, 'borderRadius', '5px');
        setStyleIfNotPresent(button, 'cursor', 'pointer');
        setStyleIfNotPresent(button, 'transition', 'background-color 0.3s ease, transform 0.3s ease');

        button.addEventListener('mouseover', () => {
            button.style.backgroundColor = '#0056b3';
            button.style.transform = 'scale(1.05)';
        });

        button.addEventListener('mouseout', () => {
            button.style.backgroundColor = '#007bff';
            button.style.transform = 'scale(1)';
        });
    });

    // Image section styles
    setStyleIfNotPresent(imageSection, 'flex', '1');
    setStyleIfNotPresent(imageSection, 'display', 'flex');
    setStyleIfNotPresent(imageSection, 'justifyContent', 'center');
    setStyleIfNotPresent(imageSection, 'alignItems', 'center');

    const heroImage = imageSection.querySelector("img");
    setStyleIfNotPresent(heroImage, 'maxWidth', '100%');
    setStyleIfNotPresent(heroImage, 'height', 'auto');
    setStyleIfNotPresent(heroImage, 'borderRadius', '10px');
    setStyleIfNotPresent(heroImage, 'boxShadow', '0 4px 10px rgba(0, 0, 0, 0.2)');
    setStyleIfNotPresent(heroImage, 'transition', 'transform 0.3s ease');

    heroImage.addEventListener('mouseover', () => {
        heroImage.style.transform = 'scale(1.05)';
    });

    heroImage.addEventListener('mouseout', () => {
        heroImage.style.transform = 'scale(1)';
    });

    // Responsive behavior
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const handleMediaQueryChange = (e) => {
        if (e.matches) {
            setStyleIfNotPresent(hero, 'flexDirection', 'column');
            setStyleIfNotPresent(contentSection, 'textAlign', 'center');
            setStyleIfNotPresent(imageSection, 'marginTop', '30px');
        } else {
            setStyleIfNotPresent(hero, 'flexDirection', 'row');
            setStyleIfNotPresent(contentSection, 'textAlign', 'left');
            imageSection.style.marginTop = '0';
        }
    };

    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);
}

applyHeroStyles();
