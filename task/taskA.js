let numbers = [21, 45, 100, 12, 11, 78, 61, 4, 39, 22]; 
console.log(numbers)

let i = 0;
while (i < numbers.length) {
    console.log(numbers[i]);
    i++;
}
 

console.log("even numbers:");
a = 0;
while (a < numbers.length) {
    if (numbers[a] % 2 === 0) {
        console.log(numbers[a]);
    }
    a++;
}

 console.log(" larger than 10 and smaller than 60:");
i = 0;
while (i < numbers.length) {
    if (numbers[i] > 10 && numbers[i] < 60) {
        console.log(numbers[i]);
    }
    i++;
}
