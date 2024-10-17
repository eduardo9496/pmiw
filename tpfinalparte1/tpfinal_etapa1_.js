//variables de imagenes//
let imagF1= [];
let imagF2= [];
let imagF3= [];
let imagF4= [];
let tex1;
let tex2;
let tex3;
let tex4;
let portada;
let credito;
let btnPlay;
let btnCredito;
let btnAtras;
let bntContinuar;
let btnFin;
let btnProja;
let btnPamarilla;
let btnDejar;
let btnTomar;
let btnPilVerde;
let btnPilRoja;
let estoyPortada;
let pantActual;
let pantF2;
let pantF3;
let pantF4;
// //

//variables booleanas para los botones//
let precionoPlay;
let precionoCredito;
let precionoAtras;
let precionoPuertaAmarilla;
let precionoTomar;
let precionoPildoraRoja;
let precionoReiniciar1;
let precionoReiniciar2;
let precionoReiniciar3;
let precionoReiniciar4;
// //

function setup() {
  createCanvas(640, 480);
  precionoPlay = false;
  precionoCredito= false;
  precionoAtras= false;
  estoyPortada=true;

  precionoPuertaAmarilla=false;
  precionoTomar=false;
  precionoPildoraRoja=false;
}

function preload() {

  tex1= loadStrings("data/textos1.txt");

  tex2= loadStrings("data/textos2.txt");

  tex3= loadStrings("data/textos3.txt");

  tex3= loadStrings("data/textos4.txt");


  for (let i=0; i<8; i+=1) {
    imagF1[i]= loadImage("data/Frame"+i+".png");
  }
  for (let k=0; k<3; k+=1) {
    imagF2[k]= loadImage("data/Fram"+k+".png");
  }
  for (let j=0; j<2; j+=1) {
    imagF3[j]= loadImage("data/Fra"+j+".png");
  }
  for (let p=0; p<3; p+=1) {
    imagF4[p]= loadImage("data/F"+p+".png");
  }

  portada= loadImage("data/portada.png");
  credito= loadImage("data/creditos.png");
  btnPlay= loadImage("data/btnPlay.png");
  btnCredito= loadImage("data/btnCreditos.png");
  btnAtras= loadImage("data/btnAtras.png");
  btnContinuar= loadImage("data/btnContinuar.png");
  btnFin= loadImage("data/btnFin.png");
  btnProja= loadImage("data/btnProja.png");
  btnPamarilla= loadImage("data/btnPamarillo.png");
  btnDejar= loadImage("data/btnDejar.png");
  btnTomar= loadImage("data/btnTomar.png");
  btnPilVerde= loadImage("data/btnPilVerde.png");
  btnPilRoja= loadImage("data/btnPilRoja.png");
}

function draw() {
  background(0);
  mostrarPortada();
  if (precionoCredito === true) {
    mostrarCredito();
  }
  if (precionoPlay === true) {
    mostrarAventura(pantActual, pantF2, pantF3, pantF4, precionoPuertaAmarilla, precionoTomar, precionoPildoraRoja);
  }  

  if(precionoReiniciar1){
    pantActual=0;
    estoyPortada=true;
    precionoPlay=false;
    precionoReiniciar1=false;
  }

  if(precionoReiniciar2){
    pantF2=0; 
    pantActual=0;   
    estoyPortada=true;
    precionoPlay=false;
    precionoReiniciar2=false;
  }

  if(precionoReiniciar3){
    pantF3=0;
    pantActual=0; 
    estoyPortada=true;
    precionoPlay=false;
    precionoReiniciar3=false;
  }

  if(precionoReiniciar4){
    pantF4=0;
    pantActual=0;
    estoyPortada=true;
    precionoPlay=false;
    precionoReiniciar4=false;
  }
  

}

function mousePressed() {
  //sistema de portada//
  if (estoyPortada===true) {
    if (dist(mouseX, mouseY, 430, 410)<40) {
      precionoPlay=true;
      pantActual= 0;
      estoyPortada=false;
      PrecionoCreditos=false;
    }
    if (dist(mouseX, mouseY, 130, 410)<40) {
      precionoCredito=true;
      estoyPortada=false;
      PrecionoStar=false
    }
  }
  if (estoyPortada===false) {
    if (precionoCredito === true && dist(mouseX, mouseY, 290, 410)< 40) {
      precionoCredito=false;
      estoyPortada=true;
    }
  }

  //sistema de navegacion de la aventura/
  if (pantActual<7 && conflicto1(pantActual)===false && conflicto2(pantActual)===false && conflicto3(pantActual)===false && dist(mouseX, mouseY, 300, 420)< 40) {
    pantActual++;
  } 
  
  if(conflicto1(pantActual) && dist(mouseX, mouseY, 160,420)< 40 ){
    precionoPuertaAmarilla=true;
    pantF2=0;
  }else{
    if(conflicto1(pantActual) && dist(mouseX, mouseY, 440,420)< 40){
      pantActual++;
    }
  }
  if(conflicto2(pantActual) && dist(mouseX, mouseY, 160,420)< 40 ){
    precionoTomar=true;
    pantF3=0;
  }else{
    if(conflicto2(pantActual) && dist(mouseX, mouseY, 440,420)< 40){
      pantActual++;
    }
  }
  if(conflicto3(pantActual) && dist(mouseX, mouseY, 160,420)< 40 ){
    precionoPildoraRoja=true;
    pantF4=0;
  }else{
    if(conflicto3(pantActual) && dist(mouseX, mouseY, 440,420)< 40){
      pantActual++;
    }
  }

  if(pantF2<3 && precionoPuertaAmarilla && dist(mouseX, mouseY, 300, 420)< 40){
    pantF2++; 
  }
  if(pantF3<2 && precionoTomar && dist(mouseX, mouseY, 300, 420)< 40){
    pantF3++; 
  }
  if(pantF4<3 && precionoPildoraRoja && dist(mouseX, mouseY, 300, 420)< 40){
    pantF4++; 
  }

  if(pantActual===7 &&  dist(mouseX, mouseY, 300, 420)< 40){
    precionoReiniciar1=true;
  }

  if(pantF2===3 &&  dist(mouseX, mouseY, 300, 420)< 40){
    precionoReiniciar2=true;
    precionoPuertaAmarilla=false;
  }

  if(pantF3===2 &&  dist(mouseX, mouseY, 300, 420)< 40){
    precionoReiniciar3=true;
    precionoTomar=false;
  }

  if(pantF4===3 &&  dist(mouseX, mouseY, 300, 420)< 40){
    precionoReiniciar4=true;
    precionoPildoraRoja=false
  }
}
