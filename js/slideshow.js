'use strict';

const slide = document.getElementById("slide");

let i = 0;
let images = [];
let time = 1000;

images[0] = "../assets/images/1.png";
images[1] = "../assets/images/2.png";
images[2] = "../assets/images/3.png";
images[3] = "../assets/images/4.png";

const changeImage = () => {
    
    slide.src = images[i];

    if(i < images.length -1) {
        i++;
    }else {
        i = 0;
    };

    setTimeout("changeImage()", time);
};

window.addEventListener("load", changeImage);




