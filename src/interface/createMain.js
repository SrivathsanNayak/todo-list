function createMain() {
    const main = document.createElement("div");
    main.classList.add('main-body');
    
    const sideBar = document.createElement("div");
    const todayDiv = document.createElement("div");
    sideBar.id = "side-bar";
    todayDiv.id = "today-div";

    const collapseSideBar = document.createElement("span");
    collapseSideBar.textContent = "swap_horizontal_circle";
    collapseSideBar.classList.add('material-icons', 'collapse-side-bar');

    /*Event listener for collapse button*/
    collapseSideBar.addEventListener('click', () => {
        if (sideBar.classList.contains('show-side-bar')) {
            sideBar.classList.remove('show-side-bar');
        } else {
            sideBar.classList.add('show-side-bar');
        }
    });

    /*Add function for adding titles of days (upper half) to sidebar*/
    /*Add function for adding project titles (lower half) to sidebar*/
    /*Notes+Stats to sidebar*/

    /*Add function to render active day title*/
    /*Add function to render table-type layout*/
    /*Add function to populate table with contents*/

    /*date-fns installed, refer docs for usage: https://date-fns.org/docs/Getting-Started/*/

    // sideBar.textContent = "Hi";
    // todayDiv.textContent = "Hello";

    main.append(sideBar, collapseSideBar, todayDiv);

    return main;
}

export { createMain };