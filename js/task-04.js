const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');
const counterValue = document.querySelector('#value');

const counter = {
    value: 0,
    decrement() {
        this.value -= 1;
    },
    increment() {
        this.value += 1;
    },
};

decrement.addEventListener('click', () => {
    counter.decrement();
    counterValue.textContent = counter.value;
});

increment.addEventListener('click', () => {
    counter.increment();
    counterValue.textContent = counter.value;
});
