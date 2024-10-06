export function applyDropdown(){
    const dropdownClasses = document.querySelectorAll('.Kalpanix-drop1');
    dropdownClasses.forEach(dropdownClass => {
        const invertedCaret = document.createElement('div');
        invertedCaret.style.display = 'inline';
        dropdownClass.children[0].style.display = 'inline';
        dropdownClass.children[0].style.marginRight = '0.5rem';
        dropdownClass.children[0].insertAdjacentElement('afterend', invertedCaret);
        dropdownClass.children[1].style.textAlign = "center";
        dropdownClass.children[1].innerHTML = "&#9650;";
        dropdownClass.children[2].style.textAlign = "right";
        dropdownClass.children[2].style.borderRadius = "0.5rem";
        dropdownClass.children[2].style.transition = 'opacity 0.5s ease, height 0.5s ease';
        dropdownClass.children[2].style.fontSize = "0.8rem";
        dropdownClass.children[2].style.listStyleType = 'none';
        dropdownClass.children[2].style.backgroundColor = "#2a2b2b";
        dropdownClass.children[2].style.color = "#ffffff";
        dropdownClass.children[2].style.width = "fit-content";
        dropdownClass.children[2].style.padding = "1rem";
        dropdownClass.children[2].style.opacity = "0";
        dropdownClass.children[2].style.height = "0";

        Array.from(dropdownClass.children[2].children).forEach(child => {
            child.style.borderBottom = "2px solid gray";
            child.style.borderRadius = "0.5rem";
        });
        dropdownClass.children[0].addEventListener("mouseover", () => {
            dropdownClass.children[2].style.opacity = "1"; // Make it visible
            dropdownClass.children[2].style.height = "auto"; // Set height to auto
            dropdownClass.children[1].innerHTML = " &#9660;";
        });
        dropdownClass.children[0].addEventListener("mouseout", () => {
            dropdownClass.children[2].style.opacity = "0"; // Make it transparent
            dropdownClass.children[2].style.height = "0"; // Set height back to 0
            dropdownClass.children[1].innerHTML = "&#9650;";
        });
    });
}
applyDropdown();