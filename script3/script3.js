const body = document.querySelector('body')
const palabras= [
    'galaxia ','rosa ','figura ','libro ','silbato ','hermana ','sutil ','caracol ','nube ','bambu ',
    'juego ', 'pelicula ', 'pc ', 'comida ', 'desayuno ', 'perico ', 'entretenimiento ', 'cama ', 'lonche ',
    'postre ', 'funcino ', 'codigo ', 'libreta ', 'lapiz ', 'pluma ', 'carretera ', 'carro ', 'faro ', 'mar ',
    'oceano ', 'rio ', 'lago ', 'luces ', 'cable ', 'destornillador ', 'imagen ','corrupto ', 'paleta ', 'camiseta ',
    'pantalon ', 'zapatos ', 'espada ', 'desodorante ', 'mouse ', 'teclado ', 'audifonos ', 'interfaz ', 'gorra ', 'ilustrasion ',
    'novia ', 'flor ', 'agua ', 'leche ', 'soda ', 'sopa ', 'queso ', 'galletas ', 'puerta ', 'manubrio ',
    'bicicleta ', 'patines ', 'rampa ', 'bajada ', 'bache ', 'tornado ', 'git ', 'tengo ', 'hacer ', 'comer ',
    'dormir ', 'realizar ', 'tarea ', 'caminar ', 'gritar ', 'enojado ', 'feliz ', 'triste ', 'deambulante ', 'calor ',
    'frio ', 'abrigado ', 'sofocante ', 'luciernaga ', 'cargador ', 'cortar ', 'cocinar ', 'coser ', 'trabajar ', 'enfermedad ',
    'saludo ','despedida ','abrazo ','helado ','caja ','coleccion ','menu ','mes ','dia ','semana '
] 

function textoAleatorio(){
    let random = Math.floor(Math.random() * 50 + 50)
    console.log(`El texto generado tiene ${random} palabras`)
    var textoGenerado = ''
    for(let j=0;j<random; j++){
        textoGenerado += palabras[Math.floor(Math.random() * 100)]
    }
    textoGenerado += `El texto contiene ${textoGenerado.length} caracteres.`
    return textoGenerado
}

for(let i=0;i<5;i++){
    var titulo = document.createElement('h2')
    titulo.textContent = `Parrafo ${i+1}`

    var parrafo = document.createElement('p')
    parrafo.textContent = textoAleatorio()

    body.appendChild(titulo)
    body.appendChild(parrafo)
}