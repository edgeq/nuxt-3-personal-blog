<script setup>
// TODO: script for updating image on load or timer...?
</script>
<template>
    <section class="hero">
      <div :class="['hero-body', 'container', homePage.heroContainer]">
          <div :class="['hero-left', homePage.heroLeft]">
              <h1 class="title">
                    Edge Quintanilla
                </h1>
                <h2 class="subtitle">
                    Engineer for the Web.
                </h2>
                <p :class="['paragraph', homePage.hero_paragraph]">
                    Hi there. My name is Edgar. I also go by Edge.
                </p>
                <p :class="['paragraph', homePage.hero_paragraph]">
                    I exist at the intersection of web technologies
                    and mission-driven work. My interests are in building useful things in
                    the EdTech, Creative Engineering, 
                    and Code for Non-Profit spaces.
                </p>
                <p :class="['paragraph', homePage.hero_paragraph]">
                    I'm currently a Senior Software Engineer at Discovery Education
                    focusing on front-end projects.
                </p>
            </div>
            <div class="hero-right">
                <NuxtImg
                    :class="homePage.heroImage"
                    src="/eq-banjo.jpeg"
                    format="webp"
                />
            </div>
        </div>
    </section>
</template>

<style lang="scss" module="homePage">
@import '~/node_modules/bulma/sass/utilities/mixins.sass';


.hero {
    &_paragraph {
        color: $grey-dark;
        margin-block-end: 16px;
        font-family: 'Inter', sans-serif;
        font-size: larger;
        font-weight: 600;
        line-height: 1.75;
    }
}
.heroContainer {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 64px;

    .heroLeft {
        max-width: 480px;
        width: 50%;
    }
    .heroImage {
        border-radius: 50%;
        box-shadow: 5px 5px 15px 5px $grey-darker;
    }
}

</style>