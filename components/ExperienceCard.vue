<script setup lang="ts">
const props = defineProps<{
    experience: IExperience
}>();

console.log(props);
</script>

<template>
    <div class="experience-card box">
        <h2>
            <span class="h4">{{ experience.title }}&nbsp;</span>
            <small>({{ experience.time.from }}—{{ experience.time.to || "" }})</small>
        </h2>
        <a 
            class="h6"
            target="_blank"
            :href="experience.org.site"    
        >
            {{ experience.org.name }}
        </a>
        <p>
           {{ experience.description }}
        </p>
    </div>
</template>

<style scoped>
</style>