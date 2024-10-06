// Button Style 1
export function applyButtonStyle1() {
    const buttons = document.querySelectorAll('.kalpanix-btn1');
    buttons.forEach(button => {
        button.style.backgroundColor = '#3498db';
        button.style.color = 'white';
        button.style.padding = '15px 32px';
        button.style.borderRadius = '8px';
        button.style.transition = 'all 0.3s ease';
        button.addEventListener('mouseover', () => button.style.backgroundColor = '#2980b9');
        button.addEventListener('mouseout', () => button.style.backgroundColor = '#3498db');
    });
}
applyButtonStyle1();
// Button Style 2 - Outline Button
export function applyButtonStyle2() {
    const buttons = document.querySelectorAll('.kalpanix-btn2');
    buttons.forEach(button => {
        button.style.backgroundColor = 'transparent';
        button.style.color = '#3498db';
        button.style.border = '2px solid #3498db';
        button.style.padding = '12px 24px';
        button.style.transition = 'all 0.3s ease';
        button.addEventListener('mouseover', () => {
            button.style.backgroundColor = '#3498db';
            button.style.color = 'white';
        });
        button.addEventListener('mouseout', () => {
            button.style.backgroundColor = 'transparent';
            button.style.color = '#3498db';
        });
    });
}
applyButtonStyle2();
// Button Style 3 - Gradient Button
export function applyButtonStyle3() {
    const buttons = document.querySelectorAll('.kalpanix-btn3');
    buttons.forEach(button => {
        button.style.backgroundImage = 'linear-gradient(to right, #f2709c, #ff9472)';
        button.style.color = 'white';
        button.style.padding = '15px 32px';
        button.style.border = 'none';
        button.style.borderRadius = '50px';
        button.style.transition = 'all 0.3s ease';
        button.addEventListener('mouseover', () => button.style.transform = 'scale(1.1)');
        button.addEventListener('mouseout', () => button.style.transform = 'scale(1)');
    });
}
applyButtonStyle3();
// Button Style 4 - Neon Button
export function applyButtonStyle4() {
    const buttons = document.querySelectorAll('.kalpanix-btn4');
    buttons.forEach(button => {
        button.style.backgroundColor = '#141e30';
        button.style.color = 'white';
        button.style.padding = '10px 30px';
        button.style.border = 'none';
        button.style.borderRadius = '4px';
        button.style.boxShadow = '0 0 5px #00ff00, 0 0 10px #00ff00';
        button.style.transition = '0.2s ease-in-out';
        button.addEventListener('mouseover', () => button.style.boxShadow = '0 0 15px #00ff00, 0 0 30px #00ff00');
        button.addEventListener('mouseout', () => button.style.boxShadow = '0 0 5px #00ff00, 0 0 10px #00ff00');
    });
}
applyButtonStyle4();
// Button Style 5 - Pulse Button
export function applyButtonStyle5() {
    const buttons = document.querySelectorAll('.kalpanix-btn5');
    buttons.forEach(button => {
        button.style.backgroundColor = '#8e44ad';
        button.style.color = 'white';
        button.style.padding = '15px 32px';
        button.style.border = 'none';
        button.style.borderRadius = '50px';
        button.style.transition = 'transform 0.3s ease';
        button.addEventListener('mouseover', () => button.style.transform = 'scale(1.2)');
        button.addEventListener('mouseout', () => button.style.transform = 'scale(1)');
    });
}
applyButtonStyle5();
// Button Style 6 - Slide Button
export function applyButtonStyle6() {
    const buttons = document.querySelectorAll('.kalpanix-btn6');
    buttons.forEach(button => {
        button.style.backgroundColor = '#e74c3c';
        button.style.color = 'white';
        button.style.padding = '15px 32px';
        button.style.border = 'none';
        button.style.position = 'relative';
        button.style.overflow = 'hidden';
        button.style.transition = 'all 0.3s ease';
        const span = document.createElement('span');
        span.style.background = '#c0392b';
        span.style.position = 'absolute';
        span.style.width = '100%';
        span.style.height = '100%';
        span.style.top = '0';
        span.style.left = '-100%';
        span.style.transition = 'all 0.3s ease';
        button.appendChild(span);
        button.addEventListener('mouseover', () => span.style.left = '0');
        button.addEventListener('mouseout', () => span.style.left = '-100%');
    });
}
applyButtonStyle6();
// Button Style 7 - Floating Button
export function applyButtonStyle7() {
    const buttons = document.querySelectorAll('.kalpanix-btn7');
    buttons.forEach(button => {
        button.style.backgroundColor = '#2ecc71';
        button.style.color = 'white';
        button.style.padding = '15px 32px';
        button.style.border = 'none';
        button.style.borderRadius = '50px';
        button.style.transition = 'all 0.3s ease';
        button.addEventListener('mouseover', () => {
            button.style.boxShadow = '0px 10px 15px rgba(0, 0, 0, 0.2)';
            button.style.transform = 'translateY(-5px)';
        });
        button.addEventListener('mouseout', () => {
            button.style.boxShadow = 'none';
            button.style.transform = 'translateY(0)';
        });
    });
}
applyButtonStyle7();
// Button Style 8 - Ripple Button
export function applyButtonStyle8() {
    const buttons = document.querySelectorAll('.kalpanix-btn8');
    buttons.forEach(button => {
        button.style.backgroundColor = '#16a085';
        button.style.color = 'white';
        button.style.padding = '15px 32px';
        button.style.border = 'none';
        button.style.position = 'relative';
        button.style.overflow = 'hidden';
        button.style.transition = 'all 0.3s ease';
        button.addEventListener('click', (e) => {
            const circle = document.createElement('span');
            const diameter = Math.max(button.clientWidth, button.clientHeight);
            const radius = diameter / 2;
            circle.style.width = circle.style.height = `${diameter}px`;
            circle.style.left = `${e.clientX - button.offsetLeft - radius}px`;
            circle.style.top = `${e.clientY - button.offsetTop - radius}px`;
            circle.style.position = 'absolute';
            circle.style.background = 'rgba(255, 255, 255, 0.5)';
            circle.style.borderRadius = '50%';
            circle.style.transform = 'scale(0)';
            circle.style.animation = 'ripple 0.6s linear';
            button.appendChild(circle);
            circle.addEventListener('animationend', () => circle.remove());
        });
    });
}
applyButtonStyle7();
// Add styles for ripple animation
const style = document.createElement('style');
style.innerHTML = `
@keyframes ripple {
    to {
        transform: scale(4);
        opacity: 0;
    }
}
`;
document.head.appendChild(style);

// Button Style 9 - Ghost Button
export function applyButtonStyle9() {
    const buttons = document.querySelectorAll('.kalpanix-btn9');
    buttons.forEach(button => {
        button.style.backgroundColor = 'transparent';
        button.style.color = '#34495e';
        button.style.border = '2px solid #34495e';
        button.style.padding = '12px 24px';
        button.style.transition = 'all 0.3s ease';
        button.addEventListener('mouseover', () => {
            button.style.backgroundColor = '#34495e';
            button.style.color = 'white';
        });
        button.addEventListener('mouseout', () => {
            button.style.backgroundColor = 'transparent';
            button.style.color = '#34495e';
        });
    });
}
applyButtonStyle9();
// Button Style 10 - Text Button
export function applyButtonStyle10() {
    const buttons = document.querySelectorAll('.kalpanix-btn10');
    buttons.forEach(button => {
        button.style.backgroundColor = 'transparent';
        button.style.color = '#e67e22';
        button.style.border = 'none';
        button.style.padding = '15px 32px';
        button.style.transition = 'all 0.3s ease';
        button.addEventListener('mouseover', () => button.style.textDecoration = 'underline');
        button.addEventListener('mouseout', () => button.style.textDecoration = 'none');
    });
}
applyButtonStyle10();
// You can continue adding more styles up to 20 buttons following this pattern
