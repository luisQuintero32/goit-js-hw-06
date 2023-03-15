const input = document.querySelector('input#name-input');
const output = document.querySelector('span#name-output');
const outputcontent = output.textContent;

input.addEventListener('input', (event) => {
    let inputvalid = event.currentTarget.value > ''
    ? output.textContent = event.currentTarget.value
    : output.textContent = outputcontent;
    return inputvalid;
});
