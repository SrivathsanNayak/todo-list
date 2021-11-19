const header = document.createElement("header");
const navBar = document.createElement("nav");

const logoTitle = document.createElement("div");
const searchDiv = document.createElement("div");
const modeSwitch = document.createElement("div");

navBar.append(logoTitle, searchDiv, modeSwitch);
header.append(navBar);

export { header };