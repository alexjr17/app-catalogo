<template>
    <h1 class="p-4 shadow">Crear Producto</h1>
    <div class="shadow p-3">
        <form-component @onSubmit="submitUpdate">
            <template #form>
                <div>
                    <label-component 
                        value="Nombre"/>
                    <input-component 
                        v-model="producto.name"/>
                </div>
                <div class="w-full">
                    <label-component 
                        value="Talla"/>
                    <select v-model="producto.size">
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                    </select>
                </div>
                <div>
                    <label-component 
                        value="observaciones"/>
                    <input-component
                        v-model="producto.observations"/>
                </div>
                <div class="w-full">
                    <label-component 
                        value="Marca"/>
                    <select v-model="producto.marca_id">
                        <option v-for="marca in marcas" :key="marca.id"
                            :value="marca.id">
                            {{marca.name}}
                        </option>
                    </select>
                </div>
                <div>
                    <label-component 
                        value="Inventrio"/>
                    <input-component 
                        type="number"
                        v-model="producto.inventory"/>
                </div>
                <div>
                    <label-component 
                        value="Embarque"/>
                    <input-component 
                        type="date"
                        v-model="producto.date"/>
                </div>
            </template>
            <template #actions>
                <div>
                    <button-component 
                        value="Guardar"
                        type="submit"/>
                </div>
            </template>
        </form-component>
        {{producto}}
    </div>
</template>

<script>
import FormComponent from '../../../components/FormComponent.vue'
import LabelComponent from '../../../components/forms/LabelComponent.vue'
import InputComponent from '../../../components/forms/InputComponent.vue'
import ButtonComponent from '../../../components/ButtonComponent.vue'

export default {
    components: {
        FormComponent,
        LabelComponent,
        InputComponent,
        ButtonComponent
    },
    data() {
        return {
            producto: {
                name: '',
                size: '',
                observations: '',
                marca_id: '',
                inventory: '',
                date: '',
            },
            marcas: []
        }
    },
    created() {
        this.get_marcas();        
    },
    methods: {
        async get_marcas() {
            try {
                this.marcas = await this.$store.dispatch('get_marcas');
                this.get_producto();
            } catch (error) {
                console.log(error);
            }
        },
        async get_producto() {
            try {
                this.producto = await this.$store.dispatch('get_producto', this.$route.params['id']);
            } catch (error) {
                console.log(error);
            }
        },
        async submitUpdate() {
            try {
                await this.$store.dispatch('update_producto', this.producto);
            } catch (error) {
                console.log(error);
            }
        }
    },
}
</script>