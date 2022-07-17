<template>
    <div class="flex flex-row grow justify-end">
            <button class="bg-white px-3 py-2 flex items-center rounded-l-lg" @click="prev()">prev</button>
            <div v-for="i in last_page" :key="i">
                <button class="px-3 py-2 flex items-center"
                    :class="current_page == i ?'bg-blue-500' : 'bg-white'"
                    @click="page_actual(i)">
                    {{i}}
                </button>
            </div>
            <button class="bg-white px-3 py-2 flex items-center rounded-r-lg" @click="next()">next</button>
        </div>
</template>

<script>
export default {
    name: "MyComponent",
    props: {
        last_page: Number,
        current_page: Number
    },
    watch: {
        last_page: function (newValue, oldValue) {
        console.log("newValue: %s, previousValue: %s", newValue, oldValue);
        },
        current_page: function (newValue, oldValue) {
        console.log("newValue: %s, previousValue: %s", newValue, oldValue);
        },
    },
    methods: {
        page_actual(i) {
            // alert('click numero pagina');
            this.$emit('page', i);
        },
        next() {
            // alert(`click a next`);
            if(this.current_page < this.last_page) {
                let page = this.current_page;
                this.$emit('page', ++page);
            }
        },
        prev() {
            // alert(`click a prev`);
            if(this.current_page != 1) {
                let page = this.current_page;
                this.$emit('page', --page);
            }
        }
    },
}
</script>