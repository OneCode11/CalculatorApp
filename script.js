let currentInput = "";
let result = 0;


function append(obj){
    currentInput += obj;
    updateDisplay();
}

function updateDisplay(){
  document.getElementById("result").value = currentInput;
}

function calculateInput(){
    currentInput = eval(currentInput);
    updateDisplay();
}

function clearInput(){
    currentInput = "";
    updateDisplay();
}