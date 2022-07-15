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
                </tr>
            </thead>
            <tbody>                
                <tr v-for="marca in marcas.data" :key="marca">
                    <td>{{ marca.id }}</td>
                    <td>{{ marca.name }}</td>
                    <td>
                        <!-- <div>
                            <router-link>
                                <button-component 
                                    value="Editar"/>
                            </router-link>
                            <a href="#"> | Delete</a>
                        </div> -->
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import ButtonComponent from '../../../components/ButtonComponent.vue'
export default {
    components:{
        ButtonComponent
    },
    data() {
        return {
            marcas: []
        }
    },
    mounted() {
        this.all_marcas();
    },
    methods: {
        async all_marcas() {
            try {
                let marcas = await this.$store.dispatch('all_marcas');
                this.marcas = marcas;
            } catch (error) {
                console.log(error);
            }
        }
    },
}
</script>