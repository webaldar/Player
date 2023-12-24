import { increase } from "../../../data/data.component.js";

export function IncrementButton(){
    const element = document.createElement('button');
    element.append(' + ');
    element.addEventListener('click', increase);
    return element;
}

function increment() {
    increase();
}