/*https://youtu.be/uBTS86CcU7I*/
/*https://editor.p5js.org/alissondavidsp/sketches/nrXsV5k0D*/
var tela = 1;
var largura = 200;
var altura = 50;
var xMenu = 50;
var yMenu1 = 85;
var yMenu2 = 145;
var yMenu3 = 205;
var x = 10;
var y = 10;
var xObstaculo = 290;
var yObstaculo = 290;
var rObstaculo = 10;
var rx = 5;
var foto
var foto2;
var cont=0;
var cont2=0;
var stop=[];
function preload(){
  foto = loadImage('foto.jpg');
  foto2 = loadImage('bia.png'); 
}

function setup() {
  createCanvas(300, 300);
  
}

function draw() {
  
  if(tela==1){
    background('green');
    
    textAlign(CENTER);
    textSize(29);    
    if(mouseX > xMenu && mouseX < xMenu+largura && mouseY > yMenu1 && mouseY < yMenu1+altura){
    stroke(200);
    fill('green');
    rect(xMenu,yMenu1,largura,altura,10);
      if(mouseIsPressed){
        tela = 2;
      }
      }
    fill('white');
    text("Jogar",150,120);
      
  if(mouseX > xMenu && mouseX < xMenu+largura && mouseY > yMenu2 && mouseY < yMenu2+altura){
    stroke(200);
    fill('green');
    rect(xMenu,yMenu2,largura,altura,10);
    
    if(mouseIsPressed){
        tela = 3;
      }
   } 
     fill('white');
    text("Instruções",150,175);
   
    if(mouseX > xMenu && mouseX < xMenu+largura && mouseY > yMenu3 && mouseY < yMenu3+altura){
    stroke(200);
    fill('green');
    rect(xMenu,yMenu3,largura,altura,10);
    if(mouseIsPressed){
        tela = 4;
      }
   } 
     fill('white');
    text("Creditos",150,235);
  }
  
   if(tela==2){
    background('black');
     
     
     if (keyIsDown(LEFT_ARROW)) {
    x -= 5;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    x += 5;
  }

  if (keyIsDown(UP_ARROW)) {
    y -= 5;
  }

  if (keyIsDown(DOWN_ARROW)) {
    y += 5;
  }

  ellipse(x, y, 20, 20);
     ellipse(xObstaculo, yObstaculo, 2*rObstaculo, 2*rObstaculo);
     
    
     if(dist(xObstaculo, yObstaculo, x, y ) < rObstaculo + rx ) {
      
       text("Parabéns vc ganhou",150,100);
       
}
   }
  if(tela == 3){
    background('blue');
    textAlign(CENTER);
    textSize(29); 
    fill('white');
    text("Instruções\n",150,25);
    textSize(15);
    text("Provavelmente usaremos a disciplina de"+"\n Matemática do 1ºano"+"\nDescrever a localização de pessoas e de"+"\n  objetos no espaço segundo um dado ponto"+"\nde referência, compreendendo que, "+"\n para a utilização de termos que se referem"+"\n à posição, como direita,esquerda,"+"\n em cima, em baixo,"+"\n é necessário explicitar-se o referencial",140,70);
  } 
  if(tela==4){
    background('blue');
    image ( foto , 10, 10 );
    textSize(10);
    text("Alisson David de Paiva Silva\nProgramador",70,200);
    image(foto2,150,10);
    text("Beatriz Fernanda do Monte Silva\nProfessora do Ensino Fundamental",215,200); 
  }
}