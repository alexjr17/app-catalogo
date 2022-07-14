<template>
    <div class="flex flex-col">
        <div>
            <router-link :to="{name:'marcas.create'}">
                <button-component 
                    class="text-white"
                    icon="fa-plus"/>                
            </router-link>
            Nueva marca
        </div>       

        <div>
            index marcas
        </div>
    </div>
</template>

<script>
import ButtonComponent from '../../../components/ButtonComponent.vue'
export default {
    components:{
        ButtonComponent
    }
}
</script>