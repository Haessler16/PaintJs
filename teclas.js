var canvas = document.getElementById("teclitas");
var papel = canvas.getContext("2d");

document.addEventListener("keydown", dibujoPorTeclas);

var x = 150;
var y = 150;

var teclas =
{
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};
console.log(teclas);

dibujarLinea("red", x-1, y-1, x+1, y+1, papel);

function dibujoPorTeclas(evento)
{
  var colorcito = "#F00";
  var movimiento = 2;
  console.log(evento);

  switch (evento.keyCode)
  {
    case teclas.UP: dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
    y = y - movimiento;
      break;
    case teclas.DOWN: dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
    y = y + movimiento;
      break;
    case teclas.LEFT: dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
    x = x - movimiento;
      break;
    case teclas.RIGHT: dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
    x = x + movimiento;
      break;
    default: console.log("Otra tecla");
    }

      /*if (evento.key == aff.DIAGONAL)
      {
        dibujarLinea(colorcito, x, y, x + movimiento, y + movimiento, papel);
        y = y + movimiento;
        x = x + movimiento;
      }
      */
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

/*funciones que dibujan los bordes*/
var colorcito = "#F66";
dibujarLinea(colorcito, 1, 1, 1, 299, papel);
dibujarLinea(colorcito, 299, 1, 299, 299, papel);
dibujarLinea(colorcito, 1, 1, 299, 1, papel);
dibujarLinea(colorcito, 1, 299, 299, 299, papel);
