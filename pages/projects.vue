<script setup lang="ts">
useHead({
    title: "Projects"
});

const { data: projectsContent } = 
    await useAsyncData("projectsContent", () => queryContent<IProject>("/projects").sort({ startDate: -1 }).find());
</script>

<template>
    <section class="page">
        <header id="top">
            <h1 class="h2">My Projects</h1>
        </header>

        <ProjectCard v-for="project of projectsContent" :project="project" />

        <BackToTop />
    </section>
</template>