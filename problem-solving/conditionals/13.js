// Write a Program to display wish message to end user based on time?
time=12
if(time<0 || time>24){
    console.log("invalid time")
}else if(time>0 && time<11){
    console.log("good morning")
}else if(time>=12 && time<16){
    console.log("afternon")
}else if(time>=16 && time<18){
    console.log("good evng")
}else{
    console.log("good night")
}
