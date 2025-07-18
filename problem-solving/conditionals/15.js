// Write a program to display a suitable message according to temperature state below?
// Temp < 0 then Freezing weather
// Temp 0-10 then Very Cold weather
// Temp 10-20 then Cold weather
// Temp 20-30 then Normal weather
// Temp 30-40 then Hot weather
// Temp >=40 then Very Hot weather
temp=20
if(temp<0){
    console.log("Freezing weather")
}
else if(temp>=0 && temp<=10){
    console.log("Very Cold weather")
}
else if(temp>10 && temp<=20){
    console.log("Cold weather")
}
else if(temp>20 && temp<=30){
    console.log("Normal weather")
}
else if(temp>30 && temp<=40){
    console.log("Hot weather")
}
else if(temp>=40){
    console.log("Very Hot weather")
}

