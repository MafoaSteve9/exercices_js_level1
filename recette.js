let p = document.querySelector('p').innerHTML = "Il faudra sept ingrédients pour réalisé la recette carbonara :"
let button = document.querySelector('button')
const ingredients = ["", "Pâtes", "Oeuf", "Sel", "Poivre", "Lardon", "Oignon", "Parmesan"].sort()

button.addEventListener('click', () => {
    
    for(i = 1; i < ingredients.length; i++){
    
        document.write(`<br>${i}. ${ingredients[i]}`)
    }
})
