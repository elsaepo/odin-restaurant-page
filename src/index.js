import { content, createHeader, createHome, createMain } from "./home.js";
import { createMenu } from "./menu.js";
import { createContact } from "./contact.js";
import "./style.css";

content.appendChild(createHeader());
const bodyContainer = createMain();
content.appendChild(bodyContainer);

createHome(bodyContainer);

const linkButtons = document.querySelectorAll(".nav-link");
linkButtons.forEach(button => button.addEventListener("mousedown", function(event){
        // Delete the DOM in bodyContainer
        while(bodyContainer.lastChild){ bodyContainer.lastChild.remove() };

        // Draw the new DOM in bodyContainer based on textContent of event.target
        switch(event.target.textContent){
            case "home":
                createHome(bodyContainer);
                break;
            case "menu":
                createMenu(bodyContainer);
                break;
            case "contact":
                createContact(bodyContainer);
                break;
            default:
                return;
        }
}))