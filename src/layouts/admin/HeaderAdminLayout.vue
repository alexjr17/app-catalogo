<template>
    <div class="h-12 w-full bg-blue-600 flex justify-between items-center px-4">
        <button class="text-3xl text-white flex-none" @click="$emit('clickNav')">
            <font-awesome-icon icon="fa-bars"></font-awesome-icon>
        </button>
        <div class="flex flex-row gap-x-6 static ml-3">
            <p>{{user}}</p>
            <button class="" @click="show = !show">
                <font-awesome-icon icon="fa-solid fa-square-caret-down" />
            </button>
            <div class="absolute inset-0" v-if="show" @click="show = !show"></div>
            <div class="absolute right-0 mt-10 w-48 rounded-md shadow-lg py-1 bg-white ring-1" v-if="show">
                <a href="#" class="block px-4 py-2 text-sm" @click="logout()">Cerrar cesion</a>
            </div>            
        </div>
        
    </div>
</template>

<script>
// import ButtonComponent from '@/components/ButtonComponent.vue'
import { mapGetters } from 'vuex';
export default {
    data() {
        return {
            show: false
        }
    },
    components: {
        // ButtonComponent
    },
    methods: {
        async logout() {
            try {
                await this.$store.dispatch('logout');
                this.$router.push({name: 'login'});
                console.log('sesion cerrada');
            } catch (error) {
                console.log(error);
            }
        }
    },
    computed:{
      ...mapGetters({
        user: 'user',
      })
    }
}
</script>