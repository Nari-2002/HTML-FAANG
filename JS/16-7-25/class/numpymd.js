
// for(i=1;i<5;i++){
//     for(j=1;j<=i;j++){
//         process.stdout.write(`${j} `)
//     }
//     console.log()
// }

// c=65
// for(i=1;i<5;i++){
//     for(j=0;j<i;j++){
//         process.stdout.write(`${String.fromCharCode(c++)} `)
//     }
//     console.log()
// }


for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5 - i; j++) {
        process.stdout.write(" ");
    }
    for (let k = 1; k <= i; k++) {
        process.stdout.write("* ");
    }
    console.log(); 
}




