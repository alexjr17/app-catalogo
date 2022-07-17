<template>
    <div class="flex flex-col">
        <div>
            <router-link :to="{name:'marcas.create'}">
                <button-component 
                    class="text-white"
                    icon="fa-plus"/>                
            </router-link>
            Nueva marca
        </div>       

        <table class="">
            <thead>
                <tr>
                    <th>N</th>
                    <th>Marca</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>                
                <tr v-for="marca in marcas.data" :key="marca">
                    <td>{{ marca.id }}</td>
                    <td>{{ marca.name }}</td>
                    <td>
                        <div>
                            <router-link :to="{name: 'marcas.edit', params:  {id: marca.id }}">
                                <button-component 
                                    value="Editar"
                                    />
                            </router-link>
                            <a href="#" @click="delete_marca(marca.id)"> | Delete</a>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        <paginate-component 
            :last_page="marcas.last_page" 
            :current_page="marcas.current_page"
            @page="page_actual"/>
    </div>
</template>

<script>
import ButtonComponent from '../../../components/ButtonComponent.vue'
import PaginateComponent from '@/components/PaginateComponent.vue';
import { mapGetters } from 'vuex';

export default {
    components:{
        ButtonComponent,
        PaginateComponent,
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
                this.marcas = await this.$store.dispatch('pag_marcas', payload);
            } catch (error) {
                console.log(error);
            }
        },
        // async edit_marca(id_marca){
        //     try {
        //         await this.$router.push({name: 'marcas.edit', params:  {id: id_marca }});
        //     }catch (error) {
        //         console.log(error);
        //     }
        // },
        async delete_marca(id) {
            try {
                await this.$store.dispatch('delete_marca', id);
                this.page_actual();
            } catch (error) {
                console.log(error);
            }
        }
    }
}
</script>