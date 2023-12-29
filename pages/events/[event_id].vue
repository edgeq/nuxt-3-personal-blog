<script setup>
const route = useRoute()
// with options API, you can log `this` to get the current context
// with composition API, useNuxtApp is the new `this` or context
const nuxt = useNuxtApp()

// note that console logs also happen in terminal
console.log(route.params)
console.log(nuxt)
</script>
<template>
    <h2>EVENT ID: </h2>
    <!--even though $this doesn't exist in setup function, we still can access in templates-->
    <pre>{{ $route.params.event_id }}</pre>
    <pre>{{ route.params.event_id }}</pre>
</template>