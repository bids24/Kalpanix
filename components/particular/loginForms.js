export function applyLoginForm1(){
    const loginForms = document.querySelectorAll('.Kalpanix-loginform1');
    loginForms.forEach(loginForm => {
        loginForm.style.display = 'flex';
        loginForm.style.flexDirection = 'column';
        loginForm.style.width = '30vw';
        loginForm.style.padding = '2rem';
        loginForm.style.border = 'none';
        loginForm.style.borderRadius = '5px';
        loginForm.style.boxShadow = '0px 1px 3px rgb(0,0,0,0.7)';
        Array.from(loginForm.children).forEach(child => {
            child.style.marginTop = "1rem";
        });
        loginForm.querySelectorAll('input').forEach(input => {
            input.style.height = '2rem';
            input.style.fontSize = '1.3rem';
            input.style.boxShadow = '0px 1px 3px rgb(0,0,0,0.7)';
            input.style.border = 'none';
            input.style.borderRadius = '5px'
            input.addEventListener('focus', () => {
                input.style.outline = '2px solid rgb(80, 96, 217)';
                input.style.boxShadow = '0px 1px 10px rgb(80, 96, 217 ,0.7)'
            });
            input.addEventListener('blur', () => {
                input.style.outline = 'none';
                input.style.boxShadow = '0px 1px 3px rgb(0,0,0,0.7)'
            });
        });
        loginForm.querySelectorAll('label').forEach(label => {
            label.style.fontSize = '1.1rem';
            label.style.fontWeight = 'bold';
            label.style.color = '#575655';
            label.style.fontFamily = 'sans-serif';

        });
        const cont = document.createElement('div');
        document.querySelector('input[type="submit"]').insertAdjacentElement('beforebegin', cont);
        // cont.style.backgroundColor = 'red';
        cont.style.display = 'flex';
        // cont.style.border = '1px solid black';
        cont.style.justifyContent = 'space-between';
        cont.style.alignItems = 'center';
        cont.style.marginTop = '1rem';
        loginForm.querySelectorAll('input[type="submit"], a').forEach(elem => {
            cont.appendChild(elem);
            elem.style.fontSize = '1.1rem';
            elem.style.fontWeight = 'bold';
            elem.style.color = '#1931e3';
            elem.style.fontFamily = 'sans-serif';
            elem.style.display = 'inline';
            if(elem.type === 'submit'){
                elem.style.backgroundColor = "#1931e3";
                elem.style.color = "#ffffff";
                elem.style.padding = '1rem';
                elem.style.height = '100%';
            }
            else if(elem.tagName === "A"){
                elem.style.textDecoration = 'none';
            }
        });
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