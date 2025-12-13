import { useTranslation } from "react-i18next";

export const careerMilestones = [
    {
        from: "September 2025",
        till: "Now",
        key: "SAGE",
        technologies: ["Python", "Microsoft Power BI", "Docker", "Kubernetes", "Terraform", "Powershell", "Groovy", "Golang", "MySQL", "JIRA", "Jenkins", "Azure DevOps", "Github Actions", "AWS"]
    },
    {
        from: "September 2024",
        till: "August 2025",
        key: "ACC",
        technologies: ["TypeScript", "Node.js", "React", "Python", "FastAPI", "Next.js", "PostgreSQL", "Knex", "Jest", "Azure DevOps", "Express", "GraphQL"]
    },
    {
        from: "October 2023",
        till: "September 2024",
        key: "HORNET",
        technologies: ["TypeScript", "Node.js", "Jest", "Cypress", "Golang", "Postman", "Cucumber", "Docker", "Gitlab CI", "Git", "Linux"]
    },
    {
        from: "October 2023",
        till: "August 2024",
        key: "BAR"
    },
    {
        from: "October 2019",
        till: "March 2022",
        key: "VGROUP"
    },
];

export const useAbbreviateMonth = () => {
    const { t } = useTranslation();
    return (date: string) => {
        if (!date) return "";
        const [month, year] = date.split(" ");
        return `${t(`months.${month}`)} ${year}`;
    };
};