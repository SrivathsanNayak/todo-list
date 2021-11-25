import { createNavBar } from "./createHeader.js";
import { createMain } from "./createMain.js";

function createUI() {
    const contentDiv = document.getElementById("content");
    const header = createNavBar();
    const main = createMain();

    contentDiv.append(header, main);
    
    return contentDiv;
}

export { createUI };