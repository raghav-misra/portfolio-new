<script setup lang="ts">
useHead({
    title: "Experience"
});

const { data: experiencesContent } = 
    await useAsyncData("experiencesContent", () => queryContent<IExperience>("/experiences").sort({ startDate: -1 }).find());

const currentExperiences = computed(() => experiencesContent.value.filter(e => !e.endDate));
const pastExperiences = computed(() => experiencesContent.value.filter(e => !!e.endDate));
</script>

<template>
    <section class="page">
        <header id="top">
            <h1 class="h2">My Experience</h1>
        </header>

        <ExperienceCard v-for="experience of currentExperiences" :experience="experience" />

        <ExperienceCard v-for="experience of pastExperiences" :experience="experience" />

        <BackToTop />
    </section>
</template>