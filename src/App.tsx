import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 grid place-items-center">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <Badge variant="secondary" className="mb-4 animate-slide-up">
            <Zap className="h-3 w-3 mr-1" />
            Bolt.new Starter Project
          </Badge>

          <h1 className="text-5xl md:text-6xl font-bold tracking-tight animate-slide-up">
            Desenvolvimento mais{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              consistente
            </span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-slide-up">
            Um template com shadcn/ui, Tailwind CSS e TypeScript. Pronto para
            produção com componentes modernos e design system consistente
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Button
              size="lg"
              className="text-lg px-8 hover:scale-105 transition-transform"
              asChild
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://bolt.new/~/github.com/overlens/boltnew-starter"
              >
                Começar Agora
                <ArrowRight className="h-5 w-5 ml-2" />
              </a>
            </Button>
          </div>

          <small className="text-muted-foreground">
            Essa página deve ser <u>removida</u> do seu projeto.
          </small>
        </div>
      </section>
    </div>
  );
}

export default App;
