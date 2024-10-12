import { classToCssProperty } from "../../vocab.js";
export function applyLoginForm1() {
    const loginForms = document.querySelectorAll('.kalpanix-loginform1');
    const checkAndSetProp = (val, prop, elem) => {
        let cList = Array.from(elem.classList);
        let cl;
        for(const c in cList){
          const p = cList[c].split("-")[0] + "-";
          if(classToCssProperty[p] === prop){
            cl = cList[c];
            break;
          }
        }
        for(const c in cList){
            if(!cl)
            {
              elem.style[prop] = val;
              break;
            }
        }
        if (cList.length === 0) {
          elem.style[prop] = val;
        }
      };
    loginForms.forEach(loginForm => {
        // Helper function to check and set style conditionally
        // const setStyleIfNotPresent = (element, property, value) => {
        //     if (!element.style[property]) {
        //         element.style[property] = value;
        //     }
        // };

        // Set the login form container styles conditionally
        checkAndSetProp('aqua', 'backgroundColor', loginForm)
        checkAndSetProp('flex', 'display', loginForm);
        checkAndSetProp('column', 'flexDirection', loginForm);
        checkAndSetProp('40vw', 'width', loginForm);
        checkAndSetProp('2rem', 'padding', loginForm);
        checkAndSetProp('none', 'border', loginForm);
        checkAndSetProp('5px', 'borderRadius', loginForm);
        checkAndSetProp('0px 1px 3px rgba(0, 0, 0, 0.7)', 'boxShadow', loginForm);

        // Apply margin-top for each child element inside the login form
        Array.from(loginForm.children).forEach(child => {
            checkAndSetProp('1rem', 'marginTop', child);
        });

        // Set input field styles conditionally
        loginForm.querySelectorAll('input').forEach(input => {
            if(input.type === 'text' || input.type === 'password'){
                checkAndSetProp('2rem', 'height', input)
            }
            checkAndSetProp('1rem', 'fontSize', input);
            checkAndSetProp('0px 1px 3px rgba(0,0,0,0.7)', 'boxShadow', input);
            checkAndSetProp('none', 'border', input);
            checkAndSetProp('5px', 'borderRadius', input);

            // Focus and blur event listeners for input styling
            input.addEventListener('focus', () => {
                checkAndSetProp('2px solid rgb(80, 96, 217)', 'outLine', input);
                checkAndSetProp('0px 1px 10px rgba(80, 96, 217, 0.7)', 'boxShadow', input);
            });
            input.addEventListener('blur', () => {
                checkAndSetProp('none', 'outLine', input);
                checkAndSetProp('0px 1px 3px rgba(0, 0, 0, 0.7)', 'boxShadow', input);
            });
        });

        // Set label styles conditionally
        loginForm.querySelectorAll('label').forEach(label => {
            checkAndSetProp('1.1rem', 'fontSize', label);
            checkAndSetProp('bold', 'fontWeight', label);
            checkAndSetProp('#575655', 'color', label);
            checkAndSetProp('sans-serif', 'fontFamily', label)
        });

        // Create container for submit button and anchor
        const cont = document.createElement('div');
        document.querySelector('input[type="submit"]').insertAdjacentElement('beforebegin', cont);

        // Set the container styles conditionally
        checkAndSetProp('flex', 'display', cont);
        checkAndSetProp('row', 'flexDirection', cont);
        checkAndSetProp('space-between', 'justifyContent', cont);
        checkAndSetProp('center', 'alignItems', cont);
        checkAndSetProp('1rem', 'marginTop', cont);

        // Set styles for submit button and anchor link
        loginForm.querySelectorAll('input[type="submit"], a').forEach(elem => {
            cont.appendChild(elem);
            checkAndSetProp('1.1rem', 'fontSize', elem);
            checkAndSetProp('bold', 'fontWeight', elem);
            checkAndSetProp('sans-serif', 'fontFamily', elem);

            if (elem.tagName === 'A') {
                checkAndSetProp('none', 'textDecoration', elem);
            }
        });

        // Apply media query styles conditionally
        const applyMediaQueryStyles = () => {
            const smallScreen = window.matchMedia('(max-width: 600px)');
            const bigScreen = window.matchMedia('(min-width: 601px)');
            if (smallScreen.matches) {
                checkAndSetProp('12px', 'padding', loginForm);
                checkAndSetProp('95vw', 'width', loginForm);
            }
            else if(bigScreen.matches){
                checkAndSetProp('30vw', 'width', loginForm); 
            }
        };

        applyMediaQueryStyles();
        window.addEventListener('resize', applyMediaQueryStyles);
    });
}

applyLoginForm1();
