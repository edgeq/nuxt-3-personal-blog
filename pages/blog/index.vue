<script setup>
// Composables are an option...
// const { data: posts } = await useAsyncData('blog', () => queryContent('blog').find())
</script>
<template>
    <!-- But ContentList is a neat component that queries your contente list too! -->
    <ContentList path="/blog" v-slot="{ list }">
        <div class="hero-body container">
            <div class="content">
                <h1>Blog Posts</h1>
                <ul class="blog-list">
                    <li class="blog-list-item" v-for="post in list" :key="post.headline">
                        <NuxtLink class="blog-list-item-link" :to="post._path">
                            <BlogCard :post="post"/>
                        </NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </ContentList>
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
        .card {
            border-radius: 24px;
        }
    }
}
</style>