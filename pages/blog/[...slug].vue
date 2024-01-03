<script setup>
</script>
<template>
    <div class="content">
        <h1>Blog Post</h1>
        <h2>{{ $route.params.slug }}</h2>
        <NuxtPage>
            <ContentDoc />
        </NuxtPage>
    </div>
    <!--even though $this doesn't exist in setup function, we still can access in templates-->
</template>
