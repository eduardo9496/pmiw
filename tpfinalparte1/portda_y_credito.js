function mostrarPortada() {
  image(portada, 0, 0, 640, 480);
  image(btnPlay, 400, 380, 80, 80);
  image(btnCredito, 100, 380, 80, 80);
}

function mostrarCredito() {
  image(credito, 0, 0, 640, 480);
  fill("#ED0E0E")
  rect(20,20,300,30,12);
  fill(0);
  stroke(1);
  textSize(20);
  text("Creditos",30,42);
  fill(237,14,14,50);
  rect(20,60,200,300,12);
  fill(255);
  textSize(14);
  text("Alumnos:\n\nIntegrante 1:\n -Eduardo Medrano\n\nPelicula:\n -Resident Evil\n\nIA Utilizada:\n -Microsof desing",28,80 );
  
  image(btnAtras, 260, 380, 60, 60);
}
