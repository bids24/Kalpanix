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
export function applyFontWeight() {
    const elements = document.querySelectorAll('[class*="font-w-"]');
    elements.forEach(elem => {
        const fontClass = Array.from(elem.classList).find(c => c.includes('font-w-'));
        if (fontClass) {
            const weight = fontClass.split('-')[2];
            // console.log(size);
            elem.style.fontWeight = weight;
        }
    });
}
applyFontWeight();
// Apply Margin
export function applyMargin() {
    const elements = document.querySelectorAll('[class*="m-"], [class*="mt-"], [class*="mb-"], [class*="ml-"], [class*="mr-"]');
    elements.forEach(elem => {
        const marginClasses = Array.from(elem.classList).filter(c => 
            c.startsWith('m-') || 
            c.startsWith('mt-') || 
            c.startsWith('ml-') || 
            c.startsWith('mb-') || 
            c.startsWith('mr-')
          );
        
        marginClasses.forEach(marginClass => {
            const [direction, value] = marginClass.split('-');
            const size = parseInt(value);
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
                    elem.style.margin = `${size}px`;
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
            c.startsWith('p-') || 
            c.startsWith('pt-') || 
            c.startsWith('pl-') || 
            c.startsWith('pb-') || 
            c.startsWith('pr-')
          );
        paddingClasses.forEach(paddingClass => {
            const [direction, value] = paddingClass.split('-');
            const size = parseInt(value);
            switch (direction) {
                case 'pt':
                    elem.style.paddingTop = `${size}px`;
                    break;
                case 'pb':
                    elem.style.paddingBottom = `${size}px`;
                    break;
                case 'pl':
                    elem.style.paddingLeft = `${size}px`;
                    break;
                case 'pr':
                    elem.style.paddingRight = `${size}px`;
                    break;
                default:
                    elem.style.padding = `${size}px`;
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
applyBorder();

// Apply Background
export function applyBackgroundColor() {
    const elements = document.querySelectorAll('[class*="bg-color-"]');
    elements.forEach(elem => {
        const bgClass = Array.from(elem.classList).find(c => c.includes('bg-color-'));
        if (bgClass) {
            const bgColor = bgClass.split('-')[1] || 'transparent';
            elem.style.backgroundColor = bgColor;
        }
    });
}
applyBackgroundColor();
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
applyDisplay();
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
applyPosition();
// Apply Width
export function applyWidth() {
    const elements = document.querySelectorAll('[class*="w-"]');
    elements.forEach(elem => {
        const widthClass = Array.from(elem.classList).find(c => c.includes('w-'));
        if (widthClass) {
            const widthValue = widthClass.split('-')[1];
            elem.style.width = widthValue ? widthValue : 'auto';
        }
    });
}
applyWidth();
// Apply Height
export function applyHeight() {
    const elements = document.querySelectorAll('[class*="h-"]');
    elements.forEach(elem => {
        const heightClass = Array.from(elem.classList).find(c => c.includes('h-'));
        if (heightClass) {
            const heightValue = heightClass.split('-')[1];
            elem.style.height = heightValue ? heightValue : 'auto';
        }
    });
}
applyHeight();
// Apply Text Align
export function applyTextAlign() {
    const elements = document.querySelectorAll('[class*="ta-"]');
    elements.forEach(elem => {
        const textAlignClass = Array.from(elem.classList).find(c => c.includes('ta-'));
        if (textAlignClass) {
            const alignValue = textAlignClass.split('-')[1] || 'left';
            elem.style.textAlign = alignValue;
        }
    });
}
applyTextAlign();
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
applyFlex();
//Apply flex direction
export function applyFlexDirection(){
    const elements = document.querySelectorAll('[class*="flex-d-"]');
    elements.forEach(elem => {
        const flexDirClass = Array.from(elem.classList).find(c => c.includes('flex-d-'));
        if(flexDirClass){
            const dirVal = flexDirClass.split('-')[2] || 'row';
            elem.style.flexDirection = dirVal;
        }
    });
}
applyFlexDirection();
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
applyOverflow();
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
applyOpacity();
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
applyZIndex();
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
applyVisibility();
// Apply Box Shadow
export function applyBoxShadow() {
    const elements = document.querySelectorAll('[class*="shadow-"]');
    elements.forEach(elem => {
        const shadowClass = Array.from(elem.classList).find(c => c.includes('shadow-'));
        if (shadowClass) {
            const shadowValue = shadowClass.split('-').slice(1,5) || 'none';
            elem.style.boxShadow = shadowValue === 'none' ? 'none' : `${shadowValue[0]}px ${shadowValue[1]}px ${shadowValue[2]}px ${shadowValue[3]}`;
        }
    });
}
applyBoxShadow();
// Apply Transition
export function applyTransition() {
    const elements = document.querySelectorAll('[class*="transition-"]');
    elements.forEach(elem => {
        const transitionClass = Array.from(elem.classList).find(c => c.includes('transition-'));
        if (transitionClass) {
            const transitionParts = transitionClass.split('-').slice(1, 4);
            
            const property = transitionParts[0] || 'all'; 
            const duration = transitionParts[1] || '0.5'; 
            const timingFunction = transitionParts[2] || 'ease';
            
            elem.style.transition = `${property} ${duration}s ${timingFunction}`;
        }
    });
}
applyTransition();
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
applyCursor();
export function applyAlignContent(){
    const elements = document.querySelectorAll('[class*="ac-"]');
    elements.forEach(elem => {
        const alignContentClass = Array.from(elem.classList).find(c => c.includes('ac-'));
        // console.log(alignContentClass);
        if (alignContentClass) {
            const parts = alignContentClass.split('-');
            
            const alignContentVal = parts.slice(1).join('-');
            console.log(alignContentVal);
            elem.style.alignContent = alignContentVal || "normal";
        }
    });
}
applyAlignContent();
export function applyJustifyContent(){
    const elements = document.querySelectorAll('[class*="jc-"]');
    elements.forEach(elem => {
        const justifyContentClass = Array.from(elem.classList).find(c => c.includes('jc-'));
        if (justifyContentClass) {
            const parts = justifyContentClass.split('-');
            
            const justifyContentVal = parts.slice(1).join('-');
            console.log(justifyContentVal);
            elem.style.justifyContent = justifyContentVal || "flex-start";
        }
    });
}
applyJustifyContent();
export function applyAlignItems(){
    const elements = document.querySelectorAll('[class*="ai-"]');
    elements.forEach(elem => {
        const alignItemClass = Array.from(elem.classList).find(c => c.includes('ai-'));
        if (alignItemClass) {
            const parts = alignItemClass.split('-');
            
            const alignItemVal = parts.slice(1).join('-');
            console.log(alignItemVal);
            elem.style.alignItems = alignItemVal || "stretch";
        }
    });
}
applyAlignItems();
export function applyBorderRadius(){
    const elements = document.querySelectorAll('[class*="br-"]');
    elements.forEach(elem => {
        const borderRadClass = Array.from(elem.classList).find(c => c.includes('br-'));
        if (borderRadClass) {
            const parts = borderRadClass.split('-');
            
            const borderRad = parts.slice(1).join('-');
            console.log(borderRad);
            elem.style.borderRadius = borderRad || '0px';
        }
    });
}
applyBorderRadius();
export function applyTextDecoration(){
    const elements = document.querySelectorAll('[class*="td-"]');
    elements.forEach(elem => {
        const textDecClass = Array.from(elem.classList).find(c => c.includes('td-'));
        if (textDecClass) {
            const parts = textDecClass.split('-');
            
            const textDecVal = parts.slice(1).join('-');
            elem.style.textDecoration = textDecVal || 'underline';
        }
    });
}
applyTextDecoration();
export function applyListStyleType(){
    const elements = document.querySelectorAll('[class*="lst-"]');
    elements.forEach(elem => {
        const lstClass = Array.from(elem.classList).find(c => c.includes('lst-'));
        if (lstClass) {
            const typ = lstClass.split('-')[1];
            console.log(typ);
            elem.style.listStyleType = typ || 'circle';
        }
    });
}
applyListStyleType();
