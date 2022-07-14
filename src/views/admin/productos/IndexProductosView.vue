<template>
    <div class="flex flex-col">
        <div>
            <router-link :to="{name:'productos.create'}">
                <button-component 
                    class="text-white"
                    icon="fa-plus"/>                
            </router-link>
            Nuevo producto
        </div>       

        <div>
            index producto
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