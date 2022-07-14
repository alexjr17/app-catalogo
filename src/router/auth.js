export default [
    {
        path: '/login', 
        name: 'Login',
        components: {
            Login: () => import('../views/auth/LoginView.vue'),
        },
    }
];