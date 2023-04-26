declare interface IExperience {
    title: string; // company name
    role: string; // my role
    website: string; // company website
    startDate: string;
    endDate?: string;
    description: string;
}   

declare interface IProject {
    title: string;
    startDate: string;
    tags: string;
    image: string;
    description: string;
    award: {
        exists: boolean;
        title: string;
        compName: string;
        compSite: string;
    };
    links: ({
        name: string;
        site: string;
    })[];
}