export function applyPricingSection1() {
  const pricingClasses = document.querySelectorAll(".kalpanix-pr1");

  // Helper function to apply style conditionally
  const setStyleIfNotPresent = (element, property, value) => {
      if (!element.style[property]) {
          element.style[property] = value;
      }
  };

  pricingClasses.forEach((pricingClass) => {
      // Apply styles to the pricing section container
      setStyleIfNotPresent(pricingClass, 'display', 'flex');
      setStyleIfNotPresent(pricingClass, 'flexDirection', 'column');
      setStyleIfNotPresent(pricingClass, 'height', '80vh');
      setStyleIfNotPresent(pricingClass, 'width', '50vh');
      setStyleIfNotPresent(pricingClass, 'border', '1px solid green');
      setStyleIfNotPresent(pricingClass, 'borderRadius', '1rem');
      setStyleIfNotPresent(pricingClass, 'fontFamily', 'sans-serif');
      setStyleIfNotPresent(pricingClass, 'padding', '1.5rem');
      setStyleIfNotPresent(pricingClass, 'fontSize', '0.9rem');
      Array.from(pricingClass.children).forEach((child) => {
          if (child.tagName === "H3") {
          }
          if (child.tagName === "A") {
              // Apply styles to anchor elements
              setStyleIfNotPresent(child, 'width', '100%');
              setStyleIfNotPresent(child, 'textDecoration', 'none');
              setStyleIfNotPresent(child, 'backgroundColor', '#2731f5');
              setStyleIfNotPresent(child, 'alignSelf', 'center');
              setStyleIfNotPresent(child, 'borderRadius', '0.3rem');
              setStyleIfNotPresent(child, 'textAlign', 'center');
              setStyleIfNotPresent(child, 'color', '#ffffff');
          }
      });

      // Apply styles to unordered lists and their list items
      Array.from(pricingClass.querySelectorAll("ul")).forEach((ul) => {
          Array.from(ul.children).forEach((li) => {
              setStyleIfNotPresent(li, 'marginBottom', '1rem');
              const liFirstChild = Array.from(li.children)[0];
              if (liFirstChild) {
                  setStyleIfNotPresent(liFirstChild, 'color', 'green');
              }
          });
      });
  });
}

applyPricingSection1();
