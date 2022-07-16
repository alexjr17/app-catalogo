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
                                <button-component 
                                    value="Editar"/>
                            <a href="#"> | Delete</a>
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


export default {
    components:{
        ButtonComponent,
        PaginateComponent,
    },
    data() {
        return {
            marcas: []
        }
    },
    created() {
        this.page_actual(1);
    },
    methods: {
        async page_actual(payload) {
            alert(payload);
            try {
                this.marcas = await this.$store.dispatch('pag_marcas', payload);
            } catch (error) {
                console.log(error);
            }
        },
    }
}
</script>