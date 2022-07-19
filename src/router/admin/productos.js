export default [
    {
        path: 'productos',
        name: 'productos.index',
        component: () => import('../../views/admin/productos/IndexProductosView.vue')
    },
    {
        path: 'productos/crear',
        name: 'productos.create',
        component: () => import('../../views/admin/productos/CreateProductosView.vue')
    },
    {
        path: 'productos/edit/:id',
        name: 'productos.edit',
        component: () => import('../../views/admin/productos/EditProductosView.vue'),
    }
]