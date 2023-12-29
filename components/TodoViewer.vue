<script setup>
defineProps({
    title: {
        type: String,
        default: 'Default Title, Baby!'
    }
})

let todoList = ref([])
const route = useRoute()

const filteredTodos = computed(() => {
  if (!route.query.hasOwnProperty('completed') || route.query.completed === null) {
    return todoList.value
  }
  // NOTE that we're looking for an actual value here. 
  if (route.query.completed === 'true') {
    return completedItems.value
  } 
  if (route.query.completed === 'false') {
    return remainingItems.value
  }
})

const completedItems = computed(() => {
  return todoList.value.filter(item => item.completed)
})

const remainingItems = computed(() => {
  return todoList.value.filter(item => !item.completed)
})
</script>

<template>
  <BaseDisplay
    title="TASKS"
    v-model:itemList="todoList"
  >

  <template v-slot:metrics>
    <h3>Complete: {{ completedItems.length }} | Remaining: {{ remainingItems.length }}</h3>
  </template>

    <template v-slot:items>
      <li v-for="todo in filteredTodos" class="list-item" :key="todo.id">
        <input type="checkbox" :checked="todo.completed">
        {{ todo.title }}
      </li>
    </template>
  </BaseDisplay>
</template>

<style lang="scss">
.list-item {
  list-style-type: none;
}
</style>