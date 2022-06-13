<script setup lang="ts">
import { socials, navigation } from "~/assets/data";
</script>

<template>
    <aside class="component-navbar">
        <nav>
            <header>
                <img class="logo" alt="Logo" src="~/assets/profile.jpg" />
                <h1 class="h3">Raghav Misra</h1>
            </header>

            <section class="vertical-nav pages-bar">
                <NuxtLink
                    class="nav-item"
                    v-for="(link, i) in navigation"
                    :to="link.href"
                    :key="i">
                    {{ link.title }}
                </NuxtLink>
            </section>

            <section class="float-bottom vertical-nav social-bar">
                <a
                    class="nav-item"
                    target="_blank"
                    v-for="(social, i) in socials"
                    :key="i"
                    :href="social.href"
                    rel="noopener noreferrer"
                >
                    <i
                        :class="`${social.generic ? 'fas' : 'fab'} fa-${social.icon}`"
                        class="icon"
                    />
                </a>
            </section>
        </nav>
    </aside>
</template>

<style scoped>
aside {
    padding: 2rem;
    line-height: 1.25;
}

header {
    margin-bottom: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: var(--darkest);
}

nav {
    overflow: hidden;
    height: 100%;
    background: var(--info);
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    text-align: center;
    box-shadow: 0px 0px 20px var(--darkest);
}

nav > * {
    padding: 1rem 2rem;
}

.vertical-nav {
    display: flex;
    flex-direction: column;
}

.social-bar {
    margin: 1rem;
}

.social-bar .nav-item {
    margin: 1rem;
}

.nav-item {
    margin: 1rem 0;
    font-size: 1.125rem;
    transition: transform 0.25s ease-in-out;
}

.float-bottom {
    margin-top: auto;
}

.logo {
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    margin-bottom: 0.25rem;
}

@media screen and (min-width: 615px) {
    .nav-item:hover,
    .nav-item:active {
        transform: scale(1.125);
        color: var(--primary);
    }
}

@media screen and (max-width: 850px) {
    .logo {
        display: none;
    }

    .vertical-nav {
        display: block;
        text-align: center;
    }

    .nav-item {
        margin: 0 1rem;
    }

    aside {
        padding-bottom: 0;
    }

    header {
        flex-direction: row;
        padding: 0.5rem;
    }
}

@media screen and (max-width: 615px) {
    .pages-bar {
        padding: 0.5rem;
        padding-top: 0rem;
        display:grid;
        grid-template-columns: auto auto;
        grid-row: auto auto;
        flex-wrap: wrap;
        margin: 0 auto;
    }

    .component-navbar {
        margin: 0;
        padding: 0;
    }

    nav {
        border-radius: 0 0 30px 30px;
    }

    .social-bar {
        display: none;
    }
}
</style>
