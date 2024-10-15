import { checkAndSetProp } from "../../checkAndSetProp.js";
export function applyPricingSection1() {
  const pricingClasses = document.querySelectorAll(".kalpanix-pr1");
  // const checkAndSetProp = (val, prop, elem) => {
  //   let cList = Array.from(elem.classList);
  //   console.log(cList);
  //   let cl;
  //   for(const c in cList){
  //     const p = cList[c].split("-")[0] + "-";
  //     if(classToCssProperty[p] === prop){
  //       cl = cList[c];
  //       console.log(cl)
  //       break;
  //     }
  //   }
  //   for(const c in cList){
  //       if(!cl)
  //       {
  //         elem.style[prop] = val;
  //         break;
  //       }
  //   }
  //   if (cList.length === 0) {
  //     elem.style[prop] = val;
  //   }
  // };

  pricingClasses.forEach((pricingClass) => {
    // Apply color
    // checkAndSetProp("yellow", "color", pricingClass);

    // Apply display properties
    // checkAndSetProp("border-box", "boxSizing", pricingClass)
    checkAndSetProp("flex", "display", pricingClass);
    checkAndSetProp("flex-start", "justifyContent", pricingClass)
    checkAndSetProp("column", "flexDirection", pricingClass);
    checkAndSetProp("#6b6a69", "color", pricingClass)
    // Apply height and width
    checkAndSetProp("0px", "letterSpacing", pricingClass);
    checkAndSetProp("75vh", "height", pricingClass);
    checkAndSetProp("50vh", "width", pricingClass);
    checkAndSetProp("15px", "marginRight", pricingClass);
    checkAndSetProp("15px", "marginLeft", pricingClass);
    // Apply border and background color
    checkAndSetProp("1px solid #c9c9c7", "border", pricingClass);
    // checkAndSetProp("green", "backgroundColor", pricingClass);

    // Apply border-radius, font-family, padding, and font-size
    checkAndSetProp("1rem", "borderRadius", pricingClass);
    checkAndSetProp("sans-serif", "fontFamily", pricingClass);
    checkAndSetProp("1.5rem", "padding", pricingClass);
    checkAndSetProp("0.9rem", "fontSize", pricingClass);

    // Handle children elements
    Array.from(pricingClass.children).forEach((child) => {
      checkAndSetProp("0", "left", child)
        if (child.tagName === "H3") {
            // Set additional H3 properties if needed
            checkAndSetProp("#000000", "color", child);
            checkAndSetProp("1.3rem", "fontSize", child);
        }
        if (child.tagName === "A") {
            checkAndSetProp("100%", "width", child);
            checkAndSetProp("none", "textDecoration", child);
            checkAndSetProp("#6333f2", "backgroundColor", child);
            checkAndSetProp("center", "alignSelf", child);
            checkAndSetProp("0.3rem", "borderRadius", child);
            checkAndSetProp("center", "textAlign", child);
            checkAndSetProp("#ffffff", "color", child);
            checkAndSetProp('1rem', "paddingTop", child);
            checkAndSetProp('1rem', "paddingBottom", child);
            checkAndSetProp('bold', 'fontWeight', child);
            // checkAndSetProp('inline-flex', "display", child)
        }
        if(child.tagName === 'BUTTON'){
          checkAndSetProp('red', 'color', child)
          // child.style.color = 'red';
        }
        if(child.tagName === "P" && child.children.length > 0 && child.children[0].tagName === "SPAN"){
          console.log('ok')
          checkAndSetProp("3rem", "fontSize", child.children[0])
          checkAndSetProp("#000000", "color", child.children[0]);
          checkAndSetProp("bold", "fontWeight", child.children[0]);
          checkAndSetProp("-3px", "letterSpacing", child.children[0]);
        }
        if(child.tagName === "UL"){
          checkAndSetProp("none", "listStyleType", child);
          checkAndSetProp("0", "paddingLeft", child);
        }
    });

    // Handle <ul> and <li> elements inside pricingClass
    Array.from(pricingClass.querySelectorAll("ul")).forEach((ul) => {
        Array.from(ul.children).forEach((li) => {
            checkAndSetProp("1rem", "marginBottom", li);
            checkAndSetProp("green", "color", Array.from(li.children)[0]);
        });
    });
});

}

applyPricingSection1();
