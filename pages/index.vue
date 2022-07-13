<script setup lang="ts">
const caption = useTyped("one line of code at a time", 75);

const skills = {
    "Languages": [
        "HTML/CSS/JS", "TypeScript",
        "C++", "Python", "C#", "Kotlin"
    ],
    "Frontend": [
        "React & Next", "Vue & Nuxt",
        "Angular", "Web Components"
    ],
    "Backend": [
        "NodeJS", "Express & Nest", 
        "Flask & Django", "MongoDB"
    ],
    "Mobile": [
        "Android Kotlin", "React Native",
        "Ionic Capacitor", "Xamarin"
    ]
}

const { data: aboutContent } = 
    await useAsyncData("aboutContent", () => queryContent("/about").findOne());

useHead({
    title: "About"
});
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

        <article>
            <ContentRenderer class="content" :value="aboutContent" />

            <h2 class="h3">My Skillset</h2>
            <div>
                <SkillBar 
                    v-for="(names, title) in skills" 
                    :title="title" 
                    :skills="names" 
                />
            </div>
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
</style>