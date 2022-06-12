<script setup lang="ts">
const caption = "one line of code at a time";
const currentCaptionLength = ref(0);
const currentCaption = computed(() => {
    const chars = caption.split("");
    chars.length = currentCaptionLength.value;
    return chars.join("");
});


function updateCaption() {
    if (caption.length === currentCaptionLength.value) return;

    currentCaptionLength.value++;
    setTimeout(updateCaption, 100);
}

updateCaption();
</script>

<template>
    <section class="page">
        <header>
            <h1 class="h2 bolded">Solving problems,</h1>
            <code class="h4 bolded">
                {{ currentCaption }}
                <span class="cursor">|</span>
            </code>
        </header>
    </section>
</template>

<style scoped>
header code {
    color: var(--primary);
    display: flex;
}

header .cursor {
    margin-left: 0.25rem;
    animation: cursor-flicker 0.75s infinite;
    overflow: hidden;
}

@keyframes cursor-flicker {
    50% {
        width: 0;
    }
}
</style>