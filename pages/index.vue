<template>
    <ClientOnly>
        <section class="block header">
            <span class="loader-by-class"></span>
        </section>
        <section class="block content">
            <h2 class="subtitle icon-text">
                <font-awesome-icon :icon="['fas', 'fa-home']" />
                This is a layout experiment
            </h2>
            <div class="tag-container container">
                <span class="tag">
                    <font-awesome-icon :icon="['fas', 'fa-info-circle']" />
                    Info
                </span>
                <span class="tag">
                    <font-awesome-icon :icon="['fas', 'circle-exclamation']" />
                    Warning
                </span>
            </div>
        </section>
    </ClientOnly>
    <div class="columns is-centered">
        <div class="column is-2">
            <button class="button form-control">CLICK ME</button>
        </div>
        <div class="column is-4">
            <button class="button form-control">CLICK ME</button>
        </div>
        <div class="column is-2">
            <button class="button form-control">CLICK ME</button>
        </div>
    </div>
    <!--container with a box element - or card - pattern-->
    <div class="container">
        <div class="box">
            <article class="media">
                <div class="media-left">
                    <figure class="image is-64x64">
                        <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
                    </figure>
                </div>
                <div class="media-content">
                    <div class="content">
                        <p>
                            <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
                            <br>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa
                            fringilla egestas. Nullam condimentum luctus turpis.
                        </p>
                    </div>
                    <nav class="level is-mobile">
                        <div class="level-left">
                            <a class="level-item" aria-label="reply">
                                <span class="icon is-small">
                                    <i class="fas fa-reply" aria-hidden="true"></i>
                                </span>
                            </a>
                            <a class="level-item" aria-label="retweet">
                                <span class="icon is-small">
                                    <i class="fas fa-retweet" aria-hidden="true"></i>
                                </span>
                            </a>
                            <a class="level-item" aria-label="like">
                                <span class="icon is-small">
                                    <i class="fas fa-heart" aria-hidden="true"></i>
                                </span>
                            </a>
                        </div>
                    </nav>
                </div>
            </article>
        </div>

        <progress class="progress is-small is-primary" max="100">15%</progress>
        <progress value="20" class="progress is-danger" max="100">30%</progress>
        <progress class="progress is-medium is-dark" max="100">45%</progress>
        <progress class="progress is-large is-info" max="100">60%</progress>
    </div>
</template>

<style lang="scss">
@import '~/node_modules/bulma/sass/utilities/mixins.sass';
@import '~/node_modules/bulma/sass/utilities/controls.sass';
$primaryColor: hsl(171deg, 100%, 41%);

.loader-by-class {
    @include loader;
}

.form-control {
    background-color: $primaryColor;
    color: findColorInvert($primaryColor);
    border: 8px solid findLightColor($primaryColor);
}

.column {
    border: 1px solid $warning;
}

.header {
    display: flex;
    gap: 8px;
    align-items: center;
    margin-block-start: 48px;
}

.tag-container {
    display: flex;
    gap: 8px;
}
</style>