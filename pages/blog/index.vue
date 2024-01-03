<script setup>
const { data: posts } = await useAsyncData('blog', () => queryContent('blog').find()) 
console.log(posts.value)

</script>
<template>
    <div class="container">
        <div class="content">
            <h1>Blog Posts</h1>
            <ul>
                <li v-for="post in posts">
                    <NuxtLink :to="post._path">{{ post.title }}</NuxtLink>
                </li>
            </ul>

        </div>
    </div>
</template>