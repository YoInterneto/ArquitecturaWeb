Vue.component('hello-world', {
    props
})


const app = new Vue({
    el: '#app',
    template: "#codigo",
    data: {
        primerPlato: [
            {nombre: "Sopa de fideos", precio: 4},
            {nombre: "Ensalada de la casa", precio: 3},
            {nombre: "Macarrones bolognesa", precio: 5},
            {nombre: "Pure de verduras", precio: 2},
            {nombre: "Entremeses", precio: 5},
        ],
        segundoPlato: [
            {nombre: "Solomillo", precio: 10},
            {nombre: "Bacalao con patatas", precio: 7},
            {nombre: "Hamburguesa completa", precio: 7},
            {nombre: "Pizza 4 quesos", precio: 8},
            {nombre: "Costillas barbacoa", precio: 13},
            {nombre: "Sandwich vegetal", precio: 6},
            {nombre: "Parillada de verduras", precio: 8},
        ],
        postre: [
            {nombre: "Arroz con leche", precio: 3},
            {nombre: "Flan", precio: 2},
            {nombre: "Fruta de temporada", precio: 2},
            {nombre: "Natillas", precio: 4},
        ],

        mesa1: [],
        mesa2: [],
        mesa3: [],

        total: 0,
    },
})