<script setup>
// TODO: script for updating image on load or timer...?
const techStack = await queryContent('/json/tech-stack').findOne()
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
                    I'm currently a Senior Software Engineer at Discovery Education
                    focusing on front-end projects.
                </p>
                <p :class="['paragraph', homePage.hero_paragraph]">
                    My passions consist of building aesthetically useful things in
                    the EdTech, Creative Engineering,
                    and Code for Non-Profit spaces.
                </p>
            </div>
            <div :class="['hero-right', homePage.heroRight]">
                <NuxtImg :class="homePage.heroImage" src="/eq-banjo.jpeg" format="webp" />
            </div>
        </div>
    </section>
    <div :class="['container', 'is-max-desktop', homePage.stackContainer]">
        <h2 class="title">TechStack.config()</h2>
        <pre>{{ techStack['TECH STACK'] }}</pre>
    </div>
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
    flex-direction: column;
    align-items: center;
    gap: 8px;
    @media (min-width: 768px) {
        flex-direction: row;
        .heroLeft {
            max-width: 480px;
            width: 50%;
        }
        .heroRight {
            display: flex;
            justify-content: center;
            align-items: center;
            max-width: 480px;
            width: 50%;
            margin: auto 8px;
        }
    }
    .heroImage {
        border-radius: 50%;
        box-shadow: 5px 5px 15px 5px $grey-darker;
        margin: auto;
    }
}

.stackContainer {
    padding: 0 1.5rem;
    // bulma styles from 769px 🤷🏻‍♂️
    @media (min-width: 769px) {
        padding: 0 3rem;
    }
}
</style>