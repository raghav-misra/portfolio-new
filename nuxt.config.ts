import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: ["~/styles/index.css"],
    modules: [
        "@nuxt/content"
    ],
    meta: {
        title: "Raghav Misra",
        charset: "utf-8",
        viewport: "width=device-width, initial-scale=1",
        meta: [
            {
                hid: "description",
                name: "description",
                content: "High-schooler, full-stack web developer, intern @ Hack+"
            }
        ],
        link: [
            {
                rel: "icon",
                type: "image/x-icon",
                href: "/favicon.ico"
            },
            {
                rel: "preload",
                href: "https://fonts.googleapis.com/css2?family=DM+Sans&family=Fira+Code:wght@300&display=swap",
                as: "style"
            },
            {
                rel: "preload",
                href: "https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.1/css/all.min.css",
                as: "style"
            },
            {
                rel: "stylesheet",
                href: "https://fonts.googleapis.com/css2?family=DM+Sans&family=Fira+Code:wght@300&display=swap"
            },
            {
                rel: "stylesheet",
                href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
            },
            {
                rel: "stylesheet",
                href: "https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.1/css/all.min.css",
                media: "print",
                onload: "this.media = 'all';"
            }
        ]
    },
});
