//import { renderCounter } from "../components/counter/renderCounter.js";
export const data = { 
    clientsCount: 0,
};

let callback = function(){};

setInterval(function(){
    data.clientsCount += 1;
    callback();
}, 4000);

export function setCallback(newCallback){
    callback = newCallback;
}

export function increase(){
    data.clientsCount++;
    callback();
}
export function decrease(){
    data.clientsCount--;
    callback();
}