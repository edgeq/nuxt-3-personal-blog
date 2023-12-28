<script>
import { defineNuxtComponent } from '#app'

export default defineNuxtComponent({
  data: () => {({
      todoList: []
    })
  },
  methods: {
    fetchTodoList() {
      fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => {
          this.todoList = json
        });
    }
  },
  mounted() {
    this.fetchTodoList();
  }
})
</script>

<template>
  <div>
    <h1>Hey There! From Nuxt</h1>
    <ul>
      <li v-for="todo in todoList" :key="`todo-id-${todo.id}`">
        <input type="checkbox" :checked="todo.completed" />
        {{ todo.title }}
      </li>
    </ul>
  </div>
</template>
