function cuadrados1(x1, y1, ancho1, alto1, partX1, partY1, cant) {
  for ( let i=0; i<cant; i+=1 ) {
    let anchoRect = map( i, 0, cant, ancho1, 0);
    let altoRect = map( i, 0, cant, alto1, 0);
    let PosX1 = map( i, 0, cant, x1, partX1  );
    let PosY1 = map( i, 0, cant, y1, partY1 );
    let esPar = calculo(i);
    if (esPar) {
      fill(255);
    } else {
      fill(0);
    }
    rect(PosX1, PosY1, anchoRect, altoRect);
  }
}

function cuadrados2(x2, y2, ancho2, alto2, partX2, partY2, cant) {
  for ( let i=0; i<cant; i+=1 ) {
    let anchoRect = map( i, 0, cant, ancho2, 0);
    let altoRect = map( i, 0, cant, alto2, 0);
    let PosX2 = map( i, 0, cant, x2, partX2  );
    let PosY2 = map( i, 0, cant, y2, partY2 );
    let esPar = calculo(i);
    if (esPar) {
      fill(255);
    } else {
      fill(0);
    }
    rect(PosX2, PosY2, anchoRect, altoRect);
  }
}

function Cuadrados() {
  if (mouseX>400 && mouseX<800 && mouseY>0 && mouseY<400) {
    rectMode(CENTER);
    push();
    translate(600, 200);
    fill(255);
    rect(0, 0, 390, 390);
    pop();

    push();
    translate(600, 200);
    rotate(radians(angulo2));
    fill(0);
    rect(mouseX-600, mouseY-200, 370, 370);
    pop();

    push();
    translate(600, 200);
    rotate(radians(angulo3));
    fill(255);
    rect(mouseX-600, mouseY-200, 350, 350);
    pop();

    push();
    translate(600, 200);
    rotate(radians(angulo4));
    fill(0);
    rect(mouseX-600, mouseY-200, 330, 330);
    pop();

    push();
    translate(600, 200);
    rotate(radians(angulo5));
    fill(255);
    rect(mouseX-600, mouseY-200, 310, 310);
    pop();

    push();
    translate(600, 200);
    rotate(radians(angulo6));
    fill(0);
    rect(mouseX-600, mouseY-200, 290, 290);
    pop();

    push();
    translate(600, 200);
    rotate(radians(angulo7));
    fill(255);
    rect(mouseX-600, mouseY-200, 270, 270);
    pop();

    push();
    translate(600, 200);
    rotate(radians(angulo8));
    fill(0);
    rect(mouseX-600, mouseY-200, 250, 250);
    pop();

    push();
    translate(600, 200);
    rotate(radians(angulo9));
    fill(255);
    rect(mouseX-600, mouseY-200, 230, 230);
    pop();

    push();
    translate(600, 200);
    rotate(radians(angulo10));
    fill(0);
    rect(mouseX-600, mouseY-200, 210, 210);
    pop();

    push();
    translate(600, 200);
    rotate(radians(angulo11));
    fill(255);
    rect(mouseX-600, mouseY-200, 190, 190);
    pop();

    push();
    translate(600, 200);
    rotate(radians(angulo12));
    fill(0);
    rect(mouseX-600, mouseY-200, 170, 170);
    pop();

    push();
    translate(600, 200);
    rotate(radians(angulo13));
    fill(255);
    rect(mouseX-600, mouseY-200, 150, 150);
    pop();

    push();
    translate(600, 200);
    rotate(radians(angulo14));
    fill(0);
    rect(mouseX-600, mouseY-200, 130, 130);
    pop();

    push();
    translate(600, 200);
    rotate(radians(angulo15));
    fill(255);
    rect(mouseX-600, mouseY-200, 110, 110);
    pop();

    push();
    translate(600, 200);
    rotate(radians(angulo16));
    fill(0);
    rect(mouseX-600, mouseY-200, 90, 90);
    pop();

    push();
    translate(600, 200);
    rotate(radians(angulo17));
    fill(255);
    rect(mouseX-600, mouseY-200, 70, 70);
    pop();

    push();
    translate(600, 200);
    rotate(radians(angulo18));
    fill(0);
    rect(mouseX-600, mouseY-200, 50, 50);
    pop();

    push();
    translate(600, 200);
    rotate(radians(angulo19));
    fill(255);
    rect(mouseX-600, mouseY-200, 30, 30);
    pop();
  }
}
