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
            :href="experience.org.site"    
        >
            {{ experience.org.name }}
        </a>
        <small>
            ({{ formatDate(experience.time.from) }}—{{ formatDate(experience.time.to) }})
        </small>
        <p>
           {{ experience.description }}
        </p>
    </div>
</template>