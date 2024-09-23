// Apply Colors
export function applyColors() {
    const elements = document.querySelectorAll('[class*="colour-"]');
    elements.forEach(elem => {
        const colorClass = Array.from(elem.classList).find(c => c.includes('colour-'));
        const color = colorClass ? colorClass.split('-')[1] : 'gray';
        elem.style.color = color;
    });
}
applyColors();
// Apply Font Size
export function applyFontSize() {
    const elements = document.querySelectorAll('[class*="font-"]');
    elements.forEach(elem => {
        const fontClass = Array.from(elem.classList).find(c => c.includes('font-'));
        if (fontClass) {
            const size = fontClass.split('-')[1];
            elem.style.fontSize = size;
        }
    });
}
applyFontSize();
// Apply Margin
export function applyMargin() {
    const elements = document.querySelectorAll('[class*="m-"], [class*="mt-"], [class*="mb-"], [class*="ml-"], [class*="mr-"]');
    elements.forEach(elem => {
        // Find all margin-related classes
        const marginClasses = Array.from(elem.classList).filter(c => 
            c.startsWith('m-') || 
            c.startsWith('mt-') || 
            c.startsWith('mb-') || 
            c.startsWith('ml-') || 
            c.startsWith('mr-')
        );
        
        marginClasses.forEach(marginClass => {
            // Split the class name based on the first hyphen
            const [direction, value] = marginClass.split('-');
            const size = parseInt(value, 10); // Parse the margin size (make sure it's an integer)

            if (!isNaN(size)) {
                switch (direction) {
                    case 'mt':
                        elem.style.marginTop = `${size}px`;
                        break;
                    case 'mb':
                        elem.style.marginBottom = `${size}px`;
                        break;
                    case 'ml':
                        elem.style.marginLeft = `${size}px`;
                        break;
                    case 'mr':
                        elem.style.marginRight = `${size}px`;
                        break;
                    default:
                        elem.style.margin = `${size}px`; // For 'm-' case
                }
            }
        });
    });
}

applyMargin();
// Apply Padding
export function applyPadding() {
    const elements = document.querySelectorAll('[class*="p-"], [class*="pt-"], [class*="pb-"], [class*="pl-"], [class*="pr-"]');
    elements.forEach(elem => {
        const paddingClasses = Array.from(elem.classList).filter(c =>
            c.includes('p-')||
            c.startsWith('pt-') || 
            c.startsWith('pb-') || 
            c.startsWith('pl-') || 
            c.startsWith('pr-')
        );
        paddingClasses.forEach(paddingClass => {
            const [direction, value] = paddingClass.split('-');
            const size = parseInt(value);
            switch (direction) {
                case 'pt':
                    elem.style.paddingTop = `${size * 5}px`;
                    break;
                case 'pb':
                    elem.style.paddingBottom = `${size * 5}px`;
                    break;
                case 'pl':
                    elem.style.paddingLeft = `${size * 5}px`;
                    break;
                case 'pr':
                    elem.style.paddingRight = `${size * 5}px`;
                    break;
                default:
                    elem.style.padding = `${size * 5}px`;
            }
        });
    });
}
applyPadding();
// Apply Border
export function applyBorder() {
    const elements = document.querySelectorAll('[class*="border-"]');
    elements.forEach(elem => {
        const borderClass = Array.from(elem.classList).find(c => c.includes('border-'));
        if (borderClass) {
            const properties = borderClass.split('-');
            const borderType = properties[1] || 'solid';
            const borderWidth = properties[2] ? `${properties[2]}px` : '1px';
            const borderColor = properties[3] || 'black';
            elem.style.border = `${borderWidth} ${borderType} ${borderColor}`;
        }
    });
}

// Apply Background
export function applyBackgrounds() {
    const elements = document.querySelectorAll('[class*="bg-"]');
    elements.forEach(elem => {
        const bgClass = Array.from(elem.classList).find(c => c.includes('bg-'));
        if (bgClass) {
            const bgColor = bgClass.split('-')[1] || 'transparent';
            elem.style.backgroundColor = bgColor;
        }
    });
}

// Apply Display
export function applyDisplay() {
    const elements = document.querySelectorAll('[class*="d-"]');
    elements.forEach(elem => {
        const displayClass = Array.from(elem.classList).find(c => c.includes('d-'));
        if (displayClass) {
            const displayValue = displayClass.split('-')[1] || 'block';
            elem.style.display = displayValue;
        }
    });
}

// Apply Position
export function applyPosition() {
    const elements = document.querySelectorAll('[class*="pos-"]');
    elements.forEach(elem => {
        const positionClass = Array.from(elem.classList).find(c => c.includes('pos-'));
        if (positionClass) {
            const positionValue = positionClass.split('-')[1] || 'static';
            elem.style.position = positionValue;
        }
    });
}

// Apply Width
export function applyWidth() {
    const elements = document.querySelectorAll('[class*="w-"]');
    elements.forEach(elem => {
        const widthClass = Array.from(elem.classList).find(c => c.includes('w-'));
        if (widthClass) {
            const widthValue = widthClass.split('-')[1];
            elem.style.width = widthValue ? `${widthValue}%` : 'auto';
        }
    });
}

// Apply Height
export function applyHeight() {
    const elements = document.querySelectorAll('[class*="h-"]');
    elements.forEach(elem => {
        const heightClass = Array.from(elem.classList).find(c => c.includes('h-'));
        if (heightClass) {
            const heightValue = heightClass.split('-')[1];
            elem.style.height = heightValue ? `${heightValue}px` : 'auto';
        }
    });
}

// Apply Text Align
export function applyTextAlign() {
    const elements = document.querySelectorAll('[class*="text-"]');
    elements.forEach(elem => {
        const textAlignClass = Array.from(elem.classList).find(c => c.includes('text-'));
        if (textAlignClass) {
            const alignValue = textAlignClass.split('-')[1] || 'left';
            elem.style.textAlign = alignValue;
        }
    });
}

// Apply Flex
export function applyFlex() {
    const elements = document.querySelectorAll('[class*="flex-"]');
    elements.forEach(elem => {
        const flexClass = Array.from(elem.classList).find(c => c.includes('flex-'));
        if (flexClass) {
            const flexValue = flexClass.split('-')[1] || '1';
            elem.style.flex = flexValue;
        }
    });
}

// Apply Overflow
export function applyOverflow() {
    const elements = document.querySelectorAll('[class*="overflow-"]');
    elements.forEach(elem => {
        const overflowClass = Array.from(elem.classList).find(c => c.includes('overflow-'));
        if (overflowClass) {
            const overflowValue = overflowClass.split('-')[1] || 'visible';
            elem.style.overflow = overflowValue;
        }
    });
}

// Apply Opacity
export function applyOpacity() {
    const elements = document.querySelectorAll('[class*="opacity-"]');
    elements.forEach(elem => {
        const opacityClass = Array.from(elem.classList).find(c => c.includes('opacity-'));
        if (opacityClass) {
            const opacityValue = opacityClass.split('-')[1] || '1';
            elem.style.opacity = opacityValue;
        }
    });
}

// Apply Z-Index
export function applyZIndex() {
    const elements = document.querySelectorAll('[class*="z-"]');
    elements.forEach(elem => {
        const zIndexClass = Array.from(elem.classList).find(c => c.includes('z-'));
        if (zIndexClass) {
            const zIndexValue = zIndexClass.split('-')[1] || '1';
            elem.style.zIndex = zIndexValue;
        }
    });
}

// Apply Visibility
export function applyVisibility() {
    const elements = document.querySelectorAll('[class*="visibility-"]');
    elements.forEach(elem => {
        const visibilityClass = Array.from(elem.classList).find(c => c.includes('visibility-'));
        if (visibilityClass) {
            const visibilityValue = visibilityClass.split('-')[1] || 'visible';
            elem.style.visibility = visibilityValue;
        }
    });
}

// Apply Box Shadow
export function applyBoxShadow() {
    const elements = document.querySelectorAll('[class*="shadow-"]');
    elements.forEach(elem => {
        const shadowClass = Array.from(elem.classList).find(c => c.includes('shadow-'));
        if (shadowClass) {
            const shadowValue = shadowClass.split('-')[1] || 'none';
            elem.style.boxShadow = shadowValue === 'none' ? 'none' : `0px 4px 8px rgba(0, 0, 0, 0.2)`;
        }
    });
}

// Apply Transition
export function applyTransition() {
    const elements = document.querySelectorAll('[class*="transition-"]');
    elements.forEach(elem => {
        const transitionClass = Array.from(elem.classList).find(c => c.includes('transition-'));
        if (transitionClass) {
            const transitionValue = transitionClass.split('-')[1] || 'all';
            elem.style.transition = `${transitionValue} 0.3s ease`;
        }
    });
}

// Apply Cursor
export function applyCursor() {
    const elements = document.querySelectorAll('[class*="cursor-"]');
    elements.forEach(elem => {
        const cursorClass = Array.from(elem.classList).find(c => c.includes('cursor-'));
        if (cursorClass) {
            const cursorValue = cursorClass.split('-')[1] || 'default';
            elem.style.cursor = cursorValue;
        }
    });
}

