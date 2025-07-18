//prime number
// n=9
// c=0
// if(n<2){
//     console.log(false)
// }
// else{
//     for(i=2;i<n;i++){
//     if(n%i==0){
//         c++
//         break
//     }
// }
// console.log(c==0)
// }

n=11
c=0
if(n<2){
    console.log(false)
}
else if(n==2||n==3){
    console.log(true)
}
else if(n%2==0){
    console.log(false)
}
else{
    for(i=3;i*i<=n;i++){
        if(n%i==0){
            c++
            break
        }
    }
    console.log(!(c>0))
}