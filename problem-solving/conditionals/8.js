year=1999

if(year%400==0  )
{
       console.log("leap")
    
}
else if(year%100){
    console.log("not leap")
}
else if(year%4==0){
    console.log("leap")
}
else{
    console.log("not leap")
}