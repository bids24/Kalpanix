export function applySignupForm1() {
    const signupForms = document.querySelectorAll('.kalpanix-signup1');

    signupForms.forEach(signupForm => {
        const setStyleIfNotPresent = (element, property, value) => {
            if (!element.style[property]) {
                element.style[property] = value;
            }
        };

        // Set the signup form container styles
        setStyleIfNotPresent(signupForm, 'display', 'flex');
        setStyleIfNotPresent(signupForm, 'flexDirection', 'column');
        setStyleIfNotPresent(signupForm, 'width', '35vw'); // Adjust width for aesthetics
        setStyleIfNotPresent(signupForm, 'padding', '3rem');
        setStyleIfNotPresent(signupForm, 'border', '1px solid rgba(255, 255, 255, 0.2)');
        setStyleIfNotPresent(signupForm, 'borderRadius', '15px');
        setStyleIfNotPresent(signupForm, 'boxShadow', '0px 8px 20px rgba(0, 0, 0, 0.2)');
        // setStyleIfNotPresent(signupForm, 'backgroundColor', 'black');
        setStyleIfNotPresent(signupForm, 'backgroundColor', 'linear-gradient(135deg, #6a11cb, #2575fc)'); // Elegant gradient background
        
        // Apply margin-top for each child element inside the signup form
        Array.from(signupForm.children).forEach(child => {
            setStyleIfNotPresent(child, 'marginTop', '1.5rem'); // Adjust margin for better spacing
        });

        // Set input field styles
        signupForm.querySelectorAll('input').forEach(input => {
            setStyleIfNotPresent(input, 'height', '2.8rem'); // Slightly larger height for inputs
            setStyleIfNotPresent(input, 'fontSize', '1.1rem');
            setStyleIfNotPresent(input, 'padding', '0.6rem 1rem');
            setStyleIfNotPresent(input, 'border', '1px solid rgba(255, 255, 255, 0.5)'); // Lighter border color
            setStyleIfNotPresent(input, 'boxShadow', 'inset 0 2px 5px rgba(255, 255, 255, 0.2)');
            setStyleIfNotPresent(input, 'borderRadius', '10px');
            setStyleIfNotPresent(input, 'transition', 'box-shadow 0.3s ease, transform 0.2s ease');

            // Focus and blur event listeners for input styling
            input.addEventListener('focus', () => {
                input.style.outline = 'none';
                input.style.boxShadow = '0px 3px 12px rgba(80, 96, 217, 0.6)'; // Enhanced focus effect
                input.style.transform = 'scale(1.03)'; // Subtle scaling on focus
            });
            input.addEventListener('blur', () => {
                input.style.boxShadow = 'inset 0 2px 5px rgba(255, 255, 255, 0.2)'; // Maintain light shadow
                input.style.transform = 'scale(1)';
            });
        });

        // Set label styles
        signupForm.querySelectorAll('label').forEach(label => {
            setStyleIfNotPresent(label, 'fontSize', '1.1rem');
            setStyleIfNotPresent(label, 'fontWeight', 'bold');
            setStyleIfNotPresent(label, 'color', '#ffffff'); // Change label color for better contrast
            setStyleIfNotPresent(label, 'fontFamily', 'Roboto, sans-serif');
        });

        // Create container for submit button and anchor
        const cont = document.createElement('div');
        document.querySelector('input[type="submit"]').insertAdjacentElement('beforebegin', cont);

        // Set the container styles
        setStyleIfNotPresent(cont, 'display', 'flex');
        setStyleIfNotPresent(cont, 'justifyContent', 'space-between');
        setStyleIfNotPresent(cont, 'alignItems', 'center');
        setStyleIfNotPresent(cont, 'marginTop', '2rem'); // Increased margin for separation

        // Set styles for submit button and anchor link
        signupForm.querySelectorAll('input[type="submit"], a').forEach(elem => {
            cont.appendChild(elem);
            setStyleIfNotPresent(elem, 'fontSize', '1.1rem');
            setStyleIfNotPresent(elem, 'fontWeight', 'bold');
            setStyleIfNotPresent(elem, 'color', '#ffffff'); // Change text color for contrast
            setStyleIfNotPresent(elem, 'fontFamily', 'Roboto, sans-serif');
            setStyleIfNotPresent(elem, 'display', 'inline');

            if (elem.type === 'submit') {
                setStyleIfNotPresent(elem, 'backgroundColor', '#28a745'); // A vibrant button color
                setStyleIfNotPresent(elem, 'color', '#fff');
                setStyleIfNotPresent(elem, 'padding', '0.8rem 1.5rem');
                setStyleIfNotPresent(elem, 'borderRadius', '5px');
                setStyleIfNotPresent(elem, 'border', 'none');
                setStyleIfNotPresent(elem, 'cursor', 'pointer');
                setStyleIfNotPresent(elem, 'transition', 'background-color 0.3s ease, transform 0.2s ease');

                // Hover effect
                elem.addEventListener('mouseenter', () => {
                    setStyleIfNotPresent(elem, 'backgroundColor', '#218838');
                    // elem.style.backgroundColor = '#218838'; // Darker shade on hover
                    elem.style.transform = 'scale(1.05)';
                });
                elem.addEventListener('mouseleave', () => {
                    setStyleIfNotPresent(elem, 'backgroundColor', '#28a745');
                    // elem.style.backgroundColor = '#28a745'; // Original color
                    elem.style.transform = 'scale(1)';
                });
            } else if (elem.tagName === 'A') {
                setStyleIfNotPresent(elem, 'textDecoration', 'none');
                setStyleIfNotPresent(elem, 'color', '#d1d1d1'); // Link color
                setStyleIfNotPresent(elem, 'transition', 'color 0.3s ease');

                // Hover effect for anchor
                elem.addEventListener('mouseenter', () => {
                    elem.style.color = '#ffffff'; // Highlight link on hover
                });
                elem.addEventListener('mouseleave', () => {
                    elem.style.color = '#d1d1d1'; // Original color
                });
            }
        });

        // Apply media query styles
        const applyMediaQueryStyles = () => {
            const smallScreen = window.matchMedia('(max-width: 600px)');
            const bigScreen = window.matchMedia('(min-width: 601px)');

            if (smallScreen.matches) {
                setStyleIfNotPresent(signupForm, 'padding', '1.5rem');
                setStyleIfNotPresent(signupForm, 'width', '90vw');
                setStyleIfNotPresent(signupForm, 'borderRadius', '10px'); // Maintain radius
            } else if (bigScreen.matches) {
                setStyleIfNotPresent(signupForm, 'width', '35vw'); // Adjust width for larger screens
            }
        };

        applyMediaQueryStyles();
        window.addEventListener('resize', applyMediaQueryStyles);
    });
}

applySignupForm1();
