
import { Header } from "./header/header.js";
import { Count } from "./value/counter.js";
import { Button } from "./button/button.js";
import { data } from "../data/data.component.js";

export function renderCounter(){
    document.body.append(Header());
    document.body.append(Count(data.clientsCount));
    document.body.append(Button());

}