const str = "le code c'est super !";
let counter = 0;
for(i = 0; i < str.length; i++){
    if (str[i] === "e") {
        counter++;      
    }
}
console.log(counter)