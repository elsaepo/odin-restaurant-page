import crumpet02 from "./crumpet02.jpg";

const createMenu = (parent) => {
    const mainHeader = document.createElement("h2");
    mainHeader.textContent = "These are the various krumpets I can make! You can eat any of these krumpets, and I can make them for you. This is the service I provide at kindon's krumpets.";
    const mainImg = document.createElement("img");
    mainImg.src = crumpet02;
    mainImg.setAttribute("alt", "another delicious krumpet");
    const mainP = document.createElement("p");
    mainP.textContent = "I hope you liked our krumpy menu. Wow!";
    
    parent.appendChild(mainHeader);
    parent.appendChild(mainImg);
    parent.appendChild(mainP);
    return parent;
};

export { createMenu };