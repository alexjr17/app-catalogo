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
        
        // -------
        // marcas
        // -------

        pag_marcas(pag) {
            return api.get(`api/marcas?page=${pag}`);
        },
        store_marca(params){
            return api.post('api/marcas', params);
        },
        get_marca(id){
            return api.get(`api/marcas/${id}/edit`);
        },
        update_marca(params){
            alert('repository '+JSON.stringify(params));
            return api.put(`api/marcas/${params.id}`, params);
        },
        delete_marca(id) {
            return api.delete(`api/marcas/${id}`);
        },
        get_marcas() {
            return api.get('api/marcas/get_marcas');
        },

        // ----------
        // productos
        // ----------

        pag_productos(pag) {
            return api.get(`api/productos?page=${pag}`);
        },
        store_producto(params){
            return api.post('api/productos', params);
        },
        get_producto(id){
            return api.get(`api/productos/${id}/edit`);
        },
        update_producto(params){
            // alert('repository '+JSON.stringify(params));
            return api.put(`api/productos/${params.id}`, params);
        },
        delete_producto(id) {
            return api.delete(`api/productos/${id}`);
        },
    }