<template>
    <div class="hero-body container">
        <div class="content">
            <ContentDoc v-slot="{ doc }">
                <article>
                    <ContentRenderer :value="doc" />
                </article>
            </ContentDoc>

        </div>
    </div>
</template>
