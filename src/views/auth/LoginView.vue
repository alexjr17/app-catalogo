<template>
    <div class="w-full h-screen flex justify-center items-center">
        <div class="h-auto w-auto bg-blue-400 p-6 rounded-xl">
            <div class="text-white text-4xl mb-3  flex justify-center">Login</div>
            <form @submit.prevent="submitLogin()" class="flex flex-col gap-3">
                <div class="flex flex-col">
                    <label>Usuario</label>
                    <input type="text" class="rounded-md px-2" v-model="user.email"/>
                </div>

                <div class="flex flex-col">
                    <label>Contraseña</label>
                    <input type="password" class="rounded-md" v-model="user.password"/>
                </div>
                <div class=" flex justify-center">
                    <Button class="bg-blue-600 p-1 rounded-lg">Enviar</Button>
                </div>
            </form>
            
        </div>
    </div>
</template>
<style>
/* h1{
    height: 0;
    left: 0;
} */
</style>
<script>
export default {
    data(){
        return {
            user:{
                email: '',
                password:''
            }
        }
    },
    methods:{
        async submitLogin(){
            try {
                await this.$store.dispatch('login', this.user);
                this.$router.push({name: 'panelAdmin'});
                console.log('inicio sesion');
            } catch (error) {
                console.log(error);
            }            
        }
    }
}
</script>