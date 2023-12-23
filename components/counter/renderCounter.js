
import { Header } from "./header/header.js";
import { Count } from "./value/counter.js";
import { Button } from "./button/button.js";


export function renderCounter(){
    document.body.innerHTML = '';
    document.body.append(Header());
    document.body.append(Count());
    document.body.append(Button());

}