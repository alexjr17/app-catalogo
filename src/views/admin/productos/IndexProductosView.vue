<template>
    <div class="flex flex-col gap-y-3">
        <div>
            <router-link :to="{name:'productos.create'}">
                <button-component 
                    class="text-white"
                    icon="fa-plus"/>                
            </router-link>
            Nueva Producto
        </div>
        <div >
            <table-component
                :items="items">
                    <tr v-for="producto in productos.data" :key="producto" class="px-1 py-1 pl-4">
                        <td-component>
                            {{ producto.id }}
                        </td-component>
                        <td-component>
                            {{ producto.name }}
                        </td-component>
                        <td-component>
                            {{ producto.size }}
                        </td-component>
                        <td-component>
                            {{ producto.observations }}
                        </td-component>
                        <td-component>
                            {{ producto.marca ? producto.marca['name'] : ''}}
                        </td-component>
                        <td-component>
                            {{ producto.inventory }}
                        </td-component>
                        <td-component>
                            {{ producto.date }}
                        </td-component>
                        <td-component class="flex justify-center items-center">
                                <button-component 
                                    value="Editar"
                                    @click="get_producto(producto)"
                                    />
                                |
                                <button-component 
                                        value="Delete"
                                        @click="delete_producto(producto.id)"
                                        />
                        </td-component>
                    </tr>
            </table-component>
        </div>     
        <div>
            <paginate-component 
            :last_page="productos.last_page" 
            :current_page="productos.current_page"
            @page="page_actual"/>
        </div>
        <modal-component :show="showModal" 
            @close="showModal = !showModal">

            <template #header>
                <h3>Editar Producto</h3>
            </template>

            <template #body>
                <form-producto-view
                    name_button="Actualizar"
                    :get_producto="this.producto"
                    @onSubmit="submitUpdate">
                    <template #cancelar>
                        <button-component 
                            value="Cancelar"
                            @click="showModal = !showModal"/>
                    </template>
                </form-producto-view>
            </template>
        </modal-component>
        <ConfirmToastComponent/>
    </div>
</template>

<script>
import ButtonComponent from '../../../components/ButtonComponent.vue'
import PaginateComponent from '@/components/PaginateComponent.vue';
import TableComponent from '@/components/TableComponent.vue';
import tdComponent from '@/components/table/tdComponent.vue'
import ModalComponent from '@/components/ModalComponent.vue';
import FormProductoView from './partials/FormProductoView.vue';
import ConfirmToastComponent from '@/components/ConfirmToastComponent.vue';
import { mapGetters } from 'vuex';

export default {
    components:{
        ButtonComponent,
        PaginateComponent,
        TableComponent,
        tdComponent,
        ModalComponent,
        FormProductoView,
        ConfirmToastComponent
    },
    data(){
        return {
            items: ['N', 'Nombre', 'Talla', 'Observaciones', 'Marca', 'Inventario', 'Embarque', ''],
            showModal: false,
            showAlert: true,
            producto: []
        }
    },
    computed: {
        ...mapGetters({
            productos: 'productos'
        })
    },
    created() {
        this.page_actual(!this.productos ? 1 : this.productos.current_page);
    },
    methods: {
        async page_actual(payload) {
            try {
                await this.$store.dispatch('pag_productos', payload);
            } catch (error) {
                console.log(error);
            }
        },
        async get_producto(producto) {
            this.showModal = ! this.showModal;
            this.producto = producto;            
            // try {
            //     this.producto = await this.$store.dispatch('get_producto', id);
            // } catch (error) {
            //     console.log(error);
            // }
        },
        async submitUpdate(payload) {
            try {
                await this.$store.dispatch('update_producto', payload);
                this.page_actual(this.productos.current_page);
                this.showModal = ! this.showModal;
            } catch (error) {
                console.log(error);
            }
        },
        async delete_producto(id) {
            if(confirm('Desea eliminar?')){
                try {
                    await this.$store.dispatch('delete_producto', id);
                    this.page_actual(this.productos.current_page);
                } catch (error) {
                    console.log(error);
                }
            } else {
                alert('Cancelar Eliminacion');
            }
        }
    }
}
</script>