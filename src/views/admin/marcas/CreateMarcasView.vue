<template>
    <h1 class="p-4 shadow">Crear Marca</h1>
    <div class="p-4 shadow">
       <FormComponent @onSubmit="submitCreate">
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
                    value="Guardar"
                    type="submit" />
            </template>
        </FormComponent>
    </div>
</template>

<script>
import FormComponent from '@/components/FormComponent.vue'
import InputComponent from '@/components/forms/InputComponent.vue'
import LabelComponent from '@/components/forms/LabelComponent.vue'
import ButtonComponent from '@/components/ButtonComponent.vue'
export default {
    data() {
        return {
            marca: {
                name: ''
            }
        }
    },
    components: {
        FormComponent,
        InputComponent,
        LabelComponent,
        ButtonComponent
    },
    methods: {
        async submitCreate() {
            try {
                await this.$store.dispatch('store_marca', this.marca);
            } catch (error) {
                console.log(error);
            }
        }
    },
}
</script>