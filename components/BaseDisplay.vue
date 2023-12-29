<script setup>
// Generic list item component
let itemList = ref([]);

const props = defineProps({
    itemList: {
        type: Array,
        default: () => [],
    },
    title: {
        type: String,
        required: true,
    }
})

const route = useRoute()
console.log('BD ROUTE', route)
const itemType = route.path.split('/')[2];

onMounted(() => {
    fetch(`https://jsonplaceholder.typicode.com/${itemType}`)
        .then(response => response.json())
        .then(json => {
            emit('update:itemList', json)
        });
    window.console.log(route.query)
})

const emit = defineEmits(['update:itemList'])
</script>

<template>
    <!--Generic templates-->
    <section class="section">
        <div class="content">
            <h1 class="title"> {{ title }}</h1>
            <slot name="hero" />
            <slot name="metrics" />
    
            <ul class="list" :class="[
                {'photo-gallery-list': itemType === 'photos'},
                {'todo-list': itemType === 'todos'},
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