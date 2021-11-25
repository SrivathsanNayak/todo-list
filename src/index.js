import { createUI } from "./interface/createUI.js";
import { createFooter } from "./interface/createFooter.js";

const interfaceDiv = createUI();
const footer = createFooter();

document.body.append(interfaceDiv, footer);
