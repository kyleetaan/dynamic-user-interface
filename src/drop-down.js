function dropDown(){
    const main = document.getElementById("main");
    main.textContent = "";

    const menu = document.createElement('div');
    menu.id = "menu";
    
    const button = document.createElement('button');
    button.id = "drop";
    button.textContent = "drop!";
    button.addEventListener('click', show);
    
    const dropdownContent = document.createElement('div');
    dropdownContent.className = "dropdown-content";
    dropdownContent.id = "dropDown"
    // dropdownContent.style.display = "none";
    
    const link1 = document.createElement('a');
    link1.textContent = "Link1";
    link1.href = "#";
    
    const link2 = document.createElement('a');
    link2.textContent = "Link2";
    link2.href = "#";
    const link3 = document.createElement('a');
    link3.textContent = "Link3";
    link3.href = "#";

    
    dropdownContent.appendChild(link1);
    dropdownContent.appendChild(link2);
    dropdownContent.appendChild(link3);
    
    menu.appendChild(button);
    menu.appendChild(dropdownContent);

    main.appendChild(menu);
}


function show() {
    document.getElementById("dropDown").classList.toggle("show");
  }

export {dropDown}