# Laboratio 01 Bloque 2

Se presentaran 3 scripts diferentes con sus respectivos objetivos utilizando **JavaScript**

---

### Script 1

Se generan 10 divs o contenedores con las caracteristicas de 100px de alto y un fondo de color aleatoriamente.

Para esto agregue 20 tipos de colores diferentes en un arreglo para asi obtenerlos aleatoriamente lo cual se explicara mejor despues.

Se inicializa un ciclo **for** el cual en cada iteracion crea un div, modifica su altura a 100px y se le agrega un fondo aleatorio con el uso de dos metodos.

- **Math.random** el cual nos ayuda primero a generar un numero aleatorio del 0 a la cantidad de elementos que tenemos de colores los cuales son 20, por lo que genera un numero aletorio del 0 al 19.

Seguimos teniendo un problema el cual es que los numeros generados no son enteros y eso no nos sirve, para ello son apoyamos del segundo metodo.

- **Math.floor** es tan simple que solamente nos devuelve el numero entero mas cercano al resultado dado por el metodo anterior

```js
for(let i=0; i<10   ; i++){
    contenedor = document.createElement('div')
    contenedor.style.height = '100px'
    contenedor.style.background = colores[Math.floor(Math.random() * colores.length)]
    body.appendChild(contenedor)   
}
```

Con estos dos metodos generamos los fondos aleatorios para cada div.
___
### Script 2

Para este segundo script se busca que utilizando el script anterior solucionemos el problema de que los colores se repetian.

Para solucionar esto primero cree un nuevo arreglo llamado *coloresOcupados*, despues utilice un ciclo **do-while** en el cual primero se genera el color como lo explicamos anteriormente y este color generado se compara al arreglo nuevo con el metodo de .includes el cual dentro del arreglo busca un elemento especifico regresando True o False.

```js
do{
        var color = colores[Math.floor(Math.random() * colores.length)]
        if(coloresOcupados.includes(color)){
            console.log(`El color ${color} ya ha sido utilizado`)
        }
    }while(coloresOcupados.includes(color))
    coloresOcupados.push(color)
```

Si el color no ha sido utilizado realizo un console.log por pura comprobacion, esta misma condicion lo puse dentro del while para que si el color ya ha sido utilizado repita este paso hasta que sea generado un color nuevo, asi se agrega ese color nuevo para que despues no pueda ser utilizado nuevamente y se sigue el mismo procedimiento que anteriormente describi.

---
### Script 3

Para el tercer Script primero agrege un arreglo que contenia 100 palabras e igual que los demas script se inicia con un **for** de 0 a 4 (5 iteraciones) porque se busca hacer 5 parrafos, para ello se crea un nuevo elemento p y a este se le genera la oracion.

Entrando a la funcion usamos la misma logica en la cual por medio de numeros aleatorios entramos con ayuda de los index en los elementos del arreglo y asi ir agregando estas palabras a una variable que contiene las palabras para al final agregar toda la cadena al parrafo y asi ya todo listo, agregamos el nodo del parrafo como hijo de nuestro body.

```js
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
```

