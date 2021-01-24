//start file
const costo = document.querySelector(".dolar-const");
const mul = document.querySelector(".dolar-mul");
const boton = document.querySelector(".mostrar");
const result = document.querySelector(".result");

boton.addEventListener('click', () => {
  let costoValor = costo.value;
  let mulValor = mul.value;
  var resultado = costoValor * mulValor
  Reflect.set(result, 'textContent', `${resultado}`);
  console.log(result);
});
//end file