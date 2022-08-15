'use strict';

//For the Contact---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const lis = document.querySelector("ul.nav__list");
const li = lis.lastElementChild;
const contact = document.querySelector(".contact");

li.addEventListener("click", (li) => {
        contact.classList.toggle("show"); 
});