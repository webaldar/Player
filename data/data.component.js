import { renderCounter } from "../components/counter/renderCounter.js";

export const data = { 
    clientsCount: 0,
};

setInterval(function(){
    data.clientsCount += 1;
    renderCounter();
}, 1000);