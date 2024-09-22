const bgElements = document.querySelectorAll('[class^="bg-"]');
console.log(bgElements);

const colorMapping = {
    red: 'red',
    blue: 'blue',
    yellow: 'yellow',
};

bgElements.forEach(elem => {
    const colorClass = elem.className.split(' ').find(c => c.startsWith('bg-'));
    console.log(colorClass);
    const color = colorClass ? colorClass.split('-')[1] : 'gray';
    elem.style.backgroundColor = colorMapping[color] || 'gray';
});

// Export a function to allow reusability
export function applyBackgroundColors() {
    bgElements.forEach(elem => {
        const colorClass = elem.className.split(' ').find(c => c.startsWith('bg-'));
        const color = colorClass ? colorClass.split('-')[1] : 'gray';
        elem.style.backgroundColor = colorMapping[color] || 'gray';
    });
}
