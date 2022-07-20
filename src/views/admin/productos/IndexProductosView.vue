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
                                <router-link :to="{name: 'productos.edit', params:  {id: producto.id }}">
                                    <button-component 
                                        value="Editar"
                                        />
                                </router-link> |
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
    </div>
</template>

<script>
import ButtonComponent from '../../../components/ButtonComponent.vue'
import PaginateComponent from '@/components/PaginateComponent.vue';
import TableComponent from '@/components/TableComponent.vue';
import tdComponent from '@/components/table/tdComponent.vue'
import { mapGetters } from 'vuex';

export default {
    components:{
        ButtonComponent,
        PaginateComponent,
        TableComponent,
        tdComponent
    },
    data(){
        return {
            items: ['N', 'Nombre', 'Talla', 'Observaciones', 'Marca', 'Inventario', 'Embarque', ''],
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
        async delete_producto(id) {
            try {
                await this.$store.dispatch('delete_producto', id);
                this.page_actual(this.productos.current_page);
            } catch (error) {
                console.log(error);
            }
        }
    }
}
</script>