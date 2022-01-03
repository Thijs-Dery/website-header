"use strict";
import context from "./scripts/context.js";
import * as Utils from "./scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;


let frameCount = 0;
let size = 100;
let x = -100;
let y = -100;   

//setting up font
setup();

function setup() {
    context.textAlign = "center";
    context.fillStyle = "white";
    context.font = "bold 48pt Verdana";
}

//move when mouse moves
window.onmousemove = update;

/**
 * 
 * @param {MouseEvent} e 
 */

function update(e) {
//make variables of mouse x and y
    let q = e.pageX-500;
    let g = e.pageY-3000;
//make rectangles
    for(let i = 0; i< 50000; i++){
        switch(i%4){
            //create random white rectangles
            case 1:
                context.fillStyle = "white"
                context.fillRect(q / 2 + Math.floor(Math.random()*8000), g / 2 + Math.floor(Math.random() * 8000), 20, 1);
            break; 
            //create a blue refresh screen with distortion/noise in it
            case 2:
                context.fillStyle = "blue"
                context.fillRect(q + 250 + Math.floor(Math.random()*500), g + Math.floor(Math.random() * 8000), 10, 150);
            break;
        }
    }
    
    //restart animation
    if(frameCount%200 == 0){
        x = -100;
        y = -100;
        size = 100;
    }
    frameCount++;
    //draw circles and make them move
    x += 10;
    y += 1; 
    let a = x + 2 - 2000;
    let b = y + 2 - 100;
    for(let i = 0; i< 2000; i++){
        context.strokeStyle = "black"
        context.lineWidth = 2;
        Utils.strokeCircle(a, b, size);
        a += 50;
        b += 5;
    }
    // write my name
    context.fillStyle = "white";
    context.fillText("Thijs Dery", width / 2, height / 2 + 24);
    context.fillStyle = "lightgrey";
    context.strokeText("Thijs Dery", width / 2, height / 2 + 24);
}