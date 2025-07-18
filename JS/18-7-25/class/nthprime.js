let target = 11;  
let count = 0;
let num = 2;
while (true) {
    let isPrime = true;
    if (num === 2 || num === 3) {
        isPrime = true;
    } else if (num % 2 === 0||num%3==0) {
        isPrime = false;
    } else {
        for (let i = 5; i*i<=num; i+=2) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
    }
    if (isPrime) {
        count++;
        if (count === target) {
            console.log(num);  
            break;
        }
    }

    num++;
}
