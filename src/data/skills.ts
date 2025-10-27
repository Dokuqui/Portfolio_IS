export const skills = [
  // 💻 Languages
  {
    name: "JavaScript",
    icon: "skill-icons:javascript",
    code: `alert("Hello World");`,
    category: "Languages",
  },
  {
    name: "TypeScript",
    icon: "skill-icons:typescript",
    code: `console.log("Hello World");`,
    category: "Languages",
  },
  {
    name: "Python",
    icon: "skill-icons:python-dark",
    code: `print("Hello World")`,
    category: "Languages",
  },
  {
    name: "Go",
    icon: "skill-icons:golang",
    code: `fmt.Println("Hello World")`,
    category: "Languages",
  },
  {
    name: "Rust",
    icon: "skill-icons:rust",
    code: `println!("Hello World");`,
    category: "Languages",
  },
  {
    name: "C#",
    icon: "skill-icons:cs",
    code: `Console.WriteLine("Hello");`,
    category: "Languages",
  },
  {
    name: "Dart",
    icon: "skill-icons:dart-dark",
    code: `print('Hello World');`,
    category: "Languages",
  },
  {
    name: "Groovy",
    icon: "simple-icons:apachegroovy",
    code: `println 'Hello'`,
    category: "Languages",
  },

  // 🌐 Frontend
  {
    name: "React",
    icon: "skill-icons:react-dark",
    code: `export default () => <h1>Hello</h1>`,
    category: "Frontend",
  },
  {
    name: "Redux",
    icon: "skill-icons:redux",
    code: `store.dispatch({ type: 'INCREMENT' });`,
    category: "Frontend",
  },
  {
    name: "Next.js",
    icon: "skill-icons:nextjs-dark",
    code: `export default function Home(){return <h1>Hello</h1>}`,
    category: "Frontend",
  },
  {
    name: "Angular",
    icon: "skill-icons:angular-dark",
    code: `ng new my-app`,
    category: "Frontend",
  },

  // Mobile
  {
    name: "Flutter",
    icon: "skill-icons:flutter-dark",
    code: `Text('Hello World', style: TextStyle(color: Colors.blue))`,
    category: "Mobile",
  },
  {
    name: "React Native",
    icon: "skill-icons:react-dark",
    code: `<Text style={{ color: 'blue' }}>Hello</Text>`,
    category: "Mobile",
  },

  // 🖥️ Backend
  {
    name: "Node.js",
    icon: "skill-icons:nodejs-dark",
    code: `require('express')();`,
    category: "Backend",
  },
  {
    name: "Express",
    icon: "skill-icons:expressjs-dark",
    code: `const app=require('express')();`,
    category: "Backend",
  },
  {
    name: "NestJS",
    icon: "skill-icons:nestjs-dark",
    code: `@Controller('hello')`,
    category: "Backend",
  },
  {
    name: "Django",
    icon: "skill-icons:django",
    code: `python manage.py migrate`,
    category: "Backend",
  },
  {
    name: "Flask",
    icon: "skill-icons:flask-dark",
    code: `@app.route('/hello')(lambda: 'Hi!')`,
    category: "Backend",
  },
  {
    name: "FastAPI",
    icon: "skill-icons:fastapi",
    code: `@app.get('/hello')`,
    category: "Backend",
  },
  {
    name: "ASP.NET Core",
    icon: "skill-icons:dotnet",
    code: `app.MapGet("/hello", ()=>"Hi");`,
    category: "Backend",
  },
  {
    name: "GraphQL",
    icon: "skill-icons:graphql-dark",
    code: `query { users { name } }`,
    category: "Backend",
  },
  {
    name: "Apollo",
    icon: "skill-icons:apollo",
    code: `query { hello }`,
    category: "Backend",
  },
  {
    name: "Gin",
    icon: "skill-icons:golang",
    code: `r:=gin.Default(); r.GET("/ping", ...)`,
    category: "Backend",
  },
  {
    name: "Echo",
    icon: "skill-icons:golang",
    code: `e:=echo.New(); e.GET("/ping", ...)`,
    category: "Backend",
  },
  {
    name: "Fiber",
    icon: "skill-icons:golang",
    code: `app:=fiber.New(); app.Get("/", ...)`,
    category: "Backend",
  },

  // 🗃️ Databases
  {
    name: "MongoDB",
    icon: "skill-icons:mongodb",
    code: `db.collection.insertOne({msg:'Hello'})`,
    category: "Databases",
  },
  {
    name: "PostgreSQL",
    icon: "skill-icons:postgresql-dark",
    code: `SELECT 'Hello' AS message;`,
    category: "Databases",
  },
  {
    name: "MySQL",
    icon: "skill-icons:mysql-dark",
    code: `SELECT 'Hello' AS greeting;`,
    category: "Databases",
  },
  {
    name: "SQLite",
    icon: "skill-icons:sqlite",
    code: `SELECT 'Hello' AS msg;`,
    category: "Databases",
  },
  {
    name: "MariaDB",
    icon: "logos:mariadb",
    code: `SELECT 'Hello' AS msg;`,
    category: "Databases",
  },
  {
    name: "Prisma",
    icon: "skill-icons:prisma",
    code: `const users=await prisma.user.findMany()`,
    category: "Databases",
  },

  // ☁️ Cloud
  {
    name: "AWS",
    icon: "skill-icons:aws-dark",
    code: `aws s3 ls`,
    category: "Cloud",
  },
  {
    name: "Azure",
    icon: "skill-icons:azure-dark",
    code: `az webapp create`,
    category: "Cloud",
  },
  {
    name: "GCP",
    icon: "skill-icons:gcp-dark",
    code: `gcloud app deploy`,
    category: "Cloud",
  },
  {
    name: "Heroku",
    icon: "skill-icons:heroku",
    code: `heroku create myapp`,
    category: "Cloud",
  },
  {
    name: "DigitalOcean",
    icon: "simple-icons:digitalocean",
    code: `doctl compute droplet list`,
    category: "Cloud",
  },

  // ☁️ DevOps & CI/CD
  {
    name: "Docker",
    icon: "skill-icons:docker",
    code: `docker compose up`,
    category: "DevOps & CI/CD",
  },
  {
    name: "Kubernetes",
    icon: "skill-icons:kubernetes",
    code: `kubectl apply -f deploy.yaml`,
    category: "DevOps & CI/CD",
  },
  {
    name: "Terraform",
    icon: "logos:terraform-icon",
    code: `terraform apply`,
    category: "DevOps & CI/CD",
  },
  {
    name: "GitHub",
    icon: "skill-icons:github-dark",
    code: `git push origin main`,
    category: "DevOps & CI/CD",
  },
  {
    name: "GitLab",
    icon: "skill-icons:gitlab-dark",
    code: `gitlab-runner register`,
    category: "DevOps & CI/CD",
  },
  {
    name: "Jenkins",
    icon: "skill-icons:jenkins-dark",
    code: `pipeline { agent any }`,
    category: "DevOps & CI/CD",
  },
  {
    name: "Azure DevOps",
    icon: "skill-icons:azure-dark",
    code: `trigger:\n- main`,
    category: "DevOps & CI/CD",
  },
  {
    name: "Prometheus",
    icon: "skill-icons:prometheus",
    code: `promtool check config`,
    category: "DevOps & CI/CD",
  },
  {
    name: "Nginx",
    icon: "skill-icons:nginx",
    code: `nginx -s reload`,
    category: "DevOps & CI/CD",
  },
  {
    name: "Git",
    icon: "skill-icons:git",
    code: `git commit -m "init"`,
    category: "DevOps & CI/CD",
  },
  {
    name: "Linux",
    icon: "skill-icons:linux-dark",
    code: `sudo apt update`,
    category: "DevOps & CI/CD",
  },
  {
    name: "Bash",
    icon: "skill-icons:bash-dark",
    code: `echo "Hello"`,
    category: "DevOps & CI/CD",
  },
  {
    name: "PowerShell",
    icon: "skill-icons:powershell-dark",
    code: `Write-Host "Hello"`,
    category: "DevOps & CI/CD",
  },

  // 🧪 Testing
  {
    name: "Jest",
    icon: "skill-icons:jest",
    code: `test('1+2',()=>expect(3).toBe(3))`,
    category: "Testing",
  },
  {
    name: "Cypress",
    icon: "skill-icons:cypress-light",
    code: `cy.contains('Sign in').click()`,
    category: "Testing",
  },
  {
    name: "Playwright",
    icon: "logos:playwright",
    code: `await page.goto('/')`,
    category: "Testing",
  },
  {
    name: "Gherkin",
    icon: "logos:cucumber",
    code: `Scenario: Hello`,
    category: "Testing",
  },
  {
    name: "Postman",
    icon: "skill-icons:postman",
    code: `// API testing`,
    category: "Testing",
  },

  // 🎨 Design & UI
  {
    name: "CSS3",
    icon: "skill-icons:css",
    code: `.highlight { color: #22d3ee; }`,
    category: "Design & UI",
  },
  {
    name: "Sass",
    icon: "skill-icons:sass",
    code: `$primary: #22d3ee;`,
    category: "Design & UI",
  },
  {
    name: "Material UI",
    icon: "skill-icons:materialui-dark",
    code: `<Button>Hello</Button>`,
    category: "Design & UI",
  },
  {
    name: "Bootstrap",
    icon: "skill-icons:bootstrap",
    code: `// UI kit`,
    category: "Design & UI",
  },
  {
    name: "Figma",
    icon: "skill-icons:figma-dark",
    code: `// Design tool`,
    category: "Design & UI",
  },

  // 📊 Data Visualization & Analytics
  {
    name: "Grafana",
    icon: "skill-icons:grafana-dark",
    code: `grafana-server -config`,
    category: "Data Visualization & Analytics",
  },
  {
    name: "Power BI",
    icon: "simple-icons:powerbi",
    code: `// Power BI report`,
    category: "Data Visualization & Analytics",
  },
  {
    name: "Chart.js",
    icon: "logos:chartjs",
    code: `new Chart(ctx,{type:'bar'})`,
    category: "Data Visualization & Analytics",
  },
  {
    name: "CanvasJS",
    icon: "mdi:chart-line",
    code: `new CanvasJS.Chart("id",{})`,
    category: "Data Visualization & Analytics",
  },
  {
    name: "Elasticsearch",
    icon: "skill-icons:elasticsearch-dark",
    code: `GET /_search`,
    category: "Data Visualization & Analytics",
  },
  {
    name: "MATLAB",
    icon: "devicon:matlab",
    code: `disp('Hello')`,
    category: "Data Visualization & Analytics",
  },

  // 🧠 Tools
  {
    name: "Webpack",
    icon: "skill-icons:webpack-dark",
    code: `webpack --mode production`,
    category: "Tools",
  },
  {
    name: "Babel",
    icon: "skill-icons:babel",
    code: `babel src --out-dir dist`,
    category: "Tools",
  },
  {
    name: "pnpm",
    icon: "skill-icons:pnpm-dark",
    code: `pnpm install`,
    category: "Tools",
  },
  {
    name: "Markdown",
    icon: "logos:markdown",
    code: `# Hello`,
    category: "Tools",
  },
  {
    name: "Swagger / OpenAPI",
    icon: "logos:swagger",
    code: `openapi: "3.0.0"`,
    category: "Tools",
  },
  {
    name: "SonarQube",
    icon: "logos:sonarqube",
    code: `sonar-scanner`,
    category: "Tools",
  },
  {
    name: "TurboRepo",
    icon: "logos:turborepo",
    code: `turbo run build`,
    category: "Tools",
  },
  {
    name: "Jira",
    icon: "logos:jira",
    code: `// Project tracking`,
    category: "Tools",
  },

  // Game Development
  {
    name: "Unity",
    icon: "skill-icons:unity-dark",
    code: `Debug.Log("Hello World");`,
    category: "Game Development",
  },
  {
    name: "Unreal Engine",
    icon: "skill-icons:unrealengine",
    code: `UE_LOG(LogTemp, Warning, TEXT("Hello World"));`,
    category: "Game Development",
  },
];
