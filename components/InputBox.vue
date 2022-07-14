<script setup lang="ts">
const props = defineProps<{
    label: string;
    type: string;
    placeholder: string;
}>();
</script>

<template>
    <div class="input-field">
        <label class="h5"><b>{{ label }}</b></label>
        <component 
            :is="type === 'multiline' ? 'textarea' : 'input'"
            :type="type !== 'multiline' && type"
            :placeholder="placeholder"
        />
    </div>
</template>

<style scoped>
.input-field {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
}

label {
    margin-bottom: 0.5rem;
}

input, textarea {
    background: var(--dark);
    padding: 0.75rem;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
}
</style>