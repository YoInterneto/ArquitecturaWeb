<template>
    <div class="principal-panel">
        <div class="table-dish-election">
            <!-- - - - - - - - - - - - - - - -->
            <!-- ELECCION DEL NUMERO DE MESA -->
            <!-- - - - - - - - - - - - - - - -->
            <div class="choose-table">
                <select id="table" v-model="tableElection">
                    <option :value="option.id" v-for="(option, index) in tableOptions" :key="index">
                        {{ option.nombre }}
                    </option>
                </select>
            </div>
            <!-- - - - - - - - - - - - - -  -->
            <!-- ELECCION DEL TIPO DE PLATO -->
            <!-- - - - - - - - - - - - - -  -->
            <div class="choose-dish" v-for="(option, index) in dishOptions" :key="index">
                <input type="radio" name="dish" :value="option.id" v-model="typeElection">
                {{option.nombre}}
            </div>
        </div>
        <div class="dishes-panel">
            <!-- - - - - - - - - - - - - - - - - - - - - - - - - -->
            <!-- TODAS LAS OPCIONES DE ELECCION DE UN TIPO PLATO -->
            <!-- - - - - - - - - - - - - - - - - - - - - - - - - -->
            <div class="option-panel">
                <select id="options1" v-model="dishElection" v-if="typeElection == 'primero'" @dblclick="addDish(dishElection, typeElection)" multiple>
                    <option :value="option.id" v-for="(option, index) in firstOptions" :key="index">
                        {{ option.nombre }}  ({{ option.precio}}€)
                    </option>
                </select>
                <select id="options2" v-model="dishElection" v-else-if="typeElection == 'segundo'" @dblclick="addDish(dishElection, typeElection)" multiple>
                    <option :value="option.id" v-for="(option, index) in secondOptions" :key="index">
                        {{ option.nombre }}  ({{ option.precio}}€)
                    </option>
                </select>
                <select id="options3" v-model="dishElection" v-else @dblclick="addDish(dishElection, typeElection)" multiple>
                    <option :value="option.id" v-for="(option, index) in dessertOptions" :key="index">
                        {{ option.nombre }}  ({{ option.precio}}€)
                    </option>
                </select>
            </div>
            <!-- - - - - - - - - - - - - - - - - - - -  -->
            <!-- TODAS LOS PLATOS ELEGIDOS POR UNA MESA -->
            <!-- - - - - - - - - - - - - - - - - - - -  -->
            <div class="selected-panel">
                <select id="selected1" v-if="tableElection == 'mesa1'" multiple aria-readonly="true">
                    <option :value="option.id" v-for="(option, index) in dishesM1" :key="index">
                        {{ option.nombre }}
                    </option>
                </select>
                <select id="selected1" v-else-if="tableElection == 'mesa2'" multiple aria-readonly="true">
                    <option :value="option.id" v-for="(option, index) in dishesM2" :key="index">
                        {{ option.nombre }}
                    </option>
                </select>
                <select id="selected1" v-else-if="tableElection == 'mesa3'" multiple aria-readonly="true">
                    <option :value="option.id" v-for="(option, index) in dishesM3" :key="index">
                        {{ option.nombre }}
                    </option>
                </select>
                <select id="selected1" v-else-if="tableElection == 'mesa4'" multiple aria-readonly="true">
                    <option :value="option.id" v-for="(option, index) in dishesM4" :key="index">
                        {{ option.nombre }}
                    </option>
                </select>
                <select id="selected1" v-else multiple aria-readonly="true">
                    <option :value="option.id" v-for="(option, index) in dishesM5" :key="index">
                        {{ option.nombre }}
                    </option>
                </select>
            </div>
        </div>
        <div class="options-panel">
            <!-- - - - - - - - - - - - - - - - -  -->
            <!-- OPCIONES DE ELEGIR CAFE Y/O COPA -->
            <!-- - - - - - - - - - - - - - - - -  -->
            <div class="options-checkbox">
                <div class="coffe-option">
                    <input type="checkbox" id="coffe" v-model="coffeElection">
                    <label for="coffe" v-if="coffeElection"> con café</label>
                    <label for="coffe" v-else> sin café</label>
                </div>
                <div class="cocktail-option">
                    <input type="checkbox" id="cocktail" v-model="cocktailElection">
                    <label for="cocktail" v-if="cocktailElection"> con copa</label>
                    <label for="cocktail" v-else> sin copa</label>
                </div>
            </div>
            <!-- - - - - - - - - - - - - - - - - - - - - - -   -->
            <!-- DINERO A PAGAR TOTAL DE LA CUENTA DE UNA MESA -->
            <!-- - - - - - - - - - - - - - - - - - - - - - -   -->
            <div class="payment">
                <div class="price">
                    <label for="price">Total: </label>
                    <input type="text" id="price" v-if="tableElection == 'mesa1'" :value="totalM1" readonly>
                    <input type="text" id="price" v-else-if="tableElection == 'mesa2'" :value="totalM2" readonly>
                    <input type="text" id="price" v-else-if="tableElection == 'mesa3'" :value="totalM3" readonly>
                    <input type="text" id="price" v-else-if="tableElection == 'mesa4'" :value="totalM4" readonly>
                    <input type="text" id="price" v-else :value="totalM5" readonly>
                </div>
                <div class="pay">
                    <button id="paid" @click="payTable()">Pagado</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "componenteRestaurante",

    components: {

    },

    data(){
        return {

            //Elecciones que se pueden hacer
            tableElection: 'mesa1',
            typeElection: 'primero',
            dishElection: [],
            coffeElection: false,
            cocktailElection: false,

            //Precio de la cuenta de la mesa
            totalM1: 0,
            totalM2: 0,
            totalM3: 0,
            totalM4: 0,
            totalM5: 0,

            //Array con los platos de las mesas
            dishesM1: [],
            dishesM2: [],
            dishesM3: [],
            dishesM4: [],
            dishesM5: [],

            //Arrays de opciones a elegir de los diferentes componentes
            //SI NO FUNCIONA PONER UN ID QUE SEA EL INDEX DE CADA UNO Y SACAR LOS PLATOS A PARTIR DE AHI
            //BUSCAR OTRA OPCION MEJOR, ¿SE PUEDE PASAR DIRECTAMENTE EL OBJETO ELEGIDO EN UN <SELECT></SELECT>?
            dishOptions: [
                {id: 'primero', nombre: 'Primeros platos'},
                {id: 'segundo', nombre: 'Segundos platos'},
                {id: 'postre', nombre: 'Postres'}
            ],
            tableOptions: [
                {id: 'mesa1', nombre: 'Mesa 1'},
                {id: 'mesa2', nombre: 'Mesa 2'},
                {id: 'mesa3', nombre: 'Mesa 3'},
                {id: 'mesa4', nombre: 'Mesa 4'},
                {id: 'mesa5', nombre: 'Mesa 5'}
            ],
            firstOptions: [
                {id: 1, nombre: "Sopa de fideos", precio: 4},
                {id: 2, nombre: "Ensalada de la casa", precio: 3},
                {id: 3, nombre: "Macarrones bolognesa", precio: 5},
                {id: 4, nombre: "Pure de verduras", precio: 2},
                {id: 5, nombre: "Entremeses", precio: 5},
            ],
            secondOptions: [
                {id: 1, nombre: "Solomillo", precio: 10},
                {id: 2, nombre: "Bacalao con patatas", precio: 7},
                {id: 3, nombre: "Hamburguesa completa", precio: 7},
                {id: 4, nombre: "Pizza 4 quesos", precio: 8},
                {id: 5, nombre: "Costillas barbacoa", precio: 13},
                {id: 6, nombre: "Sandwich vegetal", precio: 6},
                {id: 7, nombre: "Parillada de verduras", precio: 8},
            ],
            dessertOptions: [
                {id: 1, nombre: "Arroz con leche", precio: 3},
                {id: 2, nombre: "Flan", precio: 2},
                {id: 3, nombre: "Fruta de temporada", precio: 2},
                {id: 4, nombre: "Natillas", precio: 4},
            ]
        }
    },

    methods: {
        showDishes(dish){
            console.log(`Has seleccionado ${dish.nombre} - ${dish.id}`);
        },
        showTable(id){
            console.log(`Has seleccionado ${id}`);
        },
        addDish(id, type){
            var dish = {};

            if (type == 'primero') {
                dish = this.firstOptions[id-1];
            }else if(type == 'segundo') {
                dish = this.secondOptions[id-1];
            }else {
                dish = this.dessertOptions[id-1];
            }

            switch (this.tableElection) {
                case 'mesa1':
                    this.dishesM1.unshift({
                        id: dish.id,
                        nombre: dish.nombre,
                    })
                    this.totalM1 += dish.precio;
                    break;
                case 'mesa2':
                    this.dishesM2.unshift({
                        id: dish.id,
                        nombre: dish.nombre,
                    })
                    this.totalM2 += dish.precio;
                    break;
                case 'mesa3':
                    this.dishesM3.unshift({
                        id: dish.id,
                        nombre: dish.nombre,
                    })
                    this.totalM3 += dish.precio;
                    break;
                case 'mesa4':
                    this.dishesM4.unshift({
                        id: dish.id,
                        nombre: dish.nombre,
                    })
                    this.totalM4 += dish.precio;
                    break;
                case 'mesa5':
                    this.dishesM5.unshift({
                        id: dish.id,
                        nombre: dish.nombre,
                    })
                    this.totalM5 += dish.precio;
                    break;
                default:
                    console.log(`ERROR: Número de mesa incorrecto - valor ${this.tableElection}`);
                    break;
            }
        },
        payTable(){
            switch (this.tableElection) {
                case 'mesa1':
                    alert(`Se han pagado ${this.totalM1}€ en ${this.tableElection}`)
                    this.totalM1 = 0;
                    this.dishesM1 = [];
                    break;
                case 'mesa2':
                    alert(`Se han pagado ${this.totalM2}€ en ${this.tableElection}`)
                    this.totalM2 = 0;
                    this.dishesM2 = [];
                    break;
                case 'mesa3':
                    alert(`Se han pagado ${this.totalM3}€ en ${this.tableElection}`)
                    this.totalM3 = 0;
                    this.dishesM3 = [];
                    break;
                case 'mesa4':
                    alert(`Se han pagado ${this.totalM4}€ en ${this.tableElection}`)
                    this.totalM4 = 0;
                    this.dishesM4 = [];
                    break;
                case 'mesa5':
                    alert(`Se han pagado ${this.totalM5}€ en ${this.tableElection}`)
                    this.totalM5 = 0;
                    this.dishesM5 = [];
                    break;
                default:
                    console.log(`ERROR: Número de mesa incorrecto - valor ${this.tableElection}`);
                    break;
            }
        }
    },
}
</script>

<style>

</style>