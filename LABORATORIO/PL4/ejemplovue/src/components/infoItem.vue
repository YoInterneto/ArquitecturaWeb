<template>
    <div class="item-object" @click="favouriteItem(item.id)">
        <div class="user-profile-item">
            <div class="item-user">
                @{{ username }}
            </div>
            <div class="item-content" v-if="item.id == 1">
                *** {{ item.content }} ***
            </div>
            <div class="item-content" v-else>
                {{ item.content }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "infoItem",

    props: {
        username: {
            type: String,
            required: true
        },

        item: {
            type: Object,
            required: true
        }
    },

    methods: {
        favouriteItem(id){
            this.$emit('favourite', id);
        }
    }
}
</script>

<style>

.item-object{
    padding: 20px;
    background-color: white;
    border-radius: 5px;
    border: 1px solid gray;
    box-sizing: border-box;
    cursor: pointer;
    transition: all 0.25s ease;
}

.item:hover{
    transform: scale(1.1, 1.1);
}

.item-user{
    font-weight: bold;
}

</style>