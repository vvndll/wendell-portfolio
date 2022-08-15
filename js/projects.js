'use strict';

//For the Project List---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const projectItem = document.querySelectorAll(".project__item");
const after = document.getElementsByClassName("project__list:after");

projectItem.forEach(item => {
    const content = item.nextElementSibling;
    
    item.addEventListener("click", () => {
        item.classList.toggle("open");
        content.classList.toggle("show");
    });
});


