<template>
    <div class="principal-panel">
        <div class="table-dish-election">
            <!-- - - - - - - - - - - - - - - -->
            <!-- ELECCION DEL NUMERO DE MESA -->
            <!-- - - - - - - - - - - - - - - -->
            <div class="choose-table">
                <select id="table" v-model="tableElection">
                    <option :value="option.id" v-for="(option, index) in tableOptions" :key="index">
                        {{ option.name }}
                    </option>
                </select>
            </div>
            <!-- - - - - - - - - - - - - -  -->
            <!-- ELECCION DEL TIPO DE PLATO -->
            <!-- - - - - - - - - - - - - -  -->
            <div class="choose-dish" v-for="(option, index) in dishOptions" :key="index">
                <input type="radio" name="dish" :value="option.id" v-model="typeElection">
                {{option.name}}
            </div>
        </div>
        <div class="dishes-panel">
            <!-- - - - - - - - - - - - - - - - - - - - - - - - - -->
            <!-- MUESTRA LAS OPCIONES DE ELECCION DE UN TIPO PLATO Y DA OPCION DE ELEGIR-->
            <!-- - - - - - - - - - - - - - - - - - - - - - - - - -->
            <div class="option-panel">
                <optionDishes v-if="typeElection == 'primero'"
                    :dishes = this.firstOptions
                    @add="addDish"
                />
                <optionDishes v-else-if="typeElection == 'segundo'"
                    :dishes = this.secondOptions
                    @add="addDish"
                />
                <optionDishes v-else
                    :dishes = this.dessertOptions
                    @add="addDish"
                />
            </div>
            <!-- - - - - - - - - - - - - - - - - - - -  -->
            <!-- MUESTRA LOS PLATOS ELEGIDOS POR UNA MESA -->
            <!-- - - - - - - - - - - - - - - - - - - -  -->
            <div class="selected-panel">
                <selectedDishes v-if="this.tableElection == 'mesa1'" :dishes = this.dishesM1></selectedDishes>
                <selectedDishes v-else-if="this.tableElection == 'mesa2'" :dishes = this.dishesM2></selectedDishes>
                <selectedDishes v-else-if="this.tableElection == 'mesa3'" :dishes = this.dishesM3></selectedDishes>
                <selectedDishes v-else-if="this.tableElection == 'mesa4'" :dishes = this.dishesM4></selectedDishes>
                <selectedDishes v-else :dishes = this.dishesM5></selectedDishes>
            </div>
        </div>
        <div class="options-panel">
            <!-- - - - - - - - - - - - - - - - -  -->
            <!-- OPCIONES DE ELEGIR CAFE Y/O COPA -->
            <!-- - - - - - - - - - - - - - - - -  -->
            <div class="options-checkbox">
                <div class="coffe-option">
                    <optionCoffe v-if="this.tableElection == 'mesa1'"
                        :coffeValue = coffeValue1
                        @changecoffe="toggleCoffe"
                    />
                    <optionCoffe v-else-if="this.tableElection == 'mesa2'"
                        :coffeValue = coffeValue2
                        @changecoffe="toggleCoffe"
                    />
                    <optionCoffe v-else-if="this.tableElection == 'mesa3'"
                        :coffeValue = coffeValue3
                        @changecoffe="toggleCoffe"
                    />
                    <optionCoffe v-else-if="this.tableElection == 'mesa4'"
                        :coffeValue = coffeValue4
                        @changecoffe="toggleCoffe"
                    />
                    <optionCoffe v-else
                        :coffeValue = coffeValue5
                        @changecoffe="toggleCoffe"
                    />
                </div>
                <div class="cocktail-option">
                    <optionCocktail v-if="this.tableElection == 'mesa1'"
                        :cocktailValue = cocktailValue1
                        @changecocktail="toggleCocktail"
                    />
                    <optionCocktail v-else-if="this.tableElection == 'mesa2'"
                        :cocktailValue = cocktailValue2
                        @changecocktail="toggleCocktail"
                    />
                    <optionCocktail v-else-if="this.tableElection == 'mesa3'"
                        :cocktailValue = cocktailValue3
                        @changecocktail="toggleCocktail"
                    />
                    <optionCocktail v-else-if="this.tableElection == 'mesa4'"
                        :cocktailValue = cocktailValue4
                        @changecocktail="toggleCocktail"
                    />
                    <optionCocktail v-else
                        :cocktailValue = cocktailValue5
                        @changecocktail="toggleCocktail"
                    />
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
import selectedDishes from '@/components/selectedDishes'
import optionDishes from '@/components/optionDishes'
import optionCoffe from '@/components/optionCoffe'
import optionCocktail from '@/components/optionCocktail'

export default {
    name: "componenteRestaurante",

    components: {
        selectedDishes,
        optionDishes,
        optionCoffe,
        optionCocktail,
    },

    data(){
        return {

            //Elecciones que se pueden hacer
            tableElection: 'mesa1',
            typeElection: 'primero',
            dishElection: [],

            //price de la cuenta de la mesa
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

            //Valores de los checkbox
            coffeValue1: false,
            coffeValue2: false,
            coffeValue3: false,
            coffeValue4: false,
            coffeValue5: false,
            cocktailValue1: false,
            cocktailValue2: false,
            cocktailValue3: false,
            cocktailValue4: false,
            cocktailValue5: false,

            //Arrays de opciones a elegir de los diferentes componentes
            //SI NO FUNCIONA PONER UN ID QUE SEA EL INDEX DE CADA UNO Y SACAR LOS PLATOS A PARTIR DE AHI
            //BUSCAR OTRA OPCION MEJOR, ¿SE PUEDE PASAR DIRECTAMENTE EL OBJETO ELEGIDO EN UN <SELECT></SELECT>?
            dishOptions: [
                {id: 'primero', name: 'Primeros platos'},
                {id: 'segundo', name: 'Segundos platos'},
                {id: 'postre', name: 'Postres'}
            ],
            tableOptions: [
                {id: 'mesa1', name: 'Mesa 1'},
                {id: 'mesa2', name: 'Mesa 2'},
                {id: 'mesa3', name: 'Mesa 3'},
                {id: 'mesa4', name: 'Mesa 4'},
                {id: 'mesa5', name: 'Mesa 5'}
            ],
            firstOptions: [
                {id: 1, name: "Sopa de fideos", price: 4},
                {id: 2, name: "Ensalada de la casa", price: 3},
                {id: 3, name: "Macarrones bolognesa", price: 5},
                {id: 4, name: "Pure de verduras", price: 2},
                {id: 5, name: "Entremeses", price: 5},
            ],
            secondOptions: [
                {id: 1, name: "Solomillo", price: 10},
                {id: 2, name: "Bacalao con patatas", price: 7},
                {id: 3, name: "Hamburguesa completa", price: 7},
                {id: 4, name: "Pizza 4 quesos", price: 8},
                {id: 5, name: "Costillas barbacoa", price: 13},
                {id: 6, name: "Sandwich vegetal", price: 6},
                {id: 7, name: "Parillada de verduras", price: 8},
            ],
            dessertOptions: [
                {id: 1, name: "Arroz con leche", price: 3},
                {id: 2, name: "Flan", price: 2},
                {id: 3, name: "Fruta de temporada", price: 2},
                {id: 4, name: "Natillas", price: 4},
            ]
        }
    },

    methods: {
        showDishes(dish){
            console.log(`Has seleccionado ${dish.name} - ${dish.id}`);
        },
        showTable(id){
            console.log(`Has seleccionado ${id}`);
        },
        addDish(dishSelected){
            switch (this.tableElection) {
                case 'mesa1':
                    this.totalM1 += dishSelected.price;
                    this.dishesM1.unshift({
                        id: dishSelected.id,
                        name: dishSelected.name,
                    });
                    break;
                case 'mesa2':
                    this.totalM2 += dishSelected.price;
                    this.dishesM2.unshift({
                        id: dishSelected.id,
                        name: dishSelected.name,
                    });
                    break;
                case 'mesa3':
                    this.totalM3 += dishSelected.price;
                    this.dishesM3.unshift({
                        id: dishSelected.id,
                        name: dishSelected.name,
                    });
                    break;
                case 'mesa4':
                    this.totalM4 += dishSelected.price;
                    this.dishesM4.unshift({
                        id: dishSelected.id,
                        name: dishSelected.name,
                    });
                    break;
                case 'mesa5':
                    this.totalM5 += dishSelected.price;
                    this.dishesM5.unshift({
                        id: dishSelected.id,
                        name: dishSelected.name,
                    });
                    break;
                default:
                    console.log(`ERROR: Número de mesa incorrecto - valor ${this.tableElection}`);
                    break;
            }
        },
        payTable(){
            switch (this.tableElection) {
                case 'mesa1':
                    if (this.totalM1 == 0) {
                        alert(`No hay nada que pagar en ${this.tableElection}`)
                    } else {
                        alert(`Se han pagado ${this.totalM1}€ en ${this.tableElection}`)
                        this.totalM1 = 0;
                        this.dishesM1 = [];
                        this.coffeValue1 = false;
                        this.cocktailValue1 = false;
                    }
                    break;
                case 'mesa2':
                    if (this.totalM2 == 0) {
                        alert(`No hay nada que pagar en ${this.tableElection}`)
                    } else {
                        alert(`Se han pagado ${this.totalM2}€ en ${this.tableElection}`)
                        this.totalM2 = 0;
                        this.dishesM2 = [];
                        this.coffeValue2 = false;
                        this.cocktailValue2 = false;
                    }
                    break;
                case 'mesa3':
                    if (this.totalM3 == 0) {
                        alert(`No hay nada que pagar en ${this.tableElection}`)
                    } else {
                        alert(`Se han pagado ${this.totalM3}€ en ${this.tableElection}`)
                        this.totalM3 = 0;
                        this.dishesM3 = [];
                        this.coffeValue3 = false;
                        this.cocktailValue3 = false;
                    }
                    break;
                case 'mesa4':
                    if (this.totalM4 == 0) {
                        alert(`No hay nada que pagar en ${this.tableElection}`)
                    } else {
                        alert(`Se han pagado ${this.totalM4}€ en ${this.tableElection}`)
                        this.totalM4 = 0;
                        this.dishesM4 = [];
                        this.coffeValue4 = false;
                        this.cocktailValue4 = false;
                    }
                    break;
                case 'mesa5':
                    if (this.totalM5 == 0) {
                        alert(`No hay nada que pagar en ${this.tableElection}`)
                    } else {
                        alert(`Se han pagado ${this.totalM5}€ en ${this.tableElection}`)
                        this.totalM5 = 0;
                        this.dishesM5 = [];
                        this.coffeValue5 = false;
                        this.cocktailValue5 = false;
                    }
                    break;
                default:
                    console.log(`ERROR: Número de mesa incorrecto - valor ${this.tableElection}`);
                    break;
            }
        },
        toggleCoffe(){
            switch (this.tableElection){
                case 'mesa1':
                    this.coffeValue1 = !this.coffeValue1;
                    break;
                case 'mesa2':
                    this.coffeValue2 = !this.coffeValue2;
                    break;
                case 'mesa3':
                    this.coffeValue3 = !this.coffeValue3;
                    break;
                case 'mesa4':
                    this.coffeValue4 = !this.coffeValue4;
                    break;
                case 'mesa5':
                    this.coffeValue5 = !this.coffeValue5;
                    break;
                default:
                    console.log(`ERROR: Número de mesa incorrecto - valor ${this.tableElection}`);
                    break;
            }
        },
        toggleCocktail(){
            switch (this.tableElection){
                case 'mesa1':
                    this.cocktailValue1 = !this.cocktailValue1;
                    break;
                case 'mesa2':
                    this.cocktailValue2 = !this.cocktailValue2;
                    break;
                case 'mesa3':
                    this.cocktailValue3 = !this.cocktailValue3;
                    break;
                case 'mesa4':
                    this.cocktailValue4 = !this.cocktailValue4;
                    break;
                case 'mesa5':
                    this.cocktailValue5 = !this.cocktailValue5;
                    break;
                default:
                    console.log(`ERROR: Número de mesa incorrecto - valor ${this.tableElection}`);
                    break;
            }
        },
        assignType(value){
            this.typeElection = value;
        }
    },
}
</script>

<style>

</style>