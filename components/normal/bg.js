const bgElements = document.querySelectorAll('[class^="bg-"]');
console.log(bgElements);
let colors = ["red", "blue", "yellow"];

bgElements.forEach(elem => {
    const colorClass = elem.className.split(' ').find(c => c.startsWith('bg-'));
    console.log(colorClass);
    const color = colorClass ? colorClass.split('-')[1] : 'gray';
    elem.style.backgroundColor = color;
})