const bgElements = document.querySelectorAll('[class^="bg-"]');
console.log(bgElements);

// Export a function to allow reusability
export function applyBackgroundColors() {
    bgElements.forEach(elem => {
        const colorClass = elem.className.split(' ').find(c => c.startsWith('bg-'));
        const color = colorClass ? colorClass.split('-')[1] : 'gray';
        elem.style.backgroundColor = color;
    });
}
