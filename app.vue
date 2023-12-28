<script setup>
import { computed, ref } from 'vue'

// https://vuejs.org/guide/essentials/reactivity-fundamentals.html
// ref vs reactive
// ref is recommended for most data types because reactive is limited to object types
// and reactivity is lost when destructuring or replacing objects
// see link for more info:
// https://vuejs.org/guide/essentials/reactivity-fundamentals.html#limitations-of-reactive
let photoGallery = ref([]);

const numberOfPhotos = computed(() => {
  return photoGallery.value.length;
})

const evenAlbums = computed(() => {
  return photoGallery.value.filter(item => item.albumId % 2)
})

const oddAlbums = computed(() => {
  return photoGallery.value.filter(item => !(item.albumId % 2))
})

function fetchPhotoGallery() {
  fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(json => {
      photoGallery.value = json
      window.console.log(photoGallery.value)
    })
}
</script>

<template>
  <div>
    <h1>Photo Gallery</h1>
    <button @click="fetchPhotoGallery">Fetch Data</button>
    <p>
      {{ numberOfPhotos }} photos ({{ oddAlbums?.length }} odd albums | {{ evenAlbums?.length }} even albums)
    </p>
    <ul>
      <li v-for="photo in photoGallery" :key="photo.id">
        <img :src="photo.thumbnailUrl" :alt="photo.title">
      </li>
    </ul>
  </div>
</template>
