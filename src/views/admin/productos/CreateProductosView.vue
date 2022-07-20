<template>
    <h1 class="p-4 shadow">Crear Producto</h1>
    <div class="shadow p-3">
        <form-producto
            @onSubmit="submitCreate"
            name_button="Crear">

        </form-producto>
    </div>
</template>

<script>
import FormProducto from './partials/FormProductoView.vue'
export default {
    components: {
        FormProducto
    },
    methods: {
        async submitCreate(payload) {
            try {
                await this.$store.dispatch('store_producto', payload);
                this.$router.push({name: 'productos.index'});
            } catch (error) {
                console.log(error);
            }
        }
    },
}
</script>