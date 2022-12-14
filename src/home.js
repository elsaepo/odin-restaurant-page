import crumpet01 from "./crumpet01.png"

const content = document.querySelector("#content");

const createHeader = () => {
    const header = document.createElement("section");
    header.id = "header";
    const titleDiv = document.createElement("div");
    const titleHeader = document.createElement("h1");
    titleHeader.textContent = "kindon's krumpets!";
    titleDiv.appendChild(titleHeader);
    header.appendChild(titleDiv);
    const headerNav = document.createElement("nav");
    const headerUl = document.createElement("ul");
    const headerLi1 = createListItem("", "home");
    const headerLi2 = createListItem("", "menu");
    const headerLi3 = createListItem("", "contact");
    headerUl.appendChild(headerLi1);
    headerUl.appendChild(headerLi2);
    headerUl.appendChild(headerLi3);
    headerNav.appendChild(headerUl);
    header.appendChild(headerNav);
    return header;
};

const createListItem = function(href, text){
    const listItem = document.createElement("li");
    const listLink = document.createElement("a");
    //listLink.setAttribute("href", [href]);
    listLink.classList.add("nav-link");
    const listText = document.createElement("p");
    listText.textContent = text;
    listLink.appendChild(listText);
    listItem.appendChild(listLink);
    return listItem;
};

const createHome = (parent) => {
    const mainHeader = document.createElement("h2");
    mainHeader.textContent = "The krumpiest krumpets in krumpville!";
    const mainImg = document.createElement("img");
    mainImg.src = crumpet01;
    mainImg.setAttribute("alt", "a delicious krumpet");
    const mainP = document.createElement("p");
    mainP.textContent = "Hi, I'm Kindon! And I make krumpets. They're so krumpy! My favourite part of krumpets is when they krump :)";
    
    parent.appendChild(mainHeader);
    parent.appendChild(mainImg);
    parent.appendChild(mainP);
    return parent;
};

const createMain = () => {
    const main = document.createElement("main");
    main.classList.add("main-section");
    return main;
}

export { content, createHeader, createMain, createHome };