<template>
    <div>
        edit marcas {{marca}}
    </div>
</template>

<script>
import repository from '@/api/repository';

export default {
    data() {
        return {
            marca: []
        }
    },
    mounted() {
        this.get_marca();
    },
    methods: {
        async get_marca() {
            try {
                this.marca = await repository.get_marca(this.$route.params['id']);
            } catch (error) {
                console.log(error);
            }
        }
    },
}
</script>