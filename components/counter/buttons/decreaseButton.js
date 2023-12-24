import { decrease } from "../../../data/data.component.js";
export function DecrementButton(){
    const element = document.createElement('button');
    element.append(' - ');
    element.onclick = decrease; 
    return element;
}

// function decrement(){
//     decrease();
// }