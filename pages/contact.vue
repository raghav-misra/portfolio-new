<script setup lang="ts">
useHead({
    title: "Contact"
});

interface IFormField {
    label: string;
    field: "name" | "email" | "subject" | "body";
    type: "text" | "email" | "multiline";
    placeholder: string;
} 

const formStructure: IFormField[] = [
    {
        label: "Full Name",
        field: "name",
        type: "text",
        placeholder: "Thomas Edison"
    }, {
        label: "Email Address",
        field: "email",
        type: "email",
        placeholder: "therealjohndoe@example.com"
    }, {
        label: "Subject Line",
        field: "subject",
        type: "text",
        placeholder: "Just saying hello!"
    }, {
        label: "Message Body",
        field: "body",
        type: "multiline",
        placeholder: "It is of the utmost importance for me to speak with you."
    }
];

const formFields = reactive({
    name: "",
    email: "",
    subject: "",
    body: ""
});

const isLoading = ref(false);

async function submitForm() {
    if (isLoading.value) return;

    isLoading.value = true;

    await $fetch("/api/contact", {
        method: "POST",
        body: formFields
    });

    isLoading.value = false;
}
</script>

<template>
    <section class="page">
        <header>
            <h1 class="h2">Let's get in touch.</h1>
        </header>

        <form class="box big" @submit.prevent="submitForm">
            <InputBox 
                v-for="field of formStructure" 
                v-model="formFields[field.field]"
                :label="field.label"
                :type="field.type"
                :placeholder="field.placeholder"
                :required="true"
            />

            <button 
                type="submit"
                style="--accent: var(--success);" 
                :class="{ 'is-loading': isLoading }"
            >
                <span class="text">Let's go!</span>
                <i class="fas fa-spinner"></i>
            </button>
        </form>
    </section>
</template>

<style>
button .text {
    transition: opacity 0.25s;
}

button .fa-spinner {
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.25s;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}


button.is-loading .text {
    opacity: 0;
}

button.is-loading .fa-spinner {
    opacity: 1;
    animation: spin 1s infinite;
}

@keyframes spin {
    100% {
        transform: rotate(360deg);
    }
}
</style>