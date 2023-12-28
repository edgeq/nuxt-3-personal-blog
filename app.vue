<script setup>
import { computed, ref } from 'vue'

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
  <h1>TODO LIST</h1>
  <button @click="fetchTodoList">Fetch ToDos</button>
  <p>Complete: {{ completedItems.length }} | Remaining: {{ remainingItems.length }}</p>
  <ul>
    <li v-for="todo in todoList" :key="`todo-id-${todo.id}`">
      <input type="checkbox" :checked="todo.completed" />
      {{ todo.title }}
    </li>
  </ul>
</template>
