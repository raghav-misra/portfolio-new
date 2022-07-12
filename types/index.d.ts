declare interface IExperience {
    title: string;
    org: {
        name: string;
        site: string;
    };
    time: {
        from: string;
        to?: string;
    };
    description: string;
}   