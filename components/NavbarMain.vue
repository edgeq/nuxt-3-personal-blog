<template>
    <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <NuxtLink class="navbar-item" to="/">
                <IconSpinner />
                Riffs+Bits
            </NuxtLink>
            <!--MOBILE-->
            <button role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </button>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
            </div>

            <div class="navbar-end">
                <NuxtLink to="/" class="navbar-item">
                    Home
                </NuxtLink>
                <NuxtLink to="/events" class="navbar-item">
                    Events
                </NuxtLink>
                <NuxtLink to="/profile" class="navbar-item">
                    Profile
                </NuxtLink>
            </div>
        </div>
    </nav>
</template>

<style lang="scss">

</style>