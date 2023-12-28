<script setup>
import { computed, defineProps, ref } from 'vue'

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

function fetchTodoList() {
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(json => {
      todoList.value = json
    });
}
</script>

<template>
  <section class="section">
    <div class="content">
        <!--Slots are fill-in-the-blank-->
        <h1>FE TODO VIEWER</h1>
        <slot name="hero"/>
        <button class="button" @click="fetchTodoList">Fetch ToDos</button>
        <h3>Complete: {{ completedItems.length }} | Remaining: {{ remainingItems.length }}</h3>
        <slot name="metrics" :completed="completedItems"/>
        <ul :class="todo.listItems">
            <li v-for="todo in todoList" :key="`todo-id-${todo.id}`">
            <input type="checkbox" :checked="todo.completed" />
            {{ todo.title }}
            </li>
        </ul>
    </div>
  </section>
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
.listItems {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
</style>