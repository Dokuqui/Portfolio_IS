export const skills = [
    // Programming Languages
    { name: "JavaScript", icon: "skill-icons:javascript", code: `alert("Hello World");`, category: "Programming Languages" },
    { name: "TypeScript", icon: "skill-icons:typescript", code: `console.log("Hello World");`, category: "Programming Languages" },
    { name: "Rust", icon: "skill-icons:rust", code: `println!("Hello World");`, category: "Programming Languages" },
    { name: "Go", icon: "skill-icons:golang", code: `fmt.Println("Hello World")`, category: "Programming Languages" },
    { name: "C#", icon: "skill-icons:cs", code: `Console.WriteLine("Hello");`, category: "Programming Languages" },
    { name: "Java", icon: "skill-icons:java-dark", code: `System.out.println("Hello");`, category: "Programming Languages" },
    { name: "Python", icon: "skill-icons:python-dark", code: `print("Hello World")`, category: "Programming Languages" },

    // Frontend
    { name: "React", icon: "skill-icons:react-dark", code: `<h1 style={{ color: 'blue' }}>Hello</h1>`, category: "Frontend" },
    { name: "Redux", icon: "skill-icons:redux", code: `store.dispatch({ type: 'INCREMENT' });`, category: "Frontend" },
    { name: "Next.js", icon: "skill-icons:nextjs-dark", code: `export default function Home() { return <h1>Hello</h1> }`, category: "Frontend" },
    { name: "Angular", icon: "skill-icons:angular-dark", code: `ng new my-app`, category: "Frontend" },
    { name: "CSS3", icon: "skill-icons:css", code: `.highlight { color: #22d3ee; }`, category: "Frontend" },
    { name: "Sass", icon: "skill-icons:sass", code: `$primary-color: #22d3ee;`, category: "Frontend" },
    { name: "Material UI", icon: "skill-icons:materialui-dark", code: `<Button variant="contained">Hello</Button>`, category: "Frontend" },
    { name: "Bootstrap", icon: "skill-icons:bootstrap", code: "// Design tool", category: "Frontend" },
    { name: "Figma", icon: "skill-icons:figma-dark", code: "// Design tool", category: "Frontend" },

    // Mobile
    { name: "Flutter", icon: "skill-icons:flutter-dark", code: `Text('Hello World', style: TextStyle(color: Colors.blue))`, category: "Mobile" },
    { name: "React Native", icon: "skill-icons:react-dark", code: `<Text style={{ color: 'blue' }}>Hello</Text>`, category: "Mobile" },

    // Backend
    { name: "Node.js", icon: "skill-icons:nodejs-dark", code: `require('express')();`, category: "Backend" },
    { name: "NestJS", icon: "skill-icons:nestjs-dark", code: `@Controller('hello')`, category: "Backend" },
    { name: "Django", icon: "skill-icons:django", code: `python manage.py migrate`, category: "Backend" },
    { name: "Flask", icon: "skill-icons:flask-dark", code: `@app.route('/hello')(lambda: 'Hi!')`, category: "Backend" },
    { name: "FastAPI", icon: "skill-icons:fastapi", code: `@app.get('/hello') def hello(): return {'msg': 'Hi'}`, category: "Backend" },
    { name: "Spring", icon: "skill-icons:spring-dark", code: `@GetMapping("/hello") public String hello() { return "Hi"; }`, category: "Backend" },
    { name: "Gin", icon: "skill-icons:golang", code: `r := gin.Default()\nr.GET("/ping", func(c *gin.Context) { c.JSON(200, gin.H{"message": "pong"}) })`, category: "Backend" },
    { name: "Echo", icon: "skill-icons:golang", code: `e := echo.New()\ne.GET("/ping", func(c echo.Context) error { return c.String(200, "pong") })`, category: "Backend" },
    { name: "Fiber", icon: "skill-icons:golang", code: `app := fiber.New()\napp.Get("/", func(c *fiber.Ctx) error { return c.SendString("Hello, World!") })`, category: "Backend" },
    { name: "ASP.NET Core", icon: "skill-icons:dotnet", code: `app.MapGet("/hello", () => "Hello World!");`, category: "Backend" },
    { name: "GraphQL", icon: "skill-icons:graphql-dark", code: `query { users { name } }`, category: "Backend" },
    { name: "Apollo", icon: "skill-icons:apollo", code: `query { hello }`, category: "Backend" },

    // Testing
    { name: "Jest", icon: "skill-icons:jest", code: `test('adds 1 + 2', () => expect(3).toBe(3));`, category: "Testing" },
    { name: "Cypress", icon: "skill-icons:cypress-light", code: `cy.contains('Sign in').click()`, category: "Testing" },
    { name: "Postman", icon: "skill-icons:postman", code: "// API testing tool", category: "Testing" },

    // DevOps & Cloud
    { name: "Azure", icon: "skill-icons:azure-dark", code: `az webapp create`, category: "DevOps & Cloud" },
    { name: "GCP", icon: "skill-icons:gcp-dark", code: `gcloud app deploy`, category: "DevOps & Cloud" },
    { name: "Heroku", icon: "skill-icons:heroku", code: `heroku create myapp`, category: "DevOps & Cloud" },
    { name: "Docker", icon: "skill-icons:docker", code: `docker-compose up`, category: "DevOps & Cloud" },
    { name: "Kubernetes", icon: "skill-icons:kubernetes", code: `kubectl apply -f deployment.yaml`, category: "DevOps & Cloud" },
    { name: "Nginx", icon: "skill-icons:nginx", code: `nginx -s reload`, category: "DevOps & Cloud" },
    { name: "GitLab", icon: "skill-icons:gitlab-dark", code: `gitlab-runner register`, category: "DevOps & Cloud" },
    { name: "GitHub", icon: "skill-icons:github-dark", code: `git push origin main`, category: "DevOps & Cloud" },
    { name: "Git", icon: "skill-icons:git", code: `git commit -m "Initial commit"`, category: "DevOps & Cloud" },
    { name: "Jenkins", icon: "skill-icons:jenkins-dark", code: "jenkins build", category: "DevOps & Cloud" },
    { name: "Linux", icon: "skill-icons:linux-dark", code: `sudo apt update`, category: "DevOps & Cloud" },
    { name: "Bash", icon: "skill-icons:bash-dark", code: `echo "Hello World"`, category: "DevOps & Cloud" },
    { name: "Prometheus", icon: "skill-icons:prometheus", code: "promtool check config prometheus.yml", category: "DevOps & Cloud" },

    // Databases
    { name: "MongoDB", icon: "skill-icons:mongodb", code: `db.collection.insertOne({ message: 'Hello' })`, category: "Database" },
    { name: "PostgreSQL", icon: "skill-icons:postgresql-dark", code: `SELECT 'Hello World' AS message;`, category: "Database" },
    { name: "MySQL", icon: "skill-icons:mysql-dark", code: `SELECT 'Hello World' AS greeting;`, category: "Database" },
    { name: "Prisma", icon: "skill-icons:prisma", code: `const users = await prisma.user.findMany()`, category: "Database" },
    { name: "Elasticsearch", icon: "skill-icons:elasticsearch-dark", code: `GET /_search { "query": { "match_all": {} } }`, category: "Database" },

    // Game Development
    { name: "Unity", icon: "skill-icons:unity-dark", code: `Debug.Log("Hello World");`, category: "Game Development" },
    { name: "Unreal Engine", icon: "skill-icons:unrealengine", code: `UE_LOG(LogTemp, Warning, TEXT("Hello World"));`, category: "Game Development" },

    // Tooling & Other
    { name: "Webpack", icon: "skill-icons:webpack-dark", code: `webpack --mode production`, category: "Tooling" },
    { name: "Babel", icon: "skill-icons:babel", code: `babel src --out-dir dist`, category: "Tooling" },
    { name: "Grafana", icon: "skill-icons:grafana-dark", code: `grafana-server -config`, category: "Tooling" },
    { name: "pnpm", icon: "skill-icons:pnpm-dark", code: "pnpm install", category: "Tooling" },
];