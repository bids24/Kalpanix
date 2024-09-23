const bgElements = document.querySelectorAll('[class^="colour-"]');
console.log(bgElements);

// Export a function to allow reusability
export function applyColors() {
    bgElements.forEach(elem => {
        const colorClass = elem.className.split(' ').find(c => c.startsWith('colour-'));
        const color = colorClass ? colorClass.split('-')[1] : 'gray';
        elem.style.color = color;
    });
}
applyColors()