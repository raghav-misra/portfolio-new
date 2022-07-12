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
@keyframes progress-in {
    from {
        transform: translateX(-500px);
        opacity: 0;
    }

    to {
        transform: none;
        opacity: 1;
    }
}

.skillbar {
    display: flex;
    align-items: center;
    animation: progress-in 0.75s ease-in-out;
}

.title {
    flex: 1;
}

.skill {
    margin: 0 1rem;
}
</style>