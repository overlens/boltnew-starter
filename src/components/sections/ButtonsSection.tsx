import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Plus } from "lucide-react";

export function ButtonsSection() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Botões</h2>

      {/* Button Variants */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Variantes</CardTitle>
          <CardDescription>
            Diferentes estilos de botões para diferentes contextos
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-4">
            <Button variant="default">Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
        </CardContent>
      </Card>

      {/* Button Sizes */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Tamanhos</CardTitle>
          <CardDescription>
            Diferentes tamanhos para diferentes densidades
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap items-center gap-4">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
            <Button size="icon">
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Button States */}
      <Card>
        <CardHeader>
          <CardTitle>Estados</CardTitle>
          <CardDescription>
            Botões em diferentes estados de interação
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-4">
            <Button>Normal</Button>
            <Button disabled>Disabled</Button>
            <Button className="opacity-50" disabled>
              Loading
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
