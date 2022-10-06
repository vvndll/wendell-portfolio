'use strict';

const slide = document.querySelector("div.preview__box img");

let counter = 0;
let images = [
    "./assets/images/1.jpg",
    "./assets/images/2.jpg",
    "./assets/images/3.jpg",
    "./assets/images/4.jpg",
    "./assets/images/5.jpg",
    "./assets/images/6.png",
    "./assets/images/7.png",
    "./assets/images/8.png",
    "./assets/images/9.png"
];

let time = 1000;

const changeImage = () => {
    
    slide.src = images[counter];

    if(counter < images.length -1) {
        counter++;
    }else {
        counter = 0;
    };

    setTimeout("changeImage()", time);
};

window.addEventListener("load", changeImage);




