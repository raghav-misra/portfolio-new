<script setup lang="ts">
useHead({
    title: "Experience"
});

const { data: experiencesContent } = 
    await useAsyncData("experiencesContent", () => queryContent<IExperience>("/experiences").find());
</script>

<template>
    <section class="page">
        <header>
            <h1 class="h2">My Experience</h1>
        </header>

        <ExperienceCard v-for="experience of experiencesContent" :experience="experience" />
    </section>
</template>