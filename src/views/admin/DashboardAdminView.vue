<template>
    <div class="flex flex-row">
        <transition>
            <div class="bg-blue-400 h-screen" v-if="show">
                <div class="text-4xl py-4 px-12 flex flex-row gap-x-3 items-center">
                    <font-awesome-icon icon="fa-solid fa-gauge" />
                    <h1>Dashboard</h1>
                </div>                
                <div class="flex justify-center">
                    <ul class="flex flex-col gap-y-3 w-full mx-2">
                        <li class="bg-blue-500 rounded-md p-3 flex flex-row gap-x-3">
                            <font-awesome-icon icon="fa-solid fa-tags" />
                            <router-link :to="{name: 'marcas.index'}">Marcas</router-link>
                        </li>
                        <li class="bg-blue-500 rounded-md p-3 flex flex-row gap-x-3">
                            <font-awesome-icon icon="fa-solid fa-tags" />
                            <router-link :to="{name: 'productos.index'}">Productos</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </transition>
        
        <div class="flex flex-col grow">
            <header-admin-layout  @clickNav="showNav"/>
            <div class="p-4 h-auto">
                <main-admin-layout/>
            </div>
        </div>        
    </div>    
</template>

<script>
import MainAdminLayout from '@/layouts/admin/MainAdminLayout.vue';
import HeaderAdminLayout from '@/layouts/admin/HeaderAdminLayout.vue';
export default {
    data() {
        return {
            show: true
        }
    },
    
    components:{
        MainAdminLayout,
        HeaderAdminLayout
    },
    mounted() {
        this.$router.push({name: 'dashboard.index'});
    },
    props:{
        navSlider:{
            type: Boolean,
            default: false
        }
    },
    methods: {
        showNav(){
            this.show = !this.show;          
        }
    },
}
</script>