export default [
    {
        path: 'marcas',
        name: 'marcas.index',
        component: () => import('../../views/admin/marcas/IndexMarcasView.vue'),
        children: [
            
        ]
    },
    {
        path:'marcas/crear',
        name: 'marcas.create',
        component: () => import('../../views/admin/marcas/CreateMarcasView.vue')
    }
]