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
        // all_marcas() {
        //     return api.get(`api/marcas`);
        // },
        pag_marcas(pag) {
            return api.get(`api/marcas?page=${pag}`);
        },
        store_marca(params){
            return api.post('api/marcas', params);
        },
        get_marca(id){
            return api.get(`api/marcas/${id}/edit`);
        },
        update_marca(id, params) {
            return api.put(`api/marcas/${id}`, params);
        },
        delete_marca(id) {
            return api.delete(`api/marcas/${id}`);
        },
    }