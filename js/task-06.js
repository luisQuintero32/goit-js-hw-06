const input = document.querySelector('input');
const styleColor = document.querySelector('style');

input.addEventListener('blur', validateSymbol);


function validateSymbol(){
    let amountsymbol = this.value.length;
    let requirementValue = this.dataset.length;
    if(amountsymbol == requirementValue){
        this.style.borderColor= '#4caf50';
    }
    else{
        this.style.borderColor= '#f44336';
    }
};