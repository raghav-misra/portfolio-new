<script setup lang="ts">
const props = defineProps<{
    experience: IExperience
}>();

const formatDate = (inDate?: string) => inDate?.split("/").reverse().join("/") || "current";
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
        <small>
            ({{ formatDate(experience.startDate) }}—{{ formatDate(experience.endDate) }})
        </small>
        <p>
           {{ experience.description }}
        </p>
    </div>
</template>

<style scoped>
.experience-card {
    animation: open-up-x 0.75s;
}
</style>