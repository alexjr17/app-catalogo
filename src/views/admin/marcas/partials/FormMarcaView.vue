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
                <slot name="cancelar" v-if="hasActions">
                </slot>                
            </template>
        </FormComponent>
</template>

<script>
import FormComponent from '@/components/FormComponent.vue'
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
        hasActions(){
            return !! this.$slots.cancelar;
        }
    }
}
</script>