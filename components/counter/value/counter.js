import { data } from "../../../data/data.component.js";

export function Count(){
    const element = document.createElement('div');
    element.append(data.clientsCount);
    return element;
}