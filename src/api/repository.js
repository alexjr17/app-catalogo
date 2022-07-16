import api from './api'

export default 
    {
        tokenSession(){
            return api.get('/sanctum/csrf-cookie');
        },
        login(params){
            return api.post('/login', params);

        },
        logout(){
            return api.post('/logout');
        },
        get_user() {
            return api.get('api/user');
        },
        all_marcas() {
            return api.get(`api/marcas`);
        },
        pag_marcas(pag) {
            return api.get(`api/marcas?page=${pag}`);
        }
    }