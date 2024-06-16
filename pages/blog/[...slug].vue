<script setup>

</script>
<template>
    <section :class="['hero-body', 'container', blog.blog_container]">
        <NuxtLink to="/blog" :class="blog.backButton">
            <IconArrowLeft />
        </NuxtLink> 
        <ContentDoc v-slot="{ doc }">
            <article :class="['content', blog.blog_content]">
                <ContentRenderer :value="doc" />
            </article>
            <aside :class="blog.toc" v-if="doc.body?.toc?.links.length">
                <TableOfContents :toc="doc.body?.toc?.links" />
            </aside>
        </ContentDoc>
    </section>
</template>

<style lang="scss" module="blog">
.blog {
    &_container {
        position: relative;
        display: flex;
        gap: 24px;
    }
    &_content {
        width: 66%;
        display: flex;
        align-items: flex-start;
    }
}
.backButton {
    align-self: flex-start;
    position: relative;
    left: 0;
    @media (min-width: 769px) {
        position: absolute;
    }
}
.toc {
    width: 33%;
    position: fixed;
    right: 0;
}
</style>
