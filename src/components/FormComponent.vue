<template>
    <div class="mt-2 w-auto grow">
        <form @submit.prevent="$emit('onSubmit')" class="w-full">
            <div class="w-full">
                <slot name="form" />
            </div>
            <div v-if="hasActions" class="flex items-center justify-end px-4 py-3 text-right sm:px-6 sm:rounded-bl-md sm:rounded-br-md">
                <slot name="actions" />
            </div>
        </form>
    </div>
</template>
<script>

export default {
    emits:['onSubmit'],
    computed: {
        hasActions(){
            return !! this.$slots.actions;
        }
    }
}
</script>