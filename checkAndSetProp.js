import { classToCssProperty } from "./vocab.js";
export const checkAndSetProp = (val, prop, elem) => {
    let cList = Array.from(elem.classList);
    // console.log(cList);
    let cl;
    for(const c in cList){
      const p = cList[c].split("-")[0] + "-";
      if(classToCssProperty[p] === prop){
        cl = cList[c];
        // console.log(cl)
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