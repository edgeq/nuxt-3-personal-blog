<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <NuxtLink class="navbar-item" to="/">
                MyRecs
            </NuxtLink>
            <!--MOBILE-->
            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
            </div>

            <div class="navbar-end">
                <div class="navbar-item">
                    <NuxtLink to="/" class="navbar-item">
                        Home
                    </NuxtLink>

                    <NuxtLink to="/display" class="navbar-item">
                        Display
                    </NuxtLink>
                    <NuxtLink to="/display/todos" class="navbar-item">
                        Todos
                    </NuxtLink>
                    <NuxtLink to="/display/photos" class="navbar-item">
                        Photos
                    </NuxtLink>
                </div>
            </div>
        </div>
    </nav>
</template>