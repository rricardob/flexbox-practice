const d = document;

let decrwease = d.getElementById('modal-decrease'),
  increment = d.getElementById('modal-increment'),
  input = d.getElementById('modal__count-value'),
  subTotalBolsa = d.getElementById('modal__montosub'),
  price = d.getElementById('modal__price'),
  descuento = d.getElementById('modal__montoDescuento'),
  montoTotal = d.getElementById('modal__montoTotal'),
  subtotalFinal = d.getElementById('modal__resume-subtotal-mount'),
  descuentoFinal = d.getElementById('modal__resume-descuento-total'),
  totalFinal = d.getElementById('modal__resume-total-total'),
  contador = 1;

let decrease = document.getElementById('modal-decrease');
decrease.addEventListener('click', () => {
  if (input.value <= 1) {
    input.value = 1;
  } else {
    input.value = --contador;
    subTotalBolsa.innerHTML = price.innerHTML * input.value;
    montoTotal.innerHTML = subTotalBolsa.innerHTML - descuento.innerHTML;
    subtotalFinal.innerHTML = subTotalBolsa.innerHTML;
    descuentoFinal.innerHTML = descuento.innerHTML;
    totalFinal.innerHTML = subtotalFinal.innerHTML - descuentoFinal.innerHTML;
  }
});

increment.addEventListener('click', () => {
  input.value = ++contador;
  subTotalBolsa.innerHTML = price.innerHTML * input.value;
  montoTotal.innerHTML = subTotalBolsa.innerHTML - descuento.innerHTML;
  subtotalFinal.innerHTML = subTotalBolsa.innerHTML;
  descuentoFinal.innerHTML = descuento.innerHTML;
  totalFinal.innerHTML = subtotalFinal.innerHTML - descuentoFinal.innerHTML;
});

let obtenerDatosInicio = () => {
  subTotalBolsa.innerHTML = price.innerHTML * input.value;
  montoTotal.innerHTML = subTotalBolsa.innerHTML - descuento.innerHTML;
  subtotalFinal.innerHTML = subTotalBolsa.innerHTML;
  descuentoFinal.innerHTML = descuento.innerHTML;
  totalFinal.innerHTML = subtotalFinal.innerHTML - descuentoFinal.innerHTML;
};

let obtenerTotal = () => {};

window.onload = obtenerDatosInicio();
