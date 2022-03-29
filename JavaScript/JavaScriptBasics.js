var num1 = 10;
var num2 = 10;
var sum;
var _name = "I Am ";
var name1 = "IronMan";

sum = num1 + num2;

console.log(" Addition of two number is " + sum);
console.log(_name + name1);


//Addition function
function Addition(number1, number2) { 
    var additionOfNumbers = number1 + number2;
    console.log(additionOfNumbers);
}

Addition(10, 12); // Function call

//Subtraction Function
function subtraction(number1,number2){
    var subtractionOfNumbers = number1 - number2;
    console.log(subtractionOfNumbers);
}

subtraction(10,5);
subtraction(100,5000);

//multiplication function
function multiplication(number1,number2){
    var multiplicationOfNumbers = number1 * number2;
    console.log(multiplicationOfNumbers);
}

multiplication(2,2);
multiplication(20,25);

//division function
function division(number1,number2){
    var divisionOfNumbers = number1 / number2;
    console.log(divisionOfNumbers);
}

division(2,2);
division(20,10);