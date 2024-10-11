export function applyPricingSection1() {
  const pricingClasses = document.querySelectorAll(".kalpanix-pr1");
  // console.log(pricingClasses);
  const checkExternalClass = (elem) => {
    const len = elem.classList.length;
    // console.log(len);
    // if(len === 0){
    //     return ;
    // }
    // else return 0;
    return len;
  };
  pricingClasses.forEach((pricingClass) => {
    pricingClass.style.display = "flex";
    pricingClass.style.flexDirection = "column";
    pricingClass.style.height = "80vh";
    pricingClass.style.width = "50vh";
    pricingClass.style.border = "1px solid #858482";
    pricingClass.style.color = "#646566";
    pricingClass.style.borderRadius = "1rem";
    pricingClass.style.fontFamily = "sans-serif";
    pricingClass.style.padding = "1.5rem";
    pricingClass.style.fontSize = '0.9rem';
    Array.from(pricingClass.children).forEach((child) => {
      if (child.tagName === "H3") {
        child.style.color = "#000000";
        child.style.fontSize = '1.5rem';
      }
      if (child.tagName === "A") {
        child.style.width = "100%";
        child.style.textDecoration = "none";
        child.style.backgroundColor = "#2731f5";
        child.style.alignSelf = "center";
        child.style.borderRadius = "0.3rem";
        child.style.padding = "0.6rem";
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
