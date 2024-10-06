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
        dropdownClass.children[2].style.transition = 'visibility 1s ease';
        dropdownClass.children[2].style.fontSize = "1.5rem";
        dropdownClass.children[2].style.listStyleType = 'none';
        dropdownClass.children[2].style.backgroundColor = "aqua";
        dropdownClass.children[2].style.width = "fit-content";
        dropdownClass.children[2].style.visibility = "hidden";
        dropdownClass.children[0].addEventListener("mouseover", () => {
            dropdownClass.children[2].style.visibility = "visible";
            dropdownClass.children[1].innerHTML = " &#9660;";
        });
        dropdownClass.children[0].addEventListener("mouseout", () => {
            dropdownClass.children[2].style.visibility = "hidden";
            dropdownClass.children[1].innerHTML = "&#9650;";
        });
    });
}
applyDropdown();