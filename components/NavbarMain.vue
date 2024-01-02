<template>
    <nav class="navbar is-dark is-fixed-top" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <NuxtLink class="navbar-item" to="/">
                <IconSpinner />
                <span class="title is-1">Riffs+Bits</span>
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
            <ClientOnly>
                <div class="navbar-end">
                    <NuxtLink to="/" class="navbar-item">
                        <font-awesome-icon icon="fas fa-home" class="nav-icon"/>
                        Home
                    </NuxtLink>
                    <NuxtLink to="/events" class="navbar-item">
                        <font-awesome-icon :icon="['fas', 'calendar-days']" class="nav-icon"/>
                        Events
                    </NuxtLink>
                    <NuxtLink to="/profile" class="navbar-item">
                        <font-awesome-icon :icon="['fas', 'fa-user']" class="nav-icon"/>
                        Profile
                    </NuxtLink>
                </div>
            </ClientOnly>
        </div>
    </nav>
</template>

<style lang="scss">
.is-fixed-top {
    margin-block-end: 54px;
}
.nav-icon {
    margin-inline-end: 4px;
}
.title {
    color: white;
    font-family: 'Pixelify Sans';
    font-weight: 700;
}
</style>