let name = "John doe";
let age = 30;
let isLearning = true;

console.log(`Je m'apelle ${name} j'ai ${age} ans`)

let num1 = 10
let num2 = 20
let result = num1 + num2;
console.log(`${num1} + ${num2} = ${result}`)

const fruits = ["banane", "pomme", "orange"]
for(i = 0; i < fruits.length; i++){
    console.log(`${i} = ${fruits[i]}`)
}


while(i < fruits.length){
    console.log(`${i} = ${fruits[i]}`)
    i++;
}
fruits.forEach((fruit) => {
    console.log(`fruit: ${fruit}`);
})




