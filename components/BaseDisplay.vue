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
        <div class="content">
            <h1 class="title"> {{ title }}</h1>
            <slot name="hero" />
    
    
            <button @click="fetchItemList">Fetch Data</button>
    
            <slot name="metrics" />
    
            <ul class="list" :class="[
                {'photo-gallery-list': props.itemType === 'photos'},
                {'todo-list': props.itemType === 'todos'},
                ]">
                <slot name="items" :itemList="itemList"/>
            </ul>
        </div>
    </section>
</template>

<style lang="scss"> 
.todo-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}
</style>