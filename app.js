const h1 = document.querySelector('h1')
const form = document.querySelector('#form')
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

form.addEventListener('submit', submitValues)

function submitValues(event) {
    // console.log({event})
    event.preventDefault();
    const sumaInputs = parseInt(input1.value) + parseInt(input2.value);
    pResult.innerHTML = "Resultado: " + sumaInputs;

    
}


btn.addEventListener('click', btnOnClick)

function btnOnClick(event) {
    // console.log({event})
    event.preventDefault();
    const sumaInputs = parseInt(input1.value) + parseInt(input2.value);
    pResult.innerHTML = "Resultado: " + sumaInputs;

    
}