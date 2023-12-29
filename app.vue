<script setup>
const { onMountedLog } = useUtils();

onMounted(() => {
  onMountedLog()
})

</script>

<template>
  <!-- In nuxt 3 components are auto-loaded -->
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
