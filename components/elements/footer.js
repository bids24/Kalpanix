export function applyFooterStyles() {
    const footer = document.querySelector(".kalpanix-footer1");

    if (!footer) return;

    const footerDivs = footer.querySelectorAll("div");
    const footerLinks = footer.querySelectorAll("a");
    const footerParagraphs = footer.querySelectorAll("p");

    // Helper function to apply style conditionally
    const setStyleIfNotPresent = (element, property, value) => {
        if (!element.style[property]) {
            element.style[property] = value;
        }
    };

    // Apply styles to the footer container
    setStyleIfNotPresent(footer, 'display', 'flex');
    setStyleIfNotPresent(footer, 'justifyContent', 'space-between');
    setStyleIfNotPresent(footer, 'backgroundColor', '#333');
    setStyleIfNotPresent(footer, 'color', '#fff');
    setStyleIfNotPresent(footer, 'padding', '40px 20px');
    setStyleIfNotPresent(footer, 'boxSizing', 'border-box');
    setStyleIfNotPresent(footer, 'bottom', '0');
    setStyleIfNotPresent(footer, 'width', '100vw');
    setStyleIfNotPresent(footer, 'zIndex', '1000');
    setStyleIfNotPresent(footer, 'borderTop', '4px solid #007bff');

    // Apply styles to each div inside footer
    footerDivs.forEach(div => {
        setStyleIfNotPresent(div, 'flex', '1');
        setStyleIfNotPresent(div, 'textAlign', 'center');
        setStyleIfNotPresent(div, 'margin', '10px');
    });

    // Apply styles to footer links
    footerLinks.forEach(link => {
        setStyleIfNotPresent(link, 'color', '#fff');
        setStyleIfNotPresent(link, 'textDecoration', 'none');
        setStyleIfNotPresent(link, 'margin', '8px 0');
        setStyleIfNotPresent(link, 'display', 'block');
        setStyleIfNotPresent(link, 'padding', '8px 0');
        setStyleIfNotPresent(link, 'borderRadius', '4px');
        setStyleIfNotPresent(link, 'transition', 'color 0.3s ease, background-color 0.3s ease');

        link.addEventListener('mouseover', () => {
            link.style.color = '#fff';
            link.style.backgroundColor = '#007bff';
        });
        link.addEventListener('mouseout', () => {
            link.style.color = '#fff';
            link.style.backgroundColor = 'transparent';
        });
    });

    // Apply styles to footer paragraphs
    footerParagraphs.forEach(paragraph => {
        setStyleIfNotPresent(paragraph, 'margin', '10px 0');
        setStyleIfNotPresent(paragraph, 'fontSize', '0.9rem');
    });

    // Media query for mobile responsiveness
    const handleMediaQueryChange = (e) => {
        if (e.matches) {
            setStyleIfNotPresent(footer, 'flexDirection', 'column');
            setStyleIfNotPresent(footer, 'textAlign', 'center');
        } else {
            setStyleIfNotPresent(footer, 'flexDirection', 'row');
        }
    };

    const mediaQuery = window.matchMedia("(max-width: 768px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);
}

applyFooterStyles();
