declare interface IExperience {
    title: string;
    orgName: string;
    orgSite: string;
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