console.log('external js file imported');

function getUserDetails() {

    var userName = document.getElementById('name').value;
    var passWord = document.getElementById('password').value;

    document.getElementById('duplicateName').value = userName;

    console.log('username is:  ' + userName);
    console.log('password is:  ' + passWord);
}

function secondFuntion(){
    console.log('second funtion called ');
}

function setOperation(operation){  

    document.getElementById('operation').value = operation;
}

function calculator(){

    var operation = document.getElementById('operation').value;
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var sum = 0;
    if(operation == 'add'){
         sum =  parseInt(num1)  + parseInt(num2) ;
    } else if(operation == 'sub') {
        sum = parseInt(num1)  - parseInt(num2);
    } else if(operation == 'mul') {
        sum = parseInt(num1)  * parseInt(num2);
    }else if(operation == 'div') {
        sum = parseInt(num1)  / parseInt(num2);
    } else {
        alert('Please select the operation');
    }

    
   
    document.getElementById('result').value = sum;
    
}



