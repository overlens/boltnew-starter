import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Edit, Mail, Trash2, User } from "lucide-react";

export function CardsSection() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Cards e Badges</h2>

      {/* Badges */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Badges</CardTitle>
          <CardDescription>
            Indicadores visuais para status e categorias
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-2">
            <Badge variant="default">Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="outline">Outline</Badge>
          </div>
          <div className="flex flex-wrap gap-2">
            <Badge className="bg-green-100 text-green-800">Sucesso</Badge>
            <Badge className="bg-yellow-100 text-yellow-800">Atenção</Badge>
            <Badge className="bg-blue-100 text-blue-800">Info</Badge>
            <Badge className="bg-purple-100 text-purple-800">Premium</Badge>
          </div>
        </CardContent>
      </Card>

      {/* Card Examples */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Card Simples</CardTitle>
            <CardDescription>Um card básico com conteúdo</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Este é um exemplo de card simples com título, descrição e
              conteúdo.
            </p>
          </CardContent>
          <CardFooter>
            <Button size="sm">Ação</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Card com Badge</CardTitle>
              <Badge variant="secondary">Novo</Badge>
            </div>
            <CardDescription>Card com indicador visual</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span className="text-sm">João Silva</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-sm">joao@email.com</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Card com Ação</CardTitle>
            <CardDescription>Card com botão de ação no header</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Este card demonstra como adicionar ações no header.
            </p>
          </CardContent>
          <CardFooter className="justify-between">
            <Button variant="outline" size="sm">
              <Edit className="h-4 w-4 mr-1" />
              Editar
            </Button>
            <Button variant="destructive" size="sm">
              <Trash2 className="h-4 w-4 mr-1" />
              Excluir
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
