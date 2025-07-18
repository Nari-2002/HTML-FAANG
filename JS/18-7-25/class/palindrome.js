// program to find whether the number is palindrome or not
n=121
t=n
p=0
while(n>0){
    p=p*10+(n%10)
    n=Math.floor(n/10)
}
console.log(t==p?"palindrome":"not a palindrome")