<script setup lang="ts">
useHead({
    title: "Contact"
});

const formStructure = [
    {
        label: "Full Name",
        field: "name",
        type: "text",
        placeholder: "Thomas Edison"
    }, {
        label: "Email Address",
        field: "email",
        type: "text",
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
</script>

<template>
    <section class="page">
        <header>
            <h1 class="h2">Let's get in touch.</h1>
        </header>

        <form class="box big" @submit.prevent="">
            <InputBox 
                v-for="field of formStructure" 
                :label="field.label"
                :type="field.type"
                :placeholder="field.placeholder"
            />
        </form>
    </section>
</template>

<style>

</style>