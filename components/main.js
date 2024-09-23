// import { applyBackgroundColors } from './normal/bg.js';
// import { applyColors } from './normal/colour.js';
// import { applyFontSizeAndWeight } from './normal/applyFontSizeAndWeight.js';
// export function allFunc(){
//     applyBackgroundColors();
//     applyColors();
//     applyFontSizeAndWeight();
// }
import {
    applyColors,
    applyFontSize,
    applyMargin,
    applyPadding,
    applyBorder,
    applyBackgrounds,
    applyDisplay,
    applyPosition,
    applyWidth,
    applyHeight,
    applyTextAlign,
    applyFlex,
    applyOverflow,
    applyOpacity,
    applyZIndex,
    applyVisibility,
    applyBoxShadow,
    applyTransition,
    applyCursor
} from './normal/normal.js';

export function allFunc(){
    applyColors();
    applyFontSize();
    applyMargin();
    // Call others as required
};