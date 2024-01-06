<script setup>
const { data: posts } = await useAsyncData('blog', () => queryContent('blog').find())
console.log(posts.value.length)
</script>
<template>
    <div class="hero-body container">
        <div class="content">
            <h1>Blog Posts</h1>
            <ul class="blog-list">
                <li class="blog-list-item" v-for="post in posts" :key="post.headline">
                    <NuxtLink class="blog-list-item-link" :to="post._path">
                        <BlogCard :post="post"/>
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss">
ul.blog-list {
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
        display: grid;
        grid-auto-rows: 1fr;
        grid-template-columns: repeat(3, 1fr);
        gap: 16px;

    }
    margin-block: 0;
    margin-inline: 0;

    .blog-list-item-link {
        height: 100%;
        width: 100%;
        display: flex;

    }
}
</style>