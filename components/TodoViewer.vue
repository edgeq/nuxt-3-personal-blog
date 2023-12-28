<script setup>
defineProps({
    title: {
        type: String,
        default: 'Default Title, Baby!'
    }
})

let todoList = ref([]);

const completedItems = computed(() => {
  return todoList.value.filter(item => item.completed)
})

const remainingItems = computed(() => {
  return todoList.value.filter(item => !item.completed)
})
</script>

<template>
  <BaseDisplay
    itemType="todos"
    title="TASKS"
    v-model:itemList="todoList"
  >
  <template v-slot:hero>
    <figure>
      <img src="/eq-banjo.jpeg" alt="Handsome man with a banjitar">
      <figcaption>A handsome man with a banjitar in hand</figcaption>
    </figure>
  </template>
  <template v-slot:metrics>
    <h3>Complete: {{ completedItems.length }} | Remaining: {{ remainingItems.length }}</h3>
  </template>

    <template v-slot:items>
      <li v-for="todo in todoList">
        <input type="checkbox" :checked="todo.completed">
        {{ todo.title }}
      </li>
    </template>
  </BaseDisplay>
</template>

<style module="todo" lang="scss">
/* 
  modules are a way to scope css - note the use of camelCase classNames
    https://vuejs.org/api/sfc-css-features.html#css-modules
    https://github.com/css-modules/css-modules?tab=readme-ov-file#naming

  you can also use scoped - this adds data attributes to class-names
    https://vuejs.org/api/sfc-css-features.html#scoped-css

  or you can use naming conventions like BEM which is more of a convention/disgression
*/
</style>