//program to find sum of elements in a number
// n=3546
// sum=0
// while(n>0){
//     r=n%10
//     sum+=r
//     n=Math.floor(n/10)
// }
// console.log(sum)


//program to find whether the number is palindrome or not
// n=121
// t=n
// p=0
// while(n>0){
//     r=n%10
//     p=p*10+r
//     n=Math.floor(n/10)
// }
// t==p?console.log("palindrome"):console.log("not a palindrome")


//find the sum of even digits and odd digits
// n=3546
// sum1=0
// sum2=0
// while(n>0){
//     r=n%10
//     if(r%2==0){
//         sum2+=r
//     }
//     else{
//         sum1+=r
//     }  
//     n=Math.floor(n/10)
// }
// console.log("even sum:",sum2)
// console.log("odd sum:",sum1)


//prime number
n=1
c=0
if(n<2){
    console.log(false)
}
else{
    for(i=2;i<n;i++){
    if(n%i==0){
        c++
    }
}
console.log(c==0)
}
