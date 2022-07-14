<script setup lang="ts">
const props = defineProps<{
    label: string;
    type: string;
    placeholder: string;
    required: boolean;
    modelValue: string;
}>();

const emit = defineEmits(["update:modelValue"]);

function updateValue(event: Event) {
    emit("update:modelValue", (event.target as HTMLInputElement).value);
}
</script>

<template>
    <div class="input-field">
        <label class="h5"><b>{{ label }}</b></label>
        <textarea
            v-if="type === 'multiline'"
            :placeholder="placeholder"
            :required="required"
            :value="modelValue"
            @input="updateValue"
        />
        <input 
            v-else
            :type="type"
            :placeholder="placeholder"
            :required="required"
            :value="modelValue"
            @input="updateValue"
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
    animation: slide-in-right 0.75s;
}

input, textarea {
    animation: slide-in-left 0.75s;
    background: var(--dark);
    padding: 1rem;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    resize: vertical;
}
</style>