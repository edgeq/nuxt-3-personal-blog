
<script setup>
import { computed, ref } from 'vue'

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
  <div class="container">
    <div class="section">
        <div class="content">
            <h1>Photo Gallery</h1>
            <button class="button" @click="fetchPhotoGallery">Fetch Data</button>
            <h2>
              {{ numberOfPhotos }} photos ({{ oddAlbums.length }} odd albums |
              {{ evenAlbums.length }} even albums)
            </h2>
            <ul class="photo-gallery-list">
              <li class="list-item" v-for="photo in photoGallery" :key="`photo-id-${photo.id}`">
                <img :src="photo.thumbnailUrl" />
              </li>
            </ul>
        </div>
    </div>
  </div>
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