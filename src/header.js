import { dropDown } from "./drop-down";

function createHeader(){
    const header = document.createElement('div');
    header.id = "header";

    const drop_down = document.createElement('div');
    drop_down.textContent = "drop-down";
    drop_down.addEventListener('click', dropDown);

    const mobile_menu = document.createElement('div');
    mobile_menu.textContent = "mobile menu";
    // mobile_menu.addEventListener('click', something);


    const image_slider = document.createElement('div');
    image_slider.textContent = "image_slider";
    // image_slider.addEventListener('click', something);

    header.appendChild(drop_down);
    header.appendChild(mobile_menu);
    header.appendChild(image_slider);

    return header;
}

function createBody(){
    const mainBody = document.createElement('div');
    mainBody.id = "main"

    return mainBody;
}

function createFooter(){
    const footer = document.createElement('div');
    footer.id = "footer";
    footer.textContent = "@kyleetaan ~theodinproject~"
    return footer;
}

function createInitial(){

    const content = document.getElementById('content');
    content.appendChild(createHeader());
    content.appendChild(createBody());
    content.appendChild(createFooter());
    //testing
    dropDown();
}

export {createInitial}