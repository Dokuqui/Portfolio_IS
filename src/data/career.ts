export const careerMilestones = [
    {
        from: "September 2024",
        till: "Now",
        title: "Full Stack Developer",
        company: "ACC - Automotive Cells Company",
        contractType: "Alternance",
        description: "Développé front/back avec React, Next.js, Node.js, FastAPI, géré microservices GraphQL, optimisé CI/CD sur Azure DevOps, assuré qualité avec Jest et PostgreSQL.",
        technologies: ["TypeScript", "Node.js", "React", "Python", "FastAPI", "Next.js", "PostgreSQL", "Knex", "Jest", "Azure DevOps", "Express", "GraphQL"],
        compétences: ["Microservices", "GraphQL", "CI/CD", "Automatisation", "Design", "UX/UI", "Base de données", "Dev Web"],
    },
    {
        from: "October 2023",
        till: "September 2024",
        title: "Ingénieur Testeur | QA",
        company: "Hornetsecurity (Formerly Vade)",
        contractType: "Alternance",
        description: "Testé e2e avec Cypress, API avec Postman, intégré CI sur GitLab, implémenté Semantic Release, développé endpoints TypeScript/Node.js et script Go pour nettoyage CI.",
        technologies: ["TypeScript", "Node.js", "Jest", "Cypress", "Golang", "Postman", "Cucumber", "Docker", "Gitlab CI", "Git", "Linux"],
        compétences: ["CI/CD", "Automatisation", "Tests"],
    },
    {
        from: "October 2023",
        till: "August 2024",
        title: "Bartender",
        company: "Magnus&Minus",
        contractType: "CDI",
        description: "",
    },
    {
        from: "October 2019",
        till: "March 2022",
        title: "Assistante Capitaine",
        company: "V.Group",
        contractType: "CDD",
        description: "Navigué dans 20+ pays, géré navigation et équipage, supervisé chargement, acquis compétences en régulations maritimes et gestion d’urgence.",
    },
];

export const abbreviateMonth = (date: string) => {
    const monthMap: { [key: string]: string } = {
        "January": "Jan",
        "February": "Feb",
        "March": "Mar",
        "April": "Apr",
        "May": "May",
        "June": "Jun",
        "July": "Jul",
        "August": "Aug",
        "September": "Sept",
        "October": "Oct",
        "November": "Nov",
        "December": "Dec",
    };
    const [month, year] = date.split(" ");
    return `${monthMap[month] || month} ${year}`;
};