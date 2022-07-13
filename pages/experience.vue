<script setup lang="ts">
useHead({
    title: "Experience"
});

const { data: experiencesContent } = 
    await useAsyncData("experiencesContent", () => queryContent<IExperience>("/experiences").sort({ "time.from": -1 }).find());
</script>

<template>
    <section class="page">
        <header id="top">
            <h1 class="h2">My Experience</h1>
        </header>

        <ExperienceCard v-for="experience of experiencesContent" :experience="experience" />

        <BackToTop />
    </section>
</template>