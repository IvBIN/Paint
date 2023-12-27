"use strict";
const canvas = document.getElementById("canvas");
const color = document.getElementById("color");
const brush = document.getElementById("brush");

const ctx = canvas.getContext('2d');
let myColor = "grey";
let myBrush = 5;

color.addEventListener('blur', () => {
    myColor = color.value;
    console.log(myColor);
});

brush.addEventListener('blur', () => {
    myBrush = brush.value;
    console.log(myBrush);
});

canvas.onmousedown = function (event) {
    canvas.onmousemove = function (event){
        let x = event.offsetX;
        let y = event.offsetY;
        ctx.fillRect(x, y, myBrush, myBrush);
        ctx.fillStyle = myColor;
        ctx.fill();
    };
    canvas.onmouseup = function (){
        canvas.onmousemove =null;
    };
};