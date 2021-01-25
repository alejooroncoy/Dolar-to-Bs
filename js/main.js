//start file
const costo = document.querySelector(".dolar-const");
const mul = document.querySelector(".dolar-mul");
const boton = document.querySelector(".mostrar");
const result = document.querySelector(".result");

function op() {
  let mulValor = mul.value;
  let costoValor = costo.value;
  var resultado = costoValor * mulValor;
  Reflect.set(result, "textContent", `${resultado}`);
  console.log(result);
}

boton.addEventListener("click", () => {
  op();
});
//end file
