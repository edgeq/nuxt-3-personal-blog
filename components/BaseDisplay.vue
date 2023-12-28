<script setup>
// Make a generic list item component
let itemList = ref([]);

const props = defineProps({
    itemList: {
        type: Array,
        default: () => [],
    },
    itemType: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    }
})

function fetchItemList() {
  fetch(`https://jsonplaceholder.typicode.com/${props.itemType}`)
    .then(response => response.json())
    .then(json => {
      emit('update:itemList', json)
    });
}

const emit = defineEmits(['update:itemList'])
</script>

<template>
    <!--Generic templates-->
    <section class="section">
        <slot name="hero" />

        <h1 class="title"> {{ title }}</h1>

        <button @click="fetchItemList">Fetch Data</button>

        <slot name="metrics" />

        <ul class="list" :class="{'photo-gallery-list': props.itemType === 'photos'}">
            <slot name="items" :itemList="itemList"/>
        </ul>
    </section>
</template>

<style lang="sass"> 
</style>