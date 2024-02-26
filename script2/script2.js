const body = document.querySelector('body')
const colores = [
    'red','salmon','crimson','pink','deeppink',
    'mediumvioletred','tomato','orange','blue','gold',
    'khaki','yellow','moccasin','olive','plum',
    'fuchsia','mediumpurple','thistle','indigo','springgreen'
] //20 colores diferentes
const coloresOcupados = []

for(let i=0; i<10; i++){
    do{
        var color = colores[Math.floor(Math.random() * colores.length)]
        if(coloresOcupados.includes(color)){
            console.log(`El color ${color} ya ha sido utilizado`)
        }
    }while(coloresOcupados.includes(color))
    coloresOcupados.push(color)

    contenedor = document.createElement('div')
    contenedor.style.height = '100px'
    contenedor.style.background = color
    body.appendChild(contenedor)
}