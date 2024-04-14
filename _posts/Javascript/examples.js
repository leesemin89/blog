let age = 25;
let citizenship = "Non-US";

if(age >= 18 && (citizenship === "US" || citizenship === "EU")){
    console.log("Eligible for the program");
} else{
    console.log("Not Eligible for the program");
}
if (!(age < 18)){
    console.log("Age is 18 or older");
} else {
    console.log("Age is less than 18");
}