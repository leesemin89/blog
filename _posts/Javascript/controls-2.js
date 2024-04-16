// Sammy Lee
// 1
function isLarger(num1, num2){
    if(num1 > num2){
        return num1;
    } else if(num1 < num2){
        return num2;
    } else{
        return num1;
    }
}
console.log(isLarger(1,2));
console.log(isLarger(4,1));

// 2
function isSafeAirspeed(airspeed){
    if(airspeed >= 184 && airspeed <= 583 ){
        return true;
    } else {
        return false;
    }
}
console.log(isSafeAirspeed(200));
console.log(isSafeAirspeed(600));

// 3
function confirmAge(age){
    if(age < 13 && age >= 0){
        return "Too young to participate.";
    } else if(age > 13 && age < 18){
        return "You are allowed to participate.";
    } else if(age > 17){
        return "Too old to participate."
    } else {
        return "Invalid age."
    }
}
console.log(confirmAge(2));
console.log(confirmAge(17));
console.log(confirmAge(19));
console.log(confirmAge(0));
console.log(confirmAge(-1));