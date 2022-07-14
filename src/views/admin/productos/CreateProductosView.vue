<template>
    <h1 class="p-4 shadow">Crear Producto</h1>
    <div class="shadow p-3">
        <form-component>
            <template #form>
                <div>
                    <label-component 
                        value="Nombre"/>
                    <input-component 
                        />
                </div>
                <div class="w-full">
                    <label-component 
                        value="Talla"/>
                    <select name="" id="">
                        <option value="">S</option>
                        <option value="">M</option>
                        <option value="">L</option>
                    </select>
                </div>
                <div class="w-full">
                    <label-component 
                        value="Marca"/>
                    <select name="" id="">
                        <option value="">S</option>
                        <option value="">M</option>
                        <option value="">L</option>
                    </select>
                </div>
                <div>
                    <label-component 
                        value="Inventrio"/>
                    <input-component 
                        type="number"/>
                </div>
                <div>
                    <label-component 
                        value="Embarque"/>
                    <input-component 
                        type="date"/>
                </div>
            </template>
            <template #actions>
                <div>
                    <button-component 
                        value="Guardar"/>
                </div>
            </template>
        </form-component>
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
    }
}
</script>