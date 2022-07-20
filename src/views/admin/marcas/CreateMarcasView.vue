<template>
    <h1 class="p-4 shadow">Crear Marca</h1>
    <div class="p-4 shadow">
       <FormMarca 
        @onSubmit = "submitCreate"
        name_button = "Crear"
        ></FormMarca>
    </div>
</template>

<script>
import FormMarca from './partials/FormMarcaView.vue';
export default {
    components:{
        FormMarca
    },
    methods: {
        async submitCreate(payload) {
            try {
                await this.$store.dispatch('store_marca', payload);
                this.$router.push({name: 'marcas.index'});
            } catch (error) {
                console.log(error);
            }
        }
    },
}
</script>