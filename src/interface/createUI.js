import { createNavBar } from "./createHeader.js";

function createUI() {
    const contentDiv = document.getElementById("content");
    const header = createNavBar();

    contentDiv.append(header);
    
    return contentDiv;
}

export { createUI };