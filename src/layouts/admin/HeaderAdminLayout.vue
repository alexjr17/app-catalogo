<template>
    <div class="h-12 w-full bg-blue-600 flex items-center px-4">
        <button class="text-3xl text-white flex-none" @click="$emit('clickNav')">
            <font-awesome-icon icon="fa-bars"></font-awesome-icon>
        </button>
    </div>
</template>