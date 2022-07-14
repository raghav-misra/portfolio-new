type RequestBody = Record<"name" | "email" | "subject" | "body", string>;

export default defineEventHandler(async (event) => {
    const body = await useBody<RequestBody>(event);

    console.log(body);
    
    const webhookPayload = {
        username: "Contact Form: raghavmisra.dev",
        embeds: {
            fields: Object.entries(body).map(([name, value]) => ({
                name, value   
            }))
        }
    };

    const { discordWebhookEndpoint } = useRuntimeConfig();

    $fetch(discordWebhookEndpoint, {
        method: "POST",
        body: {
            username: `Form Submission from ${body.name}`,
            content: `Time to do stuff! <@335208806944342028>`,
            embeds: [
                {
                    color: "36095",
                    fields: Object.entries(body).map(([name, value]) => ({
                        name,
                        value
                    }))
                }
            ]
        }
    });


    return {
        success: true
    };
});