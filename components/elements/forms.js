// Form 1
export function applyFormStyles1() {
    const forms = document.querySelectorAll('.kalpanix-form1');

    forms.forEach(form => {
        form.style.backgroundColor = '#f0f0f0';
        form.style.padding = '20px';
        form.style.borderRadius = '10px';
        form.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
        form.style.fontFamily = 'Arial, sans-serif';
        form.style.maxWidth = '100%'; // Ensure it doesn't overflow screen width

        // Input Styling
        const inputs = form.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.style.width = '100%';
            input.style.padding = '12px';
            input.style.marginBottom = '15px';
            input.style.border = '1px solid #ccc';
            input.style.borderRadius = '5px';
            input.style.boxSizing = 'border-box'; // Ensures no overflow
        });

        // Button Styling
        const buttons = form.querySelectorAll('button, input[type="submit"]');
        buttons.forEach(button => {
            button.style.backgroundColor = '#3498db';
            button.style.color = '#fff';
            button.style.padding = '10px';
            button.style.border = 'none';
            button.style.borderRadius = '5px';
            button.style.cursor = 'pointer';
            button.style.width = '100%'; // Full width for small screens
        });

        // Media Query
        const applyMediaQueryStyles = () => {
            const mediaQuery = window.matchMedia('(max-width: 600px)');
            if (mediaQuery.matches) {
                form.style.padding = '10px';
                form.style.maxWidth = '95vw'; // Max width to fit smaller screens
            }
        };

        applyMediaQueryStyles();
        window.addEventListener('resize', applyMediaQueryStyles);
    });
}
applyFormStyles1();

// Form 2
export function applyFormStyles2() {
    const forms = document.querySelectorAll('.kalpanix-form2');

    forms.forEach(form => {
        form.style.backgroundColor = '#fafafa';
        form.style.padding = '25px';
        form.style.borderRadius = '15px';
        form.style.border = '1px solid #ddd';
        form.style.maxWidth = '100%'; // Ensure it doesn't overflow screen width

        // Input Styling
        const inputs = form.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.style.width = '100%';
            input.style.padding = '14px';
            input.style.border = '2px solid #bbb';
            input.style.borderRadius = '8px';
            input.style.boxSizing = 'border-box'; // Ensures no overflow
        });

        // Button Styling
        const buttons = form.querySelectorAll('button, input[type="submit"]');
        buttons.forEach(button => {
            button.style.backgroundColor = '#2ecc71';
            button.style.color = '#fff';
            button.style.padding = '12px';
            button.style.border = 'none';
            button.style.borderRadius = '8px';
            button.style.width = '100%'; // Full width for small screens
        });

        // Media Query
        const applyMediaQueryStyles = () => {
            const mediaQuery = window.matchMedia('(max-width: 600px)');
            if (mediaQuery.matches) {
                form.style.padding = '12px';
                form.style.maxWidth = '95vw'; // Max width to fit smaller screens
            }
        };

        applyMediaQueryStyles();
        window.addEventListener('resize', applyMediaQueryStyles);
    });
}
applyFormStyles2();

// Form 3
export function applyFormStyles3() {
    const forms = document.querySelectorAll('.kalpanix-form3');

    forms.forEach(form => {
        form.style.backgroundColor = '#ffffff';
        form.style.padding = '30px';
        form.style.borderRadius = '12px';
        form.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
        form.style.maxWidth = '100%'; // Ensure it doesn't overflow screen width

        // Input Styling
        const inputs = form.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.style.width = '100%';
            input.style.padding = '15px';
            input.style.border = '1px solid #ddd';
            input.style.borderRadius = '10px';
            input.style.boxSizing = 'border-box'; // Ensures no overflow
        });

        // Button Styling
        const buttons = form.querySelectorAll('button, input[type="submit"]');
        buttons.forEach(button => {
            button.style.backgroundColor = '#9b59b6';
            button.style.color = '#fff';
            button.style.padding = '15px';
            button.style.border = 'none';
            button.style.borderRadius = '10px';
            button.style.width = '100%'; // Full width for small screens
        });

        // Media Query
        const applyMediaQueryStyles = () => {
            const mediaQuery = window.matchMedia('(max-width: 600px)');
            if (mediaQuery.matches) {
                form.style.padding = '15px';
                form.style.maxWidth = '95vw'; // Max width to fit smaller screens
            }
        };

        applyMediaQueryStyles();
        window.addEventListener('resize', applyMediaQueryStyles);
    });
}
applyFormStyles3();

// Form 4
export function applyFormStyles4() {
    const forms = document.querySelectorAll('.kalpanix-form4');

    forms.forEach(form => {
        form.style.backgroundColor = '#e0f7fa';
        form.style.padding = '20px';
        form.style.borderRadius = '10px';
        form.style.boxShadow = '0 3px 6px rgba(0, 0, 0, 0.1)';
        form.style.maxWidth = '100%'; // Ensure it doesn't overflow screen width

        // Input Styling
        const inputs = form.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.style.width = '100%';
            input.style.padding = '10px';
            input.style.border = '1px solid #b2ebf2';
            input.style.borderRadius = '8px';
            input.style.boxSizing = 'border-box'; // Ensures no overflow
        });

        // Button Styling
        const buttons = form.querySelectorAll('button, input[type="submit"]');
        buttons.forEach(button => {
            button.style.backgroundColor = '#00acc1';
            button.style.color = '#fff';
            button.style.padding = '10px';
            button.style.border = 'none';
            button.style.borderRadius = '8px';
            button.style.width = '100%'; // Full width for small screens
        });

        // Media Query
        const applyMediaQueryStyles = () => {
            const mediaQuery = window.matchMedia('(max-width: 600px)');
            if (mediaQuery.matches) {
                form.style.padding = '10px';
                form.style.maxWidth = '95vw'; // Max width to fit smaller screens
            }
        };

        applyMediaQueryStyles();
        window.addEventListener('resize', applyMediaQueryStyles);
    });
}
applyFormStyles4();

// Form 5
export function applyFormStyles5() {
    const forms = document.querySelectorAll('.kalpanix-form5');

    forms.forEach(form => {
        form.style.backgroundColor = '#fbe9e7';
        form.style.padding = '25px';
        form.style.borderRadius = '12px';
        form.style.border = '1px solid #ffccbc';
        form.style.maxWidth = '100%'; // Ensure it doesn't overflow screen width

        // Input Styling
        const inputs = form.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.style.width = '100%';
            input.style.padding = '12px';
            input.style.border = '2px solid #ffab91';
            input.style.borderRadius = '8px';
            input.style.boxSizing = 'border-box'; // Ensures no overflow
        });

        // Button Styling
        const buttons = form.querySelectorAll('button, input[type="submit"]');
        buttons.forEach(button => {
            button.style.backgroundColor = '#ff7043';
            button.style.color = '#fff';
            button.style.padding = '12px';
            button.style.border = 'none';
            button.style.borderRadius = '8px';
            button.style.width = '100%'; // Full width for small screens
        });

        // Media Query
        const applyMediaQueryStyles = () => {
            const mediaQuery = window.matchMedia('(max-width: 600px)');
            if (mediaQuery.matches) {
                form.style.padding = '12px';
                form.style.maxWidth = '95vw'; // Max width to fit smaller screens
            }
        };

        applyMediaQueryStyles();
        window.addEventListener('resize', applyMediaQueryStyles);
    });
}
applyFormStyles5();

// Form 6
export function applyFormStyles6() {
    const forms = document.querySelectorAll('.kalpanix-form6');

    forms.forEach(form => {
        form.style.backgroundColor = '#fff3e0';
        form.style.padding = '20px';
        form.style.borderRadius = '15px';
        form.style.border = '1px solid #ffe0b2';
        form.style.maxWidth = '100%'; // Ensure it doesn't overflow screen width

        // Input Styling
        const inputs = form.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.style.width = '100%';
            input.style.padding = '12px';
            input.style.border = '1px solid #ffcc80';
            input.style.borderRadius = '10px';
            input.style.boxSizing = 'border-box'; // Ensures no overflow
        });

        // Button Styling
        const buttons = form.querySelectorAll('button, input[type="submit"]');
        buttons.forEach(button => {
            button.style.backgroundColor = '#fb8c00';
            button.style.color = '#fff';
            button.style.padding = '12px';
            button.style.border = 'none';
            button.style.borderRadius = '10px';
            button.style.width = '100%'; // Full width for small screens
        });

        // Media Query
        const applyMediaQueryStyles = () => {
            const mediaQuery = window.matchMedia('(max-width: 600px)');
            if (mediaQuery.matches) {
                form.style.padding = '12px';
                form.style.maxWidth = '95vw'; // Max width to fit smaller screens
            }
        };

        applyMediaQueryStyles();
        window.addEventListener('resize', applyMediaQueryStyles);
    });
}
applyFormStyles6();

// Form 7
export function applyFormStyles7() {
    const forms = document.querySelectorAll('.kalpanix-form7');

    forms.forEach(form => {
        form.style.backgroundColor = '#f3e5f5';
        form.style.padding = '30px';
        form.style.borderRadius = '12px';
        form.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
        form.style.maxWidth = '100%'; // Ensure it doesn't overflow screen width

        // Input Styling
        const inputs = form.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.style.width = '100%';
            input.style.padding = '14px';
            input.style.border = '1px solid #ce93d8';
            input.style.borderRadius = '10px';
            input.style.boxSizing = 'border-box'; // Ensures no overflow
        });

        // Button Styling
        const buttons = form.querySelectorAll('button, input[type="submit"]');
        buttons.forEach(button => {
            button.style.backgroundColor = '#ab47bc';
            button.style.color = '#fff';
            button.style.padding = '14px';
            button.style.border = 'none';
            button.style.borderRadius = '10px';
            button.style.width = '100%'; // Full width for small screens
        });

        // Media Query
        const applyMediaQueryStyles = () => {
            const mediaQuery = window.matchMedia('(max-width: 600px)');
            if (mediaQuery.matches) {
                form.style.padding = '15px';
                form.style.maxWidth = '95vw'; // Max width to fit smaller screens
            }
        };

        applyMediaQueryStyles();
        window.addEventListener('resize', applyMediaQueryStyles);
    });
}
applyFormStyles7();

// Form 8
export function applyFormStyles8() {
    const forms = document.querySelectorAll('.kalpanix-form8');

    forms.forEach(form => {
        form.style.backgroundColor = '#e8f5e9';
        form.style.padding = '25px';
        form.style.borderRadius = '12px';
        form.style.border = '1px solid #c8e6c9';
        form.style.maxWidth = '100%'; // Ensure it doesn't overflow screen width

        // Input Styling
        const inputs = form.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.style.width = '100%';
            input.style.padding = '12px';
            input.style.border = '1px solid #a5d6a7';
            input.style.borderRadius = '8px';
            input.style.boxSizing = 'border-box'; // Ensures no overflow
        });

        // Button Styling
        const buttons = form.querySelectorAll('button, input[type="submit"]');
        buttons.forEach(button => {
            button.style.backgroundColor = '#66bb6a';
            button.style.color = '#fff';
            button.style.padding = '12px';
            button.style.border = 'none';
            button.style.borderRadius = '8px';
            button.style.width = '100%'; // Full width for small screens
        });

        // Media Query
        const applyMediaQueryStyles = () => {
            const mediaQuery = window.matchMedia('(max-width: 600px)');
            if (mediaQuery.matches) {
                form.style.padding = '12px';
                form.style.maxWidth = '95vw'; // Max width to fit smaller screens
            }
        };

        applyMediaQueryStyles();
        window.addEventListener('resize', applyMediaQueryStyles);
    });
}
applyFormStyles8();

// Form 9
export function applyFormStyles9() {
    const forms = document.querySelectorAll('.kalpanix-form9');

    forms.forEach(form => {
        form.style.backgroundColor = '#f9fbe7';
        form.style.padding = '20px';
        form.style.borderRadius = '10px';
        form.style.border = '1px solid #f0f4c3';
        form.style.maxWidth = '100%'; // Ensure it doesn't overflow screen width

        // Input Styling
        const inputs = form.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.style.width = '100%';
            input.style.padding = '12px';
            input.style.border = '1px solid #dce775';
            input.style.borderRadius = '10px';
            input.style.boxSizing = 'border-box'; // Ensures no overflow
        });

        // Button Styling
        const buttons = form.querySelectorAll('button, input[type="submit"]');
        buttons.forEach(button => {
            button.style.backgroundColor = '#cddc39';
            button.style.color = '#fff';
            button.style.padding = '12px';
            button.style.border = 'none';
            button.style.borderRadius = '10px';
            button.style.width = '100%'; // Full width for small screens
        });

        // Media Query
        const applyMediaQueryStyles = () => {
            const mediaQuery = window.matchMedia('(max-width: 600px)');
            if (mediaQuery.matches) {
                form.style.padding = '12px';
                form.style.maxWidth = '95vw'; // Max width to fit smaller screens
            }
        };

        applyMediaQueryStyles();
        window.addEventListener('resize', applyMediaQueryStyles);
    });
}
applyFormStyles9();

// Form 10
export function applyFormStyles10() {
    const forms = document.querySelectorAll('.kalpanix-form10');

    forms.forEach(form => {
        form.style.backgroundColor = '#eceff1';
        form.style.padding = '25px';
        form.style.borderRadius = '10px';
        form.style.border = '1px solid #cfd8dc';
        form.style.maxWidth = '100%'; // Ensure it doesn't overflow screen width

        // Input Styling
        const inputs = form.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.style.width = '100%';
            input.style.padding = '12px';
            input.style.border = '1px solid #b0bec5';
            input.style.borderRadius = '10px';
            input.style.boxSizing = 'border-box'; // Ensures no overflow
        });

        // Button Styling
        const buttons = form.querySelectorAll('button, input[type="submit"]');
        buttons.forEach(button => {
            button.style.backgroundColor = '#607d8b';
            button.style.color = '#fff';
            button.style.padding = '12px';
            button.style.border = 'none';
            button.style.borderRadius = '10px';
            button.style.width = '100%'; // Full width for small screens
        });

        // Media Query
        const applyMediaQueryStyles = () => {
            const mediaQuery = window.matchMedia('(max-width: 600px)');
            if (mediaQuery.matches) {
                form.style.padding = '12px';
                form.style.maxWidth = '95vw'; // Max width to fit smaller screens
            }
        };

        applyMediaQueryStyles();
        window.addEventListener('resize', applyMediaQueryStyles);
    });
}
applyFormStyles10();
