function setup() {
    //prepara e roda o código para que mostra o resultado no canvas (tela)
    createCanvas(400, 400); //apresenta a tela (canvas), onde os números entre parênteses, em pixels, indicam a largura e a altura da tela
    background("black"); //é o fundo do canvas, muda a cor que pode ser pelo código RGB (red,green,blue) os quais são números que vão do 0 ao 255, ou indicar dentro do parênteses, entre aspas duplas "" o nome da cor em inglês, por exemplo, "red", "white"
  }
  
  function draw() {//função que desenha o canvas (tela)
    
    stroke("blue"); //stroke é a função contornar a figura
  
    //noStroke(), quando quer retirar o contorno;
  
    fill("red"); //fill é a função preencher a figura
  
    //console.log(mouseIsPressed); verificador: console.log e (mouseIsPressed) é a propriedade
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    
    } //colocando uma condição usando o comando if() {} //rect é a função que define um retângulo; dentro do parênteses, aparecem na ordem os eixos X e Y, a largura (width) e a altura (height)
  }