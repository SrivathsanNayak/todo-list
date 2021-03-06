function createNavBar() {
    const navBar = document.createElement("nav");
    const logoTitle = document.createElement("div");
    const searchDiv = document.createElement("div");
    const modeSwitch = document.createElement("div");

    /*Logo and title*/
    const logo = document.createElement("span");
    logo.textContent = "playlist_add_check_circle";
    logo.classList.add('material-icons', 'logo');
    const title = document.createElement("h1");
    title.textContent = "Todo-List";
    title.classList.add('title');
    logoTitle.classList.add('logo-title');
    logoTitle.append(logo, title);

    /*Search field*/
    const searchInput = document.createElement("input");
    searchInput.placeholder = "Search..";
    const searchButton = document.createElement("button");
    const searchIcon = document.createElement("span");
    searchIcon.textContent = "search";
    searchIcon.classList.add('material-icons', 'search');
    searchButton.classList.add('search-button');
    searchButton.append(searchIcon);
    searchDiv.append(searchInput, searchButton);

    /*Toggle mode*/
    const mode = document.createElement("span");
    mode.textContent = "dark_mode";
    mode.classList.add('material-icons', 'mode');

    /*Event listener for toggle mode*/
    mode.addEventListener("click", () => {
        if (mode.textContent === "dark_mode") {
            mode.textContent = "light_mode";
        } else if (mode.textContent === "light_mode") {
            mode.textContent = "dark_mode";
        }
    });
    modeSwitch.append(mode);

    navBar.append(logoTitle, searchDiv, modeSwitch);

    return navBar;
}

export { createNavBar };