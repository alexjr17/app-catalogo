<template>
    <FormComponent @onSubmit="$emit('onSubmit', this.marca)">
            <template #form>
                <div>
                    <label-component value="Marca"/>
                    <input-component 
                        v-model="marca.name"
                    />
                </div>
            </template>
            <template #actions>
                <button-component 
                    :value="name_button"
                    type="submit" />
                <slot name="cancelar" v-if="hasCancelar">
                </slot>                
            </template>
        </FormComponent>
</template>

<script>
import FormComponent from '@/components/FormComponent.vue';
import InputComponent from '@/components/forms/InputComponent.vue'
import LabelComponent from '@/components/forms/LabelComponent.vue'
import ButtonComponent from '@/components/ButtonComponent.vue'
export default {
    components: {
        FormComponent,
        InputComponent,
        LabelComponent,
        ButtonComponent
    },
    props:{
        name_button: {
            type: String,
            required: true
        },
        get_marca:{
            required: false,
            default: ''
        }
    },
    watch: {
        get_marca: function () {
            this.marca = this.get_marca;
        },
    },
    created() {
        if(this.get_marca) {
            this.marca = this.get_marca;
        }
    },
    data() {
        return {
            marca: {
                name: ''
            }
        }
    },
    computed: {
        hasCancelar(){
            return !! this.$slots.cancelar;
        }
    }
}
</script>