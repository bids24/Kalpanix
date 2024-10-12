import { classToCssProperty } from "../../vocab.js";
export function applyPricingSection1() {
  const pricingClasses = document.querySelectorAll(".kalpanix-pr1");
  const checkAndSetProp = (val, prop, elem) => {
    let cList = Array.from(elem.classList);
    console.log(cList);
    let cl;
    for(const c in cList){
      const p = cList[c].split("-")[0] + "-";
      if(classToCssProperty[p] === prop){
        cl = cList[c];
        console.log(cl)
        break;
      }
    }
    for(const c in cList){
        if(!cl)
        {
          elem.style[prop] = val;
          break;
        }
    }
    if (cList.length === 0) {
      elem.style[prop] = val;
    }
  };

  pricingClasses.forEach((pricingClass) => {
    // Apply color
    checkAndSetProp("yellow", "color", pricingClass);

    // Apply display properties
    checkAndSetProp("flex", "display", pricingClass);
    checkAndSetProp("column", "flexDirection", pricingClass);

    // Apply height and width
    checkAndSetProp("70vh", "height", pricingClass);
    checkAndSetProp("50vh", "width", pricingClass);

    // Apply border and background color
    checkAndSetProp("1px solid green", "border", pricingClass);
    checkAndSetProp("green", "backgroundColor", pricingClass);

    // Apply border-radius, font-family, padding, and font-size
    checkAndSetProp("1rem", "borderRadius", pricingClass);
    checkAndSetProp("sans-serif", "fontFamily", pricingClass);
    checkAndSetProp("1.5rem", "padding", pricingClass);
    checkAndSetProp("0.9rem", "fontSize", pricingClass);

    // Handle children elements
    Array.from(pricingClass.children).forEach((child) => {
        if (child.tagName === "H3") {
            // Set additional H3 properties if needed
        }
        if (child.tagName === "A") {
            checkAndSetProp("100%", "width", child);
            checkAndSetProp("none", "textDecoration", child);
            checkAndSetProp("#2731f5", "backgroundColor", child);
            checkAndSetProp("center", "alignSelf", child);
            checkAndSetProp("0.3rem", "borderRadius", child);
            checkAndSetProp("center", "textAlign", child);
            checkAndSetProp("#ffffff", "color", child);
        }
        if(child.tagName === 'BUTTON'){
          checkAndSetProp('red', 'color', child)
          // child.style.color = 'red';
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
