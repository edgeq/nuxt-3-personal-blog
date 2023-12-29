<script setup>
const route = useRoute()
// note that console logs also happen in terminal
console.log(route.params)
</script>
<template>
    <h2>EVENT ID: </h2>
    <!--even though $this doesn't exist in setup function, we still can access in templates-->
    <pre>{{ $route.params.event_id }}</pre>
    <pre>{{ route.params.event_id }}</pre>
</template>