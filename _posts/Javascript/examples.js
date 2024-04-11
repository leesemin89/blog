function outerFunction(x){
    return function innerFunction(y){
        return x + y;
    };
}
let add5 = outerFunction(5);
console.log(add5(3)); // output: 8
console.log(add5(10)); // 15

let add10 = outerFunction(10);
console.log(add10(3)); // 13
console.log(add10(10)); // 20