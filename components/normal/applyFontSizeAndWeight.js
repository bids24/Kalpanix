// Select all elements with class starting with 'fs-'
const Elements = document.querySelectorAll('[class*="fs-"]');
console.log(Elements);

// Export a function with a meaningful name that describes the behavior
export function applyFontSizeAndWeight() {
    Elements.forEach(elem => {
        // Find the class that starts with 'fs-'
        const sizeClass = elem.className.split(' ').find(c => c.startsWith('fs-'));

        // Extract size and optional weight
        if (sizeClass) {
            const classParts = sizeClass.split('-'); // Split by '-' to get size and optional weight
            
            const fontSize = classParts[1]; // This is the second part, the size (e.g., 40px, 2rem)
            const fontWeight = classParts.length > 2 ? classParts[2] : null; // Optional third part for weight

            // Apply font size
            elem.style.fontSize = fontSize;

            // Apply font weight if available
            if (fontWeight) {
                elem.style.fontWeight = fontWeight;
            }
        }
    });
}

// Call the function to apply styles
applyFontSizeAndWeight();
