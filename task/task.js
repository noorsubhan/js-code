var  a= Number(prompt("enter your first number "))
var b= Number(prompt("enter your send number "));
var operator = prompt("Enter an arithmetic operator (+, -, *, /):");
var result;


if(operator==='+'){
    console.log(a+b)
}
else if (operator==='-'){
    console.log(a-b)
}
else if (operator==='*'){
    console.log(a*b)
}
else if (operator==='/'){
    console.log(a/b)
}
else {
    alert("u operator is invalid")
}