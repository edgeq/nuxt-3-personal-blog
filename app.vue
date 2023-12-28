<script setup>
let todoList = ref([]);

function fetchTodoList() {
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(json => {
      todoList.value = json
    });
}
</script>

<template>
  <h1>Hey There! From Nuxt</h1>
  <button @click="fetchTodoList">Fetch ToDos</button>
  <ul>
    <li v-for="todo in todoList" :key="`todo-id-${todo.id}`">
      <input type="checkbox" :checked="todo.completed" />
      {{ todo.title }}
    </li>
  </ul>
</template>
