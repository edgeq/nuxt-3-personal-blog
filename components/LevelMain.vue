<template>
    <nav class="navbar level is-fixed-top is-dark">
        <NuxtLink to="/" class="title is-1 main-title">Riffs+Bits</NuxtLink>
        <NuxtLink to="/about" class="title is-3">About</NuxtLink>
        <NuxtLink to="/blog" class="title is-3">Blog</NuxtLink>
        <NuxtLink to="/contact" class="title is-3">Contact</NuxtLink>
    </nav>
</template>

<style lang="scss">
.navbar {
    align-items: center;
    padding: 8px 16px 0;

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
}
</style>