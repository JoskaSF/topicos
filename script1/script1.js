const body = document.querySelector('body')
const colores = [
    'red','salmon','crimson','pink','deeppink',
    'mediumvioletred','tomato','orange','blue','gold',
    'khaki','yellow','moccasin','olive','plum',
    'fuchsia','mediumpurple','thistle','indigo','springgreen'
] //20 colores diferentes

for(let i=0; i<10   ; i++){
    contenedor = document.createElement('div')
    contenedor.style.height = '100px'
    contenedor.style.background = colores[Math.floor(Math.random() * colores.length)]
    body.appendChild(contenedor)   
}