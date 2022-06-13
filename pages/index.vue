<script setup lang="ts">
const caption = useTyped("one line of code at a time", 75);

const { data: aboutContent } = 
    await useAsyncData("aboutContent", () => queryContent("/about").findOne());

</script>

<template>
    <section class="page">
        <header>
            <h1 class="h2 bolded">Solving problems,</h1>
            <code class="h4 bolded">
                {{ caption }}
                <span class="cursor">|</span>
            </code>
        </header>

        <article class="content">
            <ContentRenderer :value="aboutContent" />
        </article>
    </section>
</template>

<style scoped>
header code {
    color: var(--primary);
    display: flex;
}

header .cursor {
    margin-left: 0.25rem;
    animation: cursor-flicker 0.75s infinite;
    overflow: hidden;
}

@keyframes cursor-flicker {
    50% {
        width: 0;
    }
}

article {
    margin-top: 2rem;
}
</style>