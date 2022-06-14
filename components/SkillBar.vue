<script setup lang="ts">
defineProps<{
    title: string;
    skills: string[];
}>();
</script>

<template>
    <div class="skillbar">
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
    padding: 0.5rem 1rem;
    margin: 1rem 0;
    background: var(--info);
    border-radius: 20px;
    transition: 0.25s background ease-in-out;
    cursor: pointer;
    overflow: hidden;
    animation: progress-in 0.75s ease-in-out;
}

.skillbar:hover {
    background: var(--primary);
}

.title {
    flex: 1;
}

.skill {
    margin: 0 1rem;
}
</style>