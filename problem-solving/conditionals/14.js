// Write a Program display pass or fail to user based on marks?
marks=-40
total=100
if(marks<0 || marks>total){
    console.log("invalid marks")
}
else if(marks/total*100>=40){
    console.log("pass")
}else{
    console.log("fail")
}