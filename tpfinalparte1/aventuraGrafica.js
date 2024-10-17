function mostrarAventura(pantActual, pantF2, pantF3, pantF4, precionoPuertaAmarilla, precionoTomar, precionoPildoraRoja){
  mostrarFinal1(pantActual);
  
  if( conflicto1(pantActual) || conflicto2(pantActual) || conflicto3(pantActual)){
    mostrarDosBotones();
    if(precionoPuertaAmarilla){
      mostrarFinal2(pantF2);
    }
    if(precionoTomar){
      mostrarFinal3(pantF3);
    }
    if(precionoPildoraRoja){
      mostrarFinal4(pantF4);
    }
  }/*else{
    mostrarBoton();
  }*/

}

function mostrarBoton(){
  image(btnContinuar,260, 380, 80, 80);
}

function mostrarDosBotones(){
  image(btnContinuar,120,380,80,80);
  image(btnContinuar,400,380,80,80);
  if(conflicto1(pantActual) ){ 
    image(btnPamarilla,120,380,80,80);
    image(btnProja,400,380,80,80);
  }
  if(conflicto2(pantActual)){
    image(btnTomar,120,380,80,80);
    image(btnDejar,400,380,80,80);
  }  
  if(conflicto3(pantActual)){
    image(btnPilRoja,120,380,80,80);
    image(btnPilVerde,400,380,80,80);
  }  
}

function mostrarBotonFin(){
  image(btnFin,260, 380, 80, 80);
}

function conflicto1(num){
  return num===2;
}

function conflicto2(num){
  return num===4;
}

function conflicto3(num){
  return num===6;
}

function mostrarFinal1(n1){
  image(imagF1[n1],0,0,640,480);
  fill("#ED0E0E");
  rect(10,10,600,60,10)
  fill(255);
  text(tex1[n1],20,30);
  if(n1===7){
    mostrarBotonFin();
  }else{
    if(conflicto1(n1)===false && conflicto2(n1)===false && conflicto3(n1)===false)
    mostrarBoton();
  }
}

function mostrarFinal2(n2){
  image(imagF2[n2],0,0,640,480);
  fill("#ED0E0E");
  rect(10,10,600,60,10)
  fill(255);
  text(tex1[n2],20,30);
  if(n2===2){
    mostrarBotonFin();
  }else{
    mostrarBoton();
  }
}  

function mostrarFinal3(n3){
  image(imagF3[n3],0,0,640,480);
  fill("#ED0E0E");
  rect(10,10,600,60,10)
  fill(255);
  text(tex1[n3],20,30);
  if(n3===1){
    mostrarBotonFin();
  }else{
    mostrarBoton();
  }
}

function mostrarFinal4(n4){
  image(imagF4[n4],0,0,640,480);
  fill("#ED0E0E");
  rect(10,10,600,60,10)
  fill(255);
  text(tex1[n4],20,30);
  if(n4===2){
    mostrarBotonFin();
  }else{
    mostrarBoton(); 
  }
}  