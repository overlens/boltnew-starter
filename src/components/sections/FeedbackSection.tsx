import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { AlertCircle, Info } from "lucide-react";
import { useState } from "react";

export function FeedbackSection() {
  const [progress, setProgress] = useState(33);

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Feedback e Notificações</h2>

      {/* Alerts */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Alertas</CardTitle>
          <CardDescription>
            Mensagens de feedback para o usuário
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert>
            <Info className="h-4 w-4" />
            <AlertTitle>Informação</AlertTitle>
            <AlertDescription>
              Esta é uma mensagem informativa para o usuário.
            </AlertDescription>
          </Alert>

          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Erro</AlertTitle>
            <AlertDescription>
              Algo deu errado. Tente novamente mais tarde.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Progress */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Progresso</CardTitle>
          <CardDescription>
            Indicadores de progresso e carregamento
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Progresso do projeto</span>
              <span>{progress}%</span>
            </div>
            <Progress value={progress} />
          </div>
          <div className="flex gap-2">
            <Button
              size="sm"
              onClick={() => setProgress(Math.max(0, progress - 10))}
            >
              -10%
            </Button>
            <Button
              size="sm"
              onClick={() => setProgress(Math.min(100, progress + 10))}
            >
              +10%
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Skeleton Loading */}
      <Card>
        <CardHeader>
          <CardTitle>Estados de Carregamento</CardTitle>
          <CardDescription>Skeleton loaders para melhor UX</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
            <Skeleton className="h-4 w-[150px]" />
          </div>
          <div className="flex items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[200px]" />
              <Skeleton className="h-4 w-[160px]" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
