<script setup>

</script>
<template>
    <NuxtLink to="/blog" :class="blog.backButton">
        <IconArrowLeft />
    </NuxtLink> 
    <section :class="['hero-body', 'container', blog.blog_container]">
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
        display: flex;
        gap: 2rem;
    }
    &_content {
        width: 66%;
        display: flex;
        align-items: flex-start;
    }
}
.backButton {
    position: absolute;;
    top: 6.75rem;
    left: 2rem;
    z-index: 2;
}
.toc {
    width: 33%;
}
</style>
