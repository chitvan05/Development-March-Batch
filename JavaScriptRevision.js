

function calculator(){
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    console.log(num1);
    console.log(num2);
}

function displayNumbers(num){

var previousNumber = document.getElementById('calculationInput').value;

document.getElementById('calculationInput').value = previousNumber + num ;

}

