import Marcas from './marcas.js'
import Productos from './productos.js'
export default [
    {
        path: '/panel/',
        name: 'panelAdmin',
        component: () => import('../../views/admin/DashboardAdminView.vue'),
        children:[
            {
                path: 'index',
                name: 'dashboard.index',
                component: () => import('../../views/admin/IndexAdminView.vue')
            }
        ].concat(
            Marcas,
            Productos
        )
    }
]