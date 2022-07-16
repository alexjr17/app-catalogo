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
    props: {
        last_page: {
            type: Number,
            required: true
        },
        current_page: {
            type:Number,
            required: true
        }
    },
    computed: {
        current() {
            return this.current_page;
        },
        last() {
            return this.last_page;
        }
    },
    methods: {
        page_actual(i) {
            alert(i)
            this.$emit('page', i);
        },
        next() {
            alert(++this.current)
            if(this.current_page < this.last_page) {
                this.$emit('page', ++this.current);
            }
        },
        prev() {
            alert(--this.current)
            if(this.current_page != 1) {
                this.$emit('page', --this.current);
            }
        }
    },
}
</script>