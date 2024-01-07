<script setup>
console.log('useROute', useRoute())
const { path } = useRoute()

const isBlog = computed(() => {
    return path.includes('blog')
})

console.log('isBlog', isBlog.value)

</script>
<template>
    <nav class="navbar level is-fixed-top is-dark navbar-level">
        <div class="navbar-brand">
            <NuxtLink to="/" class="title is-1 main-title">RiffyBits</NuxtLink>
        </div>
        <div class="navbar-links">
            <NuxtLink to="/" class="title is-3">About</NuxtLink>
            <NuxtLink to="/blog"
                :class="[
                    'title',
                    'is-3',
                    {'router-link-active' : isBlog},
                    {'' : !isBlog},
                ]">Blog</NuxtLink>
            <NuxtLink to="/contact" class="title is-3">Contact</NuxtLink>
        </div>
    </nav>
</template>

<style lang="scss">
.navbar {
    align-items: center;
    padding: 8px 16px 0;

    &-links {
        display: flex;
        gap: 8px;
    }

    @media screen and (min-width: 768px) {
        &-level {
            display: flex;
            justify-content: space-between;
        }

        &-links {
            gap: 16px;
        }
    }


    .title {
        color: white;
        font-family: 'Pixelify Sans';
        font-weight: 700;
        margin-bottom: 16px;

        &.is-1 {
            align-self: center;
            margin-top: 8px;
        }
    }

    .router-link-active:not(.main-title) {
        text-decoration: underline;
    }
}
</style>