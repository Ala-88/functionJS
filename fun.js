// function square(x) {
//     return x * x;
//   }
// let result = square(5); // calling/invoking the function and storing the result
// console.log(result);

let result = (x) => x * x;
console.log(result(5))




function generateYears(start, end, exclude){
    for (let i = start; i <= end; i++){
        if (i === exclude){
            continue;
        }
        console.log(i)
    }
}
generateYears(2000, 2024, 2020)

   

function generate(start, end, exclude){
    for (let i = start; i <= end; i++){
        if (i === exclude){
            return `Interruptting`;
        }
        console.log(i)
    }
}
generate(1, 10, 8)