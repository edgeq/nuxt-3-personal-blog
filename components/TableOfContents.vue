<script setup>
const props = defineProps({
    toc: {
        type: Array, 
        default: () => ([]),
    }
})

const links = computed(() => {
    return props.toc
})

const hasLinks = computed(() => {
    return links.value.length
})
</script>

<template>
    <h2 class="subtitle">Table of Contents</h2>
    <ul class="toc-links" v-if="hasLinks">
        <li class="toc-link-h2" v-for="link in links" :key="link.id">
            <a :href="`#${link.id}`">{{ link.text }}</a>
            <!-- Content module only nests up to h3. 
                Otherwise we would need to have some fun with recursion -->
            <ul class="toc-link-h3" v-if="link.children">
                <li v-for="child in link.children" :key="child.id">
                    <a :href="`#${child.id}`">{{ child.text }}</a>
                </li>
            </ul>
        </li>
    </ul>
</template>

<style lang="scss" scoped>
.toc {
    &-link-h3 {
        margin-inline-start: 1.25rem;
    }
}
</style>