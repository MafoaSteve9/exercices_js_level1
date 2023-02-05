let button = document.querySelector('button')
let str = "Hola"
let p = document.querySelector('p')
let div = document.createElement('div')
button.textContent = "Click me"
button.addEventListener('click', () => {
    p.style.textAlign = "center"
    p.style.color = "red"
    document.body.style.backgroundColor = "lightgreen"
    div.style.padding = "30px"
    div.style.backgroundColor = " lightpink"
    div.style.display = "flex"
    div.style.border = 'solid black'
    div.style.fontWeight = "bold"
    div.textContent = "FULL JS"
   
})
document.body.append(div)