let ruido = document.getElementById("ruido");
let rctrl=ruido.getContext("2d");
let bajo=document.getElementById("bajo");
let bctrl=bajo.getContext("2d");
let alt=document.getElementById("alt");
let hctrl=alt.getContext("2d");

import { filtro } from "./filtrar.js";
import {ondatriang, ondarecta, ondacos } from "./ondasgen.js"
import { plot } from "./pintar.js";

var p={};
document.getElementById("gencos").addEventListener("click",() =>{
    console.log(" espare ya voy....");
    p= ondacos();
    plot(rctrl, p.x, p.ondaruido, 'rgb(200, 0, 0)');

}) ;

document.getElementById("genrect").addEventListener("click",() =>{
    console.log(" espare ya voy....");
    p= ondarecta();
    plot(rctrl, p.x, p.ondaruido, 'rgb(0, 200, 200)');

}) ;
document.getElementById("gentriang").addEventListener("click",() =>{
    console.log(" espare ya voy....");
    p= ondatriang();
    plot(rctrl, p.x, p.ondaruido, 'rgb(200, 0, 200)');

}) ;

document.getElementById("filtrar").addEventListener("click",() =>{
    let q= filtro(p.ondaruido)
    plot(bctrl, p.x, q.ondabajo);
    plot(hctrl, p.x, q.ondaht);
})


document.getElementById("ranfil").addEventListener("click",rangos);
document.getElementById("ranalt").addEventListener("click",rangos);
function rangos(){
    let rango = document.getElementById("ranfil")
    console.log("el valor del rango es :") 
    console.log(rango.value );
     let q= filtro(p.ondaruido)
     plot(bctrl, p.x, q.ondabajo);
     plot(hctrl, p.x, q.ondaht);

}
