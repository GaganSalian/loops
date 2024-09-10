var number = parseInt(prompt("Enter a number:"));
var isPrime = true;

if (isNaN(number)) {
    document.write("Please enter a valid number.");
} else if (number <= 1) {
    document.write(number + " is neither a prime nor a composite number.");
} else {
    for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        document.write(number + " is a prime number.");
    } else {
        document.write(number + " is not a prime number.");
    }
}
