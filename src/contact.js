const createContact = (parent) => {
    const mainHeader = document.createElement("h2");
    mainHeader.textContent = "Kontact the krumper!";
    const mainP = document.createElement("p");
    mainP.textContent = "Or, don't.";
    
    parent.appendChild(mainHeader);
    parent.appendChild(mainP);
    return parent;
};

export { createContact };