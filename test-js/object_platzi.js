// Platzi Solution

const obj = {
    nombre: 'Fulanito',
    edad:  29,
    comidasFavoritas: ['Pollo frito', 'vegetales']
}

arreglo = Object.values(obj)

function arrayObj(arr) {
    for (let index=0; index < arreglo.length; index++) {
        console.log(arr[index])
    }

}

arrayObj(arreglo)