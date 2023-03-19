// const decrement = document.querySelector('[data-action="decrement"]');
// const increment = document.querySelector('[data-action="increment"]');
// const counterValue = document.querySelector('#value');

// const counter = {
//     value: 0,
//     decrement() {
//         this.value -= 1;
//     },
//     increment() {
//         this.value += 1;
//     },
// };

// decrement.addEventListener('click', () => {
//     counter.decrement();
//     counterValue.textContent = counter.value;
// });

// increment.addEventListener('click', () => {
//     counter.increment();
//     counterValue.textContent = counter.value;
// });
let counterValue = 0;
const valueSpan = document.getElementById('value');
  valueSpan.textContent = counterValue;

  // Agregar escuchadores de eventos a los botones
  const incrementButton = document.querySelector('[data-action="increment"]');
  const decrementButton = document.querySelector('[data-action="decrement"]');
incrementButton.addEventListener('click', incremento);
decrementButton.addEventListener('click', decremento);

  function incremento(){
    counterValue+=1;
    valueSpan.textContent = counterValue;
  }
  function decremento(){
    counterValue-=1;
    valueSpan.textContent = counterValue;
  };