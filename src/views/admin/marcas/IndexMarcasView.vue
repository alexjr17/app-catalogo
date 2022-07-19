<template>
    <div class="flex flex-col gap-y-3">
        <div>
            <router-link :to="{name:'marcas.create'}">
                <button-component 
                    class="text-white"
                    icon="fa-plus"/>                
            </router-link>
            Nueva marca
        </div>
        <div >
            <table-component
                :items="items">
                    <tr v-for="marca in marcas.data" :key="marca" class="px-1 py-1 pl-4">
                        <td-component>
                            {{ marca.id }}
                        </td-component>
                        <td-component>
                            {{ marca.name }}
                        </td-component>
                        <td-component class="flex justify-center items-center">
                                <router-link :to="{name: 'marcas.edit', params:  {id: marca.id }}">
                                    <button-component 
                                        value="Editar"
                                        />
                                </router-link> |
                                <button-component 
                                        value="Delete"
                                        @click="delete_marca(marca.id)"
                                        />
                        </td-component>
                    </tr>
            </table-component>
        </div>     
        <div>
            <paginate-component 
            :last_page="marcas.last_page" 
            :current_page="marcas.current_page"
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
            items: ['N', 'Marca', '']
        }
    },
    computed: {
        ...mapGetters({
            marcas: 'marcas'
        })
    },
    created() {
        this.page_actual(!this.marcas ? 1 : this.marcas.current_page);
    },
    methods: {
        async page_actual(payload) {
            try {
                await this.$store.dispatch('pag_marcas', payload);
            } catch (error) {
                console.log(error);
            }
        },
        async delete_marca(id) {
            try {
                await this.$store.dispatch('delete_marca', id);
                this.page_actual(this.marcas.current_page);
            } catch (error) {
                console.log(error);
            }
        }
    }
}
</script>