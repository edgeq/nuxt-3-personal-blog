<script setup>
let photoGallery = ref([])

const numberOfPhotos = computed(() => {
  return photoGallery.value.length
})

const evenAlbums = computed(() => {
  return photoGallery.value.filter(item => item.albumId % 2 === 0)
})

const oddAlbums = computed(() => {
  return photoGallery.value.filter(item => !(item.albumId % 2 === 0))
})

function fetchPhotoGallery() {
  fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(json => {
      photoGallery.value = json
    })
}
</script>

<template>
  <BaseDisplay
  itemType="photos"
  title="PICS"
  v-model:itemList="photoGallery"
>
    <template v-slot:metrics>
      <h3>Odd albums: {{ oddAlbums.length }} | Even Albums: {{ evenAlbums.length }}</h3>
    </template>
    <template v-slot:items>
      <li class="list-item" v-for="photo in photoGallery" :key="`photo-id-${photo.id}`">
          <img :src="photo.thumbnailUrl" />
      </li>
    </template>
  </BaseDisplay>
</template>

<style lang="scss">
.photo-gallery-list {
  display: grid;
  grid-template-columns: repeat(5, 1fr);

  .list-item {
    list-style: none;
  }
}
</style>