<script setup lang="ts">
import { formatDate } from '~~/composables/formatDate';
defineProps<{
    experience: Omit<IExperience, "description">
}>();
</script>

<template>
    <div class="experience-card box">
        <header>
            <b class="h4">{{ experience.title }}&nbsp;</b>
        </header>
        <a 
            class="h6"
            target="_blank"
            :href="experience.orgSite"    
        >
            {{ experience.orgName }}
        </a>
        <small style="color: var(--warning);">
            ({{ formatDate(experience.startDate) }}—{{ formatDate(experience.endDate) }})
        </small>
        <p>
           <slot />
        </p>
    </div>
</template>

<style scoped>
.experience-card {
    animation: open-up-x 0.75s;
}
</style>