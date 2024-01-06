<script setup>
const props = defineProps({
    post: {
        type: Object,
        required: true,
    }
})
console.log()
</script>

<template>
    <div class="card">
        <div class="card-content">
            <p class="title">
                {{ $props.post.headline }}
            </p>
            <p class="subtitle" v-if="$props.post.description">
                {{ $props.post.description }}
            </p>
        </div>
    </div>
</template>

<style lang="scss">
.card {
    width: 100%;

    &-content {
        display: flex;
        height: 100%;
        flex-direction: column;
        justify-content: space-between;
    }
}
</style>