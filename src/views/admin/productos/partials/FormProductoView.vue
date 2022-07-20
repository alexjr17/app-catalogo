<template>
    <form-component @onSubmit="$emit('onSubmit', this.producto)">
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
                    :value="name_button"
                    type="submit"/>
                <slot name="cancelar" v-if="hasCancelar">
                </slot>
            </div>
        </template>
    </form-component>
    {{producto}}
</template>

<script>
import FormComponent from '@/components/FormComponent.vue'
import LabelComponent from '@/components/forms/LabelComponent.vue'
import InputComponent from '@/components/forms/InputComponent.vue'
import ButtonComponent from '@/components/ButtonComponent.vue'
export default {
    components: {
        FormComponent,
        LabelComponent,
        InputComponent,
        ButtonComponent
    },
    props: {
        get_producto:{
            required: false,
            default: ''
        },
        name_button: {
            type: String,
            required: true
        }
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
    // watch: {
    //     get_producto: function () {
    //         this.producto= this.get_producto;
    //     },
    // },
    computed: {
        hasCancelar(){
            return !! this.$slots.cancelar;
        }
    },
    created() {
        if(this.get_producto) {
            this.producto = this.get_producto;
        }
        this.get_marcas();
    },
    methods: {
        async get_marcas() {
            try {
                this.marcas = await this.$store.dispatch('get_marcas');
            } catch (error) {
                console.log(error);
            }
        }
    },
}
</script>