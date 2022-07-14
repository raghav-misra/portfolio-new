<script setup lang="ts">
defineProps<{
    title: string;
    skills: string[];
}>();
</script>

<template>
    <div class="skillbar box">
        <h3 class="title">{{ title }}</h3>
        <div class="skills">
            <span 
                v-for="skill in skills"
                class="skill">
                {{ skill }}    
            </span>
        </div>
    </div>
</template>

<style scoped>
.skillbar {
    display: flex;
    align-items: center;
    animation: slide-in-left 0.75s ease-in-out;
}

.title {
    flex: 1;
}

.skill {
    margin: 0 1rem;
}
</style>