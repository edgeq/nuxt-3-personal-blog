<script setup>
definePageMeta({
    layout: 'admin'
})
function doSomethingOnLoad(e) {
    console.log('LOADED', e);
}
</script>

<template>
    <section class="section">
        <h2>SHOULD BE LOGGED IN</h2>
        <IconSpinner />
        <!-- regular images are ok.. but we can do better -->
        <!-- <img src="/assets/img/eq-banjo.jpeg" alt="Handsome man with a banjo in hand"> -->
        <!-- NuxtImg is a module that allows for image optimization and formatting
            You can also use it with external image providers such as AWS or Cloudinary
            https://image.nuxt.com/usage/nuxt-img#format
            Also based off of https://github.com/unjs/ipx 
            in case you want to use it outside of nuxt
        -->
        <NuxtImg src="/eq-banjo.jpeg" format="webp" @load="doSomethingOnLoad"/>
    </section>

</template>

<style lang="scss">
.section {
    display: flex;
    flex-direction: column;
    gap: 16px;
}
</style>