<script setup lang="ts">
interface IProject {
    name: string;
    tags: string[];
    image: string;
    description: string;
    award?: {
        title: string;
        compName: string;
        compSite: string;
    };
    links: ({
        name: string;
        site: string;
    })[];
}

const project: IProject = {
    name: "Disasternaut",
    tags: ["typescript", "kaboomjs"],
    image: "https://replit.com/cdn-cgi/image/width=3840,quality=80/https://storage.googleapis.com/replit/images/1635135533858_25651527b24d404b421ff6460df64d0c.jpeg",
    description: "Become the intergalactic colonist you always dreamed you'd be! Make your family proud!",
    award: {
        title: "Won Best Story",
        compName: "Replit Kajam 2022",
        compSite: "https://epicgames.com"
    },
    links: [
        {
            name: "Play the game!",
            site: "https://epicgames.com"
        },
        {
            name: "View source",
            site: "https://epicgames.com"
        },
        {
            name: "View submission",
            site: "https://epicgames.com"
        }
    ],
};

const getButtonStyles = (i: number) => {
    const accentChoices = ["success", "warning", "primary"];
    const accent = `var(--${accentChoices[i]})`;
    const text = `var(--${accentChoices[i] === "warning" ? "dark" : "light"})`;

    return `--accent: ${accent}; --text: ${text};`;
};
</script>

<template>
    <div class="experience-card box">
        <div class="card-text box-padding">
            <header>
                <b class="h3">{{ project.name }}&nbsp;</b>
            </header>

            <p class="tags code">
                <small v-for="tag in project.tags">{{ tag }}</small>
            </p>

            <p>
                {{ project.description }}
            </p>

            <small v-if="project.award">
                <b>{{ project.award.title }}</b> @ 
                <a :href="project.award.compSite" target="_blank">
                    {{ project.award.compName }}
                </a>
            </small>
        </div>
        <div 
            class="preview"
            :style="`background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${project.image}');`"
        >
            <a 
                v-for="(link, i) in project.links" 
                :href="link.site" 
                class="button"
                :style="getButtonStyles(i)"
                target="_blank"
            >
                {{ link.name }}
            </a>
        </div>
    </div>
</template>

<style scoped>
.experience-card {
    animation: open-up-y 0.75s;
    background: var(--info);
    padding: 0;
    display: flex;
    align-items: stretch;
}

.card-text, .preview {
    flex: 7;
    background-size: cover;
}

.preview {
    flex: 5;
    margin-left: 2rem;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform: skew(10deg) scale(1.25);
    transition: all 0.2s;
}

.preview:hover {
    transform: skew(-10deg) scale(1.25);
}

.preview .button {
    width: min(100%, 200px);
    margin: 0.25rem 0;
    transform: scale(0.75) skew(-10deg);
    transition: all 0.2s;
    opacity: 0.75;
}

.preview:hover .button {
    transform: skew(10deg) scale(0.75);
    /* margin: 0.5rem 0; */
    opacity: 1;
}

.card-text > * {
    margin-bottom: 0.5rem;
}

.tags {
    border-radius: 8px;
    overflow: hidden;
    display: inline-block;
}

.tags small {
    padding: 0.25rem 0.5rem;
    background: var(--dark);
}
</style>