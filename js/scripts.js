var weight = parseFloat(prompt("Enter your weight:"));
var height = parseFloat(prompt("Enter your height:"));
var bmi= function(weight, height) {
return (weight / (height*height))*(703)
}

var bmiresult= bmi(weight, height);

if(bmiresult < 18.5) {
alert("under weight");
}
else if(bmiresult < 25 && bmiresult > 18.5){
alert("You are normal weight");
}
else if(bmiresult < 30 && bmiresult > 25){
alert("You are overweight");
}
else if(bmiresult > 30){
alert("You are obese");
}
