const numbers = {
    *[Symbol.iterator](){
        for(let i = 1; i <= 10; i++){
            yield i;
        }
    }
};
const square = x => x * x;
const mappedNumbers = {
    *[Symbol.iterator](){
        for(const number of numbers){
            yield square(number);
        }
    }
};
for(const mappedNumber of mappedNumbers){
    console.log(mappedNumber);
}