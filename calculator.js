function display(value){
var previousValue = document.getElementById('score').value;
document.getElementById('score').value = previousValue + value
}

//to clear the input

function clearScreen(){
    document.getElementById('score').value = '' 
}