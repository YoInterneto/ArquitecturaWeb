<template>
    <div class="userProfile">
        <div class="userPanel">
            <h1>@{{ user.username }} - {{ fullName }}</h1>
            <div class="userBadge" v-if="user.isAdmin">
                Admin
            </div>
            <div class="userBadge" v-else>
                No Admin
            </div>
            <div class="followerCount">
                <strong> Followersss: </strong> {{ followers }}
                <button @click="followUser()">Follow me</button>
            </div>
            <form class="user-newItem" @submit.prevent="createItem">

                <label for="newItem"><strong>NEW ITEM</strong></label>
                <textarea id="newItem" rows="4" v-model="itemContent"></textarea>

                <div class="user-newItemType">
                    <label for="newItemType"><strong>Type:</strong></label>
                    <select id="newItemType" v-model="selectedOption">
                        <option :value="option.value" v-for="(option, index) in itemType" :key="index">
                            {{ option.name }}
                        </option>
                    </select>
                </div>

                <button>
                    Submit
                </button>
            </form>
        </div>
    </div>
    <div class="userInfo">
        <infoItem 
            v-for="(statement, index) in user.info" 
            :key="index" 
            :username="user.username" 
            :item="statement"
            @favourite="toggleFavourite"
        />
    </div>
</template>

<script>
import infoItem from '@/components/infoItem';

export default {
    name: "userProfile",

    components: {
        infoItem
    },

    data() {
        return {

            selectedOption: 'draft', //esto es por ejemplo lo de la mesa, la opcion que tenemos elegida

            itemContent: '', //aqui seria un array con los platos

            itemType: [
                {value: 'draft', name: 'Draft'},
                {value: 'instant', name: 'Instant item'}
            ],

            followers: 0,

            user: {
                id: 1,
                username: 'YunggChino',
                first_name: 'Alberto',
                last_name: 'Gonzalez',
                email: 'albergonmar@gmail.com',
                isAdmin: false,
                info: [
                    {id: 1, content: 'My name is Alberto I am 20 years old'},
                    {id: 2, content: 'I am rn studying at the University'},
                ],
            }
        }
  },

  computed: {
    fullName() {
      return this.user.first_name + ' ' + this.user.last_name;
    }
  },

  methods: {
    followUser() {
        this.followers++;
    },

    toggleFavourite(id) {
        console.log(`A tweet has been marked as favourite #${id}`);
    },

    //esto es lo que tendriamos que hacer cada vez que el usuario hace doble click sobre un objeto de la lista
    createItem(){
        console.log(this.itemContent);
        if(this.itemContent && this.selectedOption !== 'draft'){
            this.user.info.unshift({
                id: this.user.info.length + 1,
                content: this.itemContent
            })
        }

        this.itemContent = ''
    }
  },

  mounted() {
    this.followUser();
  },

  watch: {
    followers(newFolloweCount, oldFollowerCount) {
      if(newFolloweCount > oldFollowerCount){
        console.log(this.user.username + ' has gained a follower');
      }
    }
  },

}
</script>

<style>

.userProfile {
    display: grid;
    grid-template-columns: 1fr 3fr;
    width: 100%;
    padding: 50px 5%;
}

.userPanel {
    display: flex;
    flex-direction: column;
    margin-right: 50px;
    padding: 20px;
    background-color: whitesmoke;
    border-radius: 5px;
    border: 1px solid gray;
}

.userBadge {
    background-color: blueviolet;
    color: beige;
    border-radius: 5px;
    margin-right: auto;
    padding: 0 10px;
    font-weight: bold;
}

.user-newItem{
    border-top: 1px solid black;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
}

h1 {
    margin: 0;
}

</style>