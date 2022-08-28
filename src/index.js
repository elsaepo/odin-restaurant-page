import { content, createHeader, createHome, createMain } from "./home.js";
// import { createMenu } from "./menu.js";
// import { createContact } from "./contact.js";
import "./style.css";

content.appendChild(createHeader());
const bodyContainer = createMain();
content.appendChild(bodyContainer);

createHome(bodyContainer);

// need a placeholder bodyContainer
// createHome(), createMenu(), createContact();