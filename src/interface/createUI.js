import { createNavBar } from "./createHeader.js";

function createUI() {
    const contentDiv = document.createElement("div");
    const header = createNavBar();

    contentDiv.append(header);
    
    return contentDiv;
}

export { createUI };

/*const header = document.createElement("header");
const navBar = document.createElement("nav");
const main = document.createElement("main");
const footer = document.createElement("footer");

const logoTitle = document.createElement("div");
const searchDiv = document.createElement("div");
const modeSwitch = document.createElement("div");

navBar.append(logoTitle, searchDiv, modeSwitch);

const help = document.createElement("p");
const githubLogo = document.createElement("div");
const privacyPolicy = document.createElement("div");

footer.append(help, githubLogo, privacyPolicy);*/