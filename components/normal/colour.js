const Elements = document.querySelectorAll('[class^="colour-"]');
console.log(Elements);

// Export a function to allow reusability
export function applyColors() {
    Elements.forEach(elem => {
        const colorClass = elem.className.split(' ').find(c => c.startsWith('colour-'));
        const color = colorClass ? colorClass.split('-')[1] : 'gray';
        elem.style.color = color;
    });
}
applyColors()