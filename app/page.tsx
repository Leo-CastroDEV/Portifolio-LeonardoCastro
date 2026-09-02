import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  Terminal,
  Database,
  Cpu,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/zippystarter/container";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { socialLinks } from "@/lib/social-links";
import { ProjectImage } from "@/components/project-image";
import { ContactForm } from "@/components/contact-form";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  const projects = [
    {
      title: "FocoAI — Organizador de Tarefas",
      description:
        "Plataforma de gerenciamento de tarefas desenvolvida para organizar atividades, prazos e prioridades de forma simples e eficiente, integrada a uma API para gerenciamento dos dados.",
      tags: ["React", "JavaScript", "Node.js", "Express", "MySQL", "API REST"],
      images: [
        "/teladelogin.jpg",
        "/teladecadastro.jpg",
        "/telainicial.jpg",
      ],
      link: "https://focoai.onrender.com/",
      repo: "https://github.com/Leo-CastroDEV/OrganizadorDeTarefasAPI",
    },
    {
      title: "AlfaTech | Landing Page de Hospedagem",
      description:
        "Landing page moderna e responsiva para uma empresa de hospedagem de sites, desenvolvida com foco em apresentação de serviços, planos de hospedagem e experiência do usuário.",
      tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      image: "/AlfaTechLandingPage.jpg",
      link: "https://pagina-provedor-de-hospedagem.vercel.app/",
      repo: "https://github.com/Leo-CastroDEV/Pagina-Provedor-de-hospedagem",
    },
    {
      title: "Calculadora Científica",
      description:
        "Aplicação web de calculadora científica desenvolvida para realizar operações matemáticas básicas e avançadas, com uma interface moderna, responsiva e intuitiva.",
      tags: ["HTML", "CSS", "JavaScript"],
      image: "/calculadora.jpg",
      link: "https://leo-castrodev.github.io/TechCalc-/",
      repo: "https://github.com/Leo-CastroDEV/TechCalc-",
    },
  ];

  const skills = [
    {
  category: "Frontend",

  items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Tailwind CSS", "Next.js"],

},

{

  category: "Backend",

  items: ["Node.js", "Express", "REST APIs", "MySQL", "MongoDB"],

},

{

  category: "Ferramentas",

  items: ["Git", "GitHub", "Postman", "Vercel", "PostgreSQL"],

},
  ];

  const blogPosts = [
    {
  title: "Desenvolvimento Web Moderno: Do Frontend ao Backend",

  date: "12 de Ago, 2026",

  readTime: "5 min de leitura",

  excerpt:
    "Uma visão prática sobre como integrar interfaces modernas, APIs e bancos de dados para criar aplicações web completas e funcionais.",

},

{

  title: "Integrando Inteligência Artificial em Aplicações Web",

  date: "19 de Ago, 2026",

  readTime: "7 min de leitura",

  excerpt:
    "Como utilizar APIs de Inteligência Artificial para transformar aplicações web em soluções mais inteligentes, interativas e automatizadas.",

},

{

  title: "Construindo uma API REST com Node.js e Express",

  date: "26 de Ago, 2026",

  readTime: "8 min de leitura",

  excerpt:
    "Um guia prático sobre criação de APIs REST, organização de rotas, integração com banco de dados e boas práticas no desenvolvimento backend.",

},
  ];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground overflow-x-hidden">
      <SiteHeader />

      {/* Seção de introdução */}
      <Container
        wrapperClassName="relative flex min-h-screen items-center overflow-hidden pt-32 sm:pt-24 lg:pt-20"
        className="mx-auto max-w-7xl flex-1"
      >
        {/* Imagem de fundo com sobreposição */}
        <div className="absolute inset-0 z-0">
          <div className="relative w-[100vw] h-[100vh] bg-background overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url('/hero-bg.jpg')] before:absolute before:inset-0 before:bg-primary before:mix-blend-color-dodge dark:before:mix-blend-color" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
        </div>

        <div className="relative z-10 grid items-center gap-10 md:grid-cols-2 md:gap-12">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-mono">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              SISTEMA ONLINE • DISPONÍVEL PARA PROJETOS
            </div>
            <h1 className="text-5xl font-display leading-[0.9] tracking-tighter sm:text-6xl md:text-8xl">
              FULL
              <br />
              STACK
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-foreground">
                DEV_
              </span>
            </h1>
            <p className="md:text-xl text-muted-foreground max-w-md leading-relaxed">
              Transformando ideias em soluções digitais e criando experiências
              web modernas, funcionais e intuitivas. Apaixonado por tecnologia,
              desenvolvimento e inovação, com foco em construir projetos que
              unem criatividade, desempenho e propósito.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-4 sm:gap-4">
              <Link
                href="#projects"
                className={cn("uppercase", buttonVariants({ size: "lg" }))}
              >
                Ver Projetos <ArrowRight className="size-4" />
              </Link>
              <div className="flex gap-2">
                <Link
                  href={socialLinks.github}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                  )}
                >
                  <Github className="h-5 w-5" />
                </Link>
                <Link
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                  )}
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link
                  href={socialLinks.email}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                  )}
                >
                  <Mail className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Elemento decorativo abstrato */}
          <div className="hidden md:block relative h-[500px] w-full border border-border/30 bg-card/10 backdrop-blur-sm p-8">
            <div className="absolute top-0 left-0 size-4 border-t-2 border-l-2 border-primary"></div>
            <div className="absolute top-0 right-0 size-4 border-t-2 border-r-2 border-primary"></div>
            <div className="absolute bottom-0 left-0 size-4 border-b-2 border-l-2 border-primary"></div>
            <div className="absolute bottom-0 right-0 size-4 border-b-2 border-r-2 border-primary"></div>

            <div className="h-full w-full flex flex-col justify-between font-mono text-xs text-muted-foreground">
              <div className="flex justify-between">
                <span>STATUS_SIS: NORMAL</span>
                <span>TEMPO_ATIVO: 99.9%</span>
              </div>
              <div className="space-y-2">
                <div className="h-1 w-full bg-secondary overflow-hidden">
                  <div className="h-full bg-primary w-[75%]"></div>
                </div>
                <div className="flex justify-between">
                  <span>USO_CPU</span>
                  <span>75%</span>
                </div>
                <div className="h-1 w-full bg-secondary overflow-hidden">
                  <div className="h-full bg-primary w-[42%]"></div>
                </div>
                <div className="flex justify-between">
                  <span>USO_MEM</span>
                  <span>42%</span>
                </div>
              </div>
              <div className="text-right">
                <span className="block text-4xl font-bold text-foreground">
                  03
                </span>
                <span>PROJETOS_ATIVOS</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
      {/* Seção sobre */}
      <Container
        component="section"
        wrapperClassName="border-t border-border pt-16 md:pt-24"
        className="mx-auto max-w-7xl flex-1"
      >
        <div className="mb-16 space-y-8">
          <div>
            <h2 className="mb-4 text-3xl font-display tracking-tighter sm:text-4xl md:text-6xl">
              SOBRE
              <br />
              MIM
            </h2>
            <div className="h-1 w-24 bg-primary"></div>
          </div>
          <div className="max-w-4xl space-y-4 text-left leading-relaxed text-muted-foreground">
            <p>
              Sou estudante de Análise e Desenvolvimento de Sistemas, em constante evolução na área de tecnologia e desenvolvimento de software. Tenho construído minha trajetória por meio de projetos práticos, estudos acadêmicos e desenvolvimento de soluções que transformam conhecimento em aplicações reais.
            </p>
            <p>
              Meu foco profissional está no desenvolvimento Full Stack, buscando aprimorar continuamente minhas habilidades em programação, desenvolvimento web, APIs, bancos de dados e integração de soluções com Inteligência Artificial.
            </p>
            <p>
              Tenho um perfil curioso, autodidata, comprometido e orientado à resolução de problemas. Gosto de entender como as tecnologias funcionam, experimentar novas soluções e transformar ideias em projetos funcionais.
            </p>
            <p>
              Atualmente, meu principal objetivo é ingressar no mercado de tecnologia, conquistar experiência profissional e continuar evoluindo como desenvolvedor. Busco oportunidades que me permitam aprender com profissionais experientes, contribuir com projetos reais e construir uma carreira sólida em desenvolvimento de software.
            </p>
          </div>
        </div>
      </Container>

      {/* Seção de projetos */}
      <Container
        id="projects"
        component="section"
        wrapperClassName="border-t border-border py-16 md:py-24"
        className="mx-auto max-w-7xl flex-1"
      >
        <div className="grid justify-between items-end mb-16 gap-4">
          <div>
            <h2 className="mb-4 text-3xl font-display tracking-tighter sm:text-4xl md:text-6xl">
              PROJETOS
              <br />
              DESENVOLVIDOS
            </h2>
            <div className="h-1 w-24 bg-primary"></div>
          </div>
          <p className="max-w-2xl text-left text-muted-foreground">
            Uma coleção de experimentos, aplicativos em produção e contribuições de código aberto.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group grid content-start items-start overflow-hidden rounded-none border-border bg-card pt-0 transition-all duration-300 hover:border-primary/50"
            >
              <ProjectImage
                src={project.image ?? project.images?.[0] ?? "/project-placeholder-1.jpg"}
                alt={project.title}
                images={project.images ?? (project.image ? [project.image] : [])}
              />
              <div className="grid gap-4">
                <CardHeader className="grid gap-4">
                  <CardTitle className="text-2xl font-display group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="font-mono text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {project.description}
                  </CardDescription>
                </CardContent>
              </div>
              <CardFooter className="flex justify-between pt-0">
                <Link
                  href={project.link}
                  className="text-sm font-display flex items-center hover:text-primary transition-colors gap-2"
                >
                  DEMO AO VIVO <ExternalLink className="size-3" />
                </Link>
                <Link
                  href={project.repo}
                  className="text-sm font-display flex items-center hover:text-primary transition-colors gap-2"
                >
                  CÓDIGO <Github className="size-3" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </Container>
      {/* Matriz de habilidades */}
      <Container
        id="skills"
        component="section"
        wrapperClassName="border-t border-border bg-secondary/20 py-16 md:py-24"
        className="mx-auto max-w-7xl flex-1"
      >
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h2 className="mb-6 text-3xl font-display tracking-tighter sm:text-4xl">
              HABILIDADES
            </h2>
            <p className="text-muted-foreground mb-8">
              As tecnologias e ferramentas que utilizo para construir produtos
              digitais de alta performance e escalabilidade.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 border border-border bg-background flex flex-col items-center justify-center aspect-square hover:border-primary transition-colors">
                <Code2 className="h-8 w-8 mb-2 text-primary" />
                <span className="font-mono text-xs">CÓDIGO_LIMPO</span>
              </div>
              <div className="p-4 border border-border bg-background flex flex-col items-center justify-center aspect-square hover:border-primary transition-colors">
                <Database className="h-8 w-8 mb-2 text-primary" />
                <span className="font-mono text-xs">BANCO_DE_DADOS</span>
              </div>
              <div className="p-4 border border-border bg-background flex flex-col items-center justify-center aspect-square hover:border-primary transition-colors">
                <Cpu className="h-8 w-8 mb-2 text-primary" />
                <span className="font-mono text-xs">PERFORMANCE</span>
              </div>
              <div className="p-4 border border-border bg-background flex flex-col items-center justify-center aspect-square hover:border-primary transition-colors">
                <Terminal className="h-8 w-8 mb-2 text-primary" />
                <span className="font-mono text-xs">DEVOPS</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-8 grid sm:grid-cols-3 gap-8">
            {skills.map((skillGroup, idx) => (
              <div key={idx} className="space-y-6">
                <h3 className="text-xl font-display border-b border-primary/30 pb-2 inline-block">
                  {skillGroup.category}
                </h3>
                <ul className="space-y-3">
                  {skillGroup.items.map((skill, sIdx) => (
                    <li
                      key={sIdx}
                      className="flex items-center justify-between group"
                    >
                      <span className="font-mono text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                        {skill}
                      </span>
                      <div className="h-[2px] w-12 bg-secondary group-hover:bg-primary transition-colors"></div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Container>
      {/* Seção de blog */}
      <Container
        id="blog"
        className="mx-auto max-w-7xl border-t border-border py-16 md:py-24"
      >
        <h2 className="mb-10 text-3xl font-display uppercase sm:text-4xl md:mb-12">BLOG & ARTIGOS</h2>

        <div className="grid gap-8">
          {blogPosts.map((post, index) => (
            <Link href="#" key={index} className="group">
              <div className="mb-2 grid items-baseline gap-2 sm:grid-cols-[1fr_auto] sm:gap-4">
                <h3 className="text-2xl font-display group-hover:text-primary transition-colors text-balance">
                  {post.title}
                </h3>
                <span className="font-mono text-xs text-muted-foreground">
                  {post.date} • {post.readTime}
                </span>
              </div>
              <p className="text-muted-foreground mb-4 max-w-2xl">
                {post.excerpt}
              </p>
              <div className="h-[1px] w-full bg-border group-hover:bg-primary/50 transition-colors"></div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline">VER TODOS OS ARTIGOS</Button>
        </div>
      </Container>
      {/* Seção de contato */}
      <Container id="contact" className="border-t border-border bg-card py-16 md:py-24">
        <div className="max-w-2xl justify-self-center">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-3xl font-display sm:text-4xl">ENTRAR EM CONTATO</h2>
            <p className="text-muted-foreground">
              Tem um projeto em mente ou quer conversar sobre oportunidades e tecnologia?
              Envie uma mensagem.
            </p>
          </div>

          <ContactForm />
        </div>
      </Container>
      {/* Rodapé */}
      <Container
        component="footer"
        className="mx-auto max-w-7xl border-t border-border bg-background py-8 text-center"
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-xs font-mono text-muted-foreground">
            © 2026 LEONARDO CASTRO. TODOS OS DIREITOS RESERVADOS.
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-mono text-muted-foreground">
            <Link href={socialLinks.github} className="hover:text-primary transition-colors" target="_blank" rel="noreferrer">
              GITHUB
            </Link>
            <Link href={socialLinks.linkedin} className="hover:text-primary transition-colors" target="_blank" rel="noreferrer">
              LINKEDIN
            </Link>
            <Link href={socialLinks.twitter} className="hover:text-primary transition-colors" target="_blank" rel="noreferrer">
              TWITTER
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
