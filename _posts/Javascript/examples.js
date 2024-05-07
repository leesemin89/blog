let person = { name: "John Doe", age: 30 };
for(let [key, value] of Object.entries(person)){
  console.log(key + ": " + value)
}