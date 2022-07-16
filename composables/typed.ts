export function typed(caption: string, time: number) {
    const currentCaptionLength = ref(0);
    const currentCaption = computed(() => {
        const chars = caption.split("");
        chars.length = currentCaptionLength.value;
        return chars.join("");
    });


    function updateCaption() {
        if (caption.length === currentCaptionLength.value) return;

        currentCaptionLength.value++;
        setTimeout(updateCaption, time);
    }

    setTimeout(updateCaption, 0);

    return currentCaption;
}