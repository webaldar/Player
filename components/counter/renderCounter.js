
import { Header } from "./header/header.js";
import { Count } from "./value/counter.js";
import { IncrementButton } from "./buttons/increaseButton.js";
import { DecrementButton } from "./buttons/decreaseButton.js";


export function renderCounter(){
    document.body.innerHTML = '';
    document.body.append(Header());
    document.body.append(Count());
    document.body.append(IncrementButton());
    document.body.append(DecrementButton());
}