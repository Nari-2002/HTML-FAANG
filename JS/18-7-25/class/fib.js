n=21
a=0
b=1
console.log(a)
while(b<=n){
    console.log(b)
    // a,b=b,b+a
    t=a
    a=b
    b=t+b
}
