import { renderCounter} from "./components/counter/renderCounter.js"
import { setCallback } from "./data/data.component.js";

renderCounter();

setCallback(renderCounter);