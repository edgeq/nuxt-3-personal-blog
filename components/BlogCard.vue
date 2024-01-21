<script setup>
import { useDateFormat } from '@vueuse/core'

const props = defineProps({
    post: {
        type: Object,
        required: true,
    }
})
const date = computed(() => {
    console.log(props.post.date);
    return useDateFormat(props.post.date, 'MMMM DD, YYYY')
})
</script>

<template>
    <div class="card">
        <div class="card-content">
            <span class="tag is-dark">{{ date }}</span>
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