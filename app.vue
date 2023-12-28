<!-- In nuxt 3 components are auto-loaded -->
<template>
  <div class="container">
    <section class="section">
      <div class="columns">
        <div class="column">
          <TodoViewer title="TASKS">
            <template v-slot:hero>
              <h2 class="title">TASK LIST</h2>
              <figure>
                <img src="/eq-banjo.jpeg" alt="Handsome man with a banjitar">
                <figcaption>A handsome man with a banjitar in hand</figcaption>
              </figure>
            </template>
            <!--slotProps is a way to expose child data to
                the slot in the parent
                but not the parent itself.
                This data will only exist inside the slot
              .-->
              <!-- you can tie into all props that are available. Name them whatever you want -->
            <!-- <template v-slot:metrics="slotProps"> -->
            <!-- <pre>{{ slotProps }}</pre> -->

            <!-- You can destructure slot props too -->
            <template v-slot:metrics="{ completed }">
              <strong v-if="completed.length"> {{ completed.length}} items complete</strong>
              <span v-else>Nothing done!</span>
              <pre>{{ completed }}</pre>
            </template>
          </TodoViewer>
        </div>
        <div class="column">
          <PhotoGallery />
        </div>
      </div>
    </section>
  </div>
</template>
