import { classToCssProperty } from "../../vocab.js";
export function applyPricingSection1() {
  const pricingClasses = document.querySelectorAll(".kalpanix-pr1");
  // console.log(pricingClasses);
  const checkAndSetProp = (val, prop, elem) => {
    // console.log(elem,prop,val)
    const cList = Array.from(elem.classList).filter(c => c !== "kalpanix-pr1");
    console.log(cList);
    cList.forEach((c) => {
        const p = c.split("-")[0] + "-";
        console.log(p);
        if (Object.keys(classToCssProperty).includes(p)) {
          console.log(`${p} exist in dic`);
          console.log(Object.keys(classToCssProperty).includes(p));
          console.log(classToCssProperty[p] === prop);
        } else console.log(`${p} doesn't exist in dic`);
        if (
          !(
            Object.keys(classToCssProperty).includes(p) &&
            classToCssProperty[p] === prop
          )
        ) {
        //   console.log('apply')
          console.log(classToCssProperty[p]);
          elem.style[prop] = val;
        }
    });
    if (cList.length === 0) {
      elem.style[prop] = val;
    }
  };
  pricingClasses.forEach((pricingClass) => {
    //    pricingClass.classList.forEach(c => console.log(typeof(c)));
    // pricingClass.style.backgroundColor = 'aqua';
    // checkAndSetProp("red", "color", pricingClass);
    pricingClass.style.display = "flex";
    pricingClass.style.flexDirection = "column";
    pricingClass.style.height = "80vh";
    pricingClass.style.width = "50vh";
    checkAndSetProp('1px solid green', 'border', pricingClass);
    // pricingClass.style.color = "#646566";
    pricingClass.style.borderRadius = "1rem";
    pricingClass.style.fontFamily = "sans-serif";
    pricingClass.style.padding = "1.5rem";
    pricingClass.style.fontSize = "0.9rem";
    Array.from(pricingClass.children).forEach((child) => {
      if (child.tagName === "H3") {
        // child.style.color = "#000000";
        // child.style.fontSize = '1.5rem';
        // checkAndSetProp('1.5rem', 'fontSize', child);
      }
      if (child.tagName === "A") {
        child.style.width = "100%";
        child.style.textDecoration = "none";
        child.style.backgroundColor = "#2731f5";
        child.style.alignSelf = "center";
        child.style.borderRadius = "0.3rem";
        // child.style.padding = "0.6rem";
        child.style.textAlign = "center";
        child.style.color = "#ffffff";
      }
    });
    Array.from(pricingClass.querySelectorAll("ul")).forEach((ul) => {
      Array.from(ul.children).forEach((li) => {
        li.style.marginBottom = "1rem";
        Array.from(li.children)[0].style.color = "green";
      });
    });
  });
}
applyPricingSection1();
