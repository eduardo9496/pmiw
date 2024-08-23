let imagen;
let posX1;
let posY1;
let posX2;
let posY2;
let partidaX1;
let partidaY1;
let partidaX2;
let partidaY2;
let  angulo1;
let  angulo2;
let  angulo3;
let  angulo4;
let  angulo5;
let  angulo6;
let  angulo7;
let  angulo8;
let  angulo9;
let  angulo10;
let  angulo11;
let  angulo12;
let  angulo13;
let  angulo14;
let  angulo15;
let  angulo16;
let  angulo17;
let  angulo18;
let  angulo19;
let ClickDerecho;
let ClickIzquierdo;
let cantClicks;

function preload() {
  imagen= loadImage("data/Obra.jpg")
}

function setup() {
  createCanvas(800, 400);
  posX1= 410;
  posY1= 10;
  posX2= 410;
  posY2= 210;
  partidaX1= (width/2)+100 ;
  partidaY1= (height/2)-100;
  partidaX2= (width/2)+100;
  partidaY2= (height/2)+100;
  cantClicks=0;
  angulo1=0;
  angulo2=0;
  angulo3=0;
  angulo4=0;
  angulo5=0;
  angulo6=0;
  angulo7=0;
  angulo8=0;
  angulo9=0;
  angulo10=0;
  angulo11=0;
  angulo12=0;
  angulo13=0;
  angulo14=0;
  angulo15=0;
  angulo16=0;
  angulo17=0;
  angulo18=0;
  angulo19=0;
}


function draw() {
  /*background(0);*/
  console.log(  );
  image(imagen, 0, 0, 400, 400);
  for (let i=0; i<2; i+=1) {
    cuadrados1(posX1, posY1, 180, 180, partidaX1, partidaY1, 19);
    posX1=posX1+200;
    partidaX1=partidaX1+200;
    for (let j=0; j<2; j+=1) {
      cuadrados2(posX2, posY2, 180, 180, partidaX2, partidaY2, 19);
      partidaX2=partidaX2+200;
      posX2=posX2+200;
    }
  }

  if ( key === 'a' ) {
    background(0, 183, 247);
    image(imagen, 0, 0, 400, 400);
    Cuadrados();
    if (mouseButton === LEFT) {
      ClickIzquierdo= true;
    } else {
      ClickIzquierdo= false;
    }

    if (mouseButton === RIGHT) {
      ClickDerecho=true;
    } else {
      ClickDerecho=false;
    }
  }
  if (cantClicks>0) {
    if (key === 'r') {
      cantClicks=0;
      angulo1=0;
      angulo2=0;
      angulo3=0;
      angulo4=0;
      angulo5=0;
      angulo6=0;
      angulo7=0;
      angulo8=0;
      angulo9=0;
      angulo10=0;
      angulo11=0;
      angulo12=0;
      angulo13=0;
      angulo14=0;
      angulo15=0;
      angulo16=0;
      angulo17=0;
      angulo18=0;
      angulo19=0;
    }
  }
}

function mousePressed() {
  if (ClickIzquierdo===true) {
    cantClicks+=1;
    angulo1+=1;
    angulo2+=2;
    angulo3+=3;
    angulo4+=4;
    angulo5+=5;
    angulo6+=6;
    angulo7+=7;
    angulo8+=8;
    angulo9+=9;
    angulo10+=10;
    angulo11+=11;
    angulo12+=12;
    angulo13+=13;
    angulo14+=14;
    angulo15+=15;
    angulo16+=16;
    angulo17+=17;
    angulo18+=18;
    angulo19+=19;
  } else {
    if (ClickDerecho===true) {
      angulo1-=1;
      angulo2-=2;
      angulo3-=3;
      angulo4-=4;
      angulo5-=5;
      angulo6-=6;
      angulo7-=7;
      angulo8-=8;
      angulo9-=9;
      angulo10-=10;
      angulo11-=11;
      angulo12-=12;
      angulo13-=13;
      angulo14-=14;
      angulo15-=15;
      angulo16-=16;
      angulo17-=17;
      angulo18-=18;
      angulo19-=19;
    }
  }
}
