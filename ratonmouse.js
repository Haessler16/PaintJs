var canvas = document.getElementById("teclitas");
var papel = canvas.getContext("2d");
var colorcito = "#AFF";
var x;
var y;
var click = 0

canvas.addEventListener("mouseup", mouseUp);
canvas.addEventListener("mousedown", mouseDown);
canvas.addEventListener("mousemove", mouseMove);

  function mouseMove(evento)
  {
    if (click == 1)
    {
      dibujarLinea(colorcito, x, y, evento.layerX, evento.layerY, papel);
    }
    x = evento.layerX;
    y = evento.layerY;
  }

function mouseDown(evento)
{
  click = 1;
  x = evento.layerX;
  y = evento.layerY;
}

function mouseUp(evento)
{
  click = 0;
  x = evento.layerX;
  y = evento.layerY;
}



function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 2;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}
