function createNavBar() {
    const navBar = document.createElement("nav");
    const logoTitle = document.createElement("div");
    const searchDiv = document.createElement("div");
    const modeSwitch = document.createElement("div");

    const logo = document.createElement("span");
    logo.textContent = "playlist_add_check_circle";
    logo.classList.add('material-icons', 'logo');
    
    const title = document.createElement("h1");
    title.textContent = "ToDoList";
    title.classList.add('title');

    logoTitle.append(logo, title);
    navBar.append(logoTitle, searchDiv, modeSwitch);

    return navBar;
}

export { createNavBar };