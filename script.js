var number = parseInt(prompt("Enter a number:"));
var isPrime = true;

if (isNaN(number)) {
    document.write("Please enter a valid number.");
} else if (number == 1) {
    document.write("1 is neither a prime nor a composite number");
} else if (number > 1) {
    for (var i = 2; i <= number / 2; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime == true) {
        document.write(number + " is a prime number");
    } else {
        document.write(number + " is not a prime number");
    }
} else {
    document.write("Number is not a prime number.");
}
