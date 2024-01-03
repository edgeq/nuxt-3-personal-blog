<template>
    <div class="container">
        <div class="content">
            <ContentDoc v-slot="{ doc }">
                <article>
                    <ContentRenderer :value="doc" />
                </article>
            </ContentDoc>

        </div>
    </div>
</template>
