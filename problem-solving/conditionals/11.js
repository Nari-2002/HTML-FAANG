// Write a Program whether person is a kid, Teenage, adult or old age based on age?
age=0
if(age<=0){
    console.log("invalid")
}else if(age>0 && age<14){
    console.log("kid")
}else if(age>=14 && age<18){
    console.log("teenage")
}else if(age>=18 && age<45){
    console.log("adult")
}else{
    console.log("old")
}