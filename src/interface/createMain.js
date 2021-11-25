function createMain() {
    const main = document.createElement("div");
    
    const sideBar = document.createElement("div");
    const todayDiv = document.createElement("div");
    sideBar.id = "side-bar";
    todayDiv.id = "today-div";

    // sideBar.textContent = "Hi";
    // todayDiv.textContent = "Hello";

    main.append(sideBar, todayDiv);

    return main;
}

export { createMain };