import middleware from './middleware';
export default [
    {
        path: '/login', 
        name: 'login',
        components: {
            Login: () => import('../views/auth/LoginView.vue'),
        },
        beforeEnter: middleware.user
    }
];