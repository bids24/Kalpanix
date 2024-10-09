export function applyLoginForm1() {
    const loginForms = document.querySelectorAll('.Kalpanix-loginform1');

    loginForms.forEach(loginForm => {
        // Helper function to check and set style conditionally
        const setStyleIfNotPresent = (element, property, value) => {
            if (!element.style[property]) {
                element.style[property] = value;
            }
        };

        // Set the login form container styles conditionally
        setStyleIfNotPresent(loginForm, 'display', 'flex');
        setStyleIfNotPresent(loginForm, 'flexDirection', 'column');
        setStyleIfNotPresent(loginForm, 'width', '30vw');
        setStyleIfNotPresent(loginForm, 'padding', '2rem');
        setStyleIfNotPresent(loginForm, 'border', 'none');
        setStyleIfNotPresent(loginForm, 'borderRadius', '5px');
        setStyleIfNotPresent(loginForm, 'boxShadow', '0px 1px 3px rgba(0, 0, 0, 0.7)');

        // Apply margin-top for each child element inside the login form
        Array.from(loginForm.children).forEach(child => {
            setStyleIfNotPresent(child, 'marginTop', '1rem');
        });

        // Set input field styles conditionally
        loginForm.querySelectorAll('input').forEach(input => {
            if(input.type === 'text' || input.type === 'password'){
                setStyleIfNotPresent(input, 'height', '2rem');
            }
            setStyleIfNotPresent(input, 'fontSize', '1.3rem');
            setStyleIfNotPresent(input, 'boxShadow', '0px 1px 3px rgba(0,0,0,0.7)');
            setStyleIfNotPresent(input, 'border', 'none');
            setStyleIfNotPresent(input, 'borderRadius', '5px');

            // Focus and blur event listeners for input styling
            input.addEventListener('focus', () => {
                input.style.outline = '2px solid rgb(80, 96, 217)';
                input.style.boxShadow = '0px 1px 10px rgba(80, 96, 217, 0.7)';
            });
            input.addEventListener('blur', () => {
                input.style.outline = 'none';
                input.style.boxShadow = '0px 1px 3px rgba(0, 0, 0, 0.7)';
            });
        });

        // Set label styles conditionally
        loginForm.querySelectorAll('label').forEach(label => {
            setStyleIfNotPresent(label, 'fontSize', '1.1rem');
            setStyleIfNotPresent(label, 'fontWeight', 'bold');
            setStyleIfNotPresent(label, 'color', '#575655');
            setStyleIfNotPresent(label, 'fontFamily', 'sans-serif');
        });

        // Create container for submit button and anchor
        const cont = document.createElement('div');
        document.querySelector('input[type="submit"]').insertAdjacentElement('beforebegin', cont);

        // Set the container styles conditionally
        setStyleIfNotPresent(cont, 'display', 'flex');
        setStyleIfNotPresent(cont, 'justifyContent', 'space-between');
        setStyleIfNotPresent(cont, 'alignItems', 'center');
        setStyleIfNotPresent(cont, 'marginTop', '1rem');

        // Set styles for submit button and anchor link
        loginForm.querySelectorAll('input[type="submit"], a').forEach(elem => {
            cont.appendChild(elem);
            setStyleIfNotPresent(elem, 'fontSize', '1.1rem');
            setStyleIfNotPresent(elem, 'fontWeight', 'bold');
            setStyleIfNotPresent(elem, 'color', '#1931e3');
            setStyleIfNotPresent(elem, 'fontFamily', 'sans-serif');
            // setStyleIfNotPresent(elem, 'display', 'inline');

            if (elem.type === 'submit') {
                setStyleIfNotPresent(elem, 'backgroundColor', '#1931e3');
                setStyleIfNotPresent(elem, 'color', '#ffffff');
                setStyleIfNotPresent(elem, 'padding', '1rem');
                // setStyleIfNotPresent(input, 'height', '4rem');
            } else if (elem.tagName === 'A') {
                setStyleIfNotPresent(elem, 'textDecoration', 'none');
            }
        });

        // Apply media query styles conditionally
        const applyMediaQueryStyles = () => {
            const smallScreen = window.matchMedia('(max-width: 600px)');
            const bigScreen = window.matchMedia('(min-width: 601px)');
            if (smallScreen.matches) {
                loginForm.style.padding = '12px';
                loginForm.style.width = '95vw'; // Max width to fit smaller screens
            }
            else if(bigScreen.matches){
                loginForm.style.width = '30vw'; 
            }
        };

        applyMediaQueryStyles();
        window.addEventListener('resize', applyMediaQueryStyles);
    });
}

applyLoginForm1();
