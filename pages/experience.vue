<script setup lang="ts">
import Toggle from "@vueform/toggle";

const showProfessionalExperience = ref(true);

useHead({
    title: "Experience"
});

const { data: experiencesContent } =
    await useAsyncData("experiencesContent", () => queryContent<IExperience>("/experiences").sort({ startDate: -1 }).find());

const currentExperiences = computed(() => experiencesContent.value.filter(e => !e.endDate));
const pastExperiences = computed(() => experiencesContent.value.filter(e => !!e.endDate));
</script>



<style src="@vueform/toggle/themes/default.css" />

<template>
    <section class="page">

        <header id="top">
            <h1 class="h2">My Experience</h1>
        </header>

        <div class="toggle-row">
            Educational
            <Toggle class="experience-toggle" v-model="showProfessionalExperience" />
            Professional
        </div>

        <div v-if="showProfessionalExperience">
            <ExperienceCard v-for="experience of currentExperiences" :experience="experience" />
            <ExperienceCard v-for="experience of pastExperiences" :experience="experience" />
            <BackToTop />
        </div>
        <div v-else>
            <EducationCard :experience="{
                title: 'B.S. in Computer Science and Mathematics',
                orgName: 'University of Maryland, College Park',
                orgSite: 'https://umd.edu/',
                endDate: '2025/05',
            }">
                <p><b>Grade:</b> 4.0</p>
                <p><b>Coursework:</b> Object-Oriented Programming, Data Structures, Algorithms, Computer Systems, Discrete Mathematics, Vector Calculus, Applied Linear Algebra, Probability & Statistics, Combinatorics and Graph Theory.</p>
            </EducationCard>
            <EducationCard :experience="{
                title: 'Cerificate in Applied Data Science',
                orgName: 'MIT Professional Education',
                orgSite: 'https://professional.mit.edu/',
                endDate: '2022/10',
            }">
                Worked with the data science ecosystem around Python, including NumPy, Pandas, and Scikit-learn, to
                design data models with regression and decision trees, perform both unsupervised and supervised
                learning, and build robust recommendation systems.
                <p><b>Coursework:</b> Data Analysis/Visualization, Machine Learning, Deep Learning, Recommendation Systems.</p>
                <i><a href="https://eportfolio.mygreatlearning.com/raghav-misra" target="_blank">Program Portfolio</a></i>
            </EducationCard>
        </div>
    </section>
</template>

<style scoped>
.toggle-row {
    display: flex;
    align-items: center;
}

.experience-toggle {
    margin: 0 0.375rem;
    --toggle-bg-on: var(--success);
    --toggle-border-on: var(--success);
    --toggle-bg-off: var(--warning);
    --toggle-border-off: var(--warning);
}

.experience-toggle :deep(.toggle-handle) {
    box-shadow: 0 0 2px var(--darkest);
}
</style>
