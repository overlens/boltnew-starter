import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Heart, Info } from "lucide-react";

export function OverlaysSection() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Modais e Overlays</h2>

      {/* Dialogs */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Modais</CardTitle>
          <CardDescription>Diálogos e modais para interações</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button>Abrir Modal</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Confirmação</DialogTitle>
                  <DialogDescription>
                    Esta é uma ação importante. Tem certeza que deseja
                    continuar?
                  </DialogDescription>
                </DialogHeader>
                <div className="flex justify-end gap-2 mt-4">
                  <Button variant="outline">Cancelar</Button>
                  <Button>Confirmar</Button>
                </div>
              </DialogContent>
            </Dialog>

            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive">Abrir Alert</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Você tem certeza?</AlertDialogTitle>
                  <AlertDialogDescription>
                    Esta ação não pode ser desfeita. Isso excluirá
                    permanentemente o item e removerá os dados de nossos
                    servidores.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancelar</AlertDialogCancel>
                  <AlertDialogAction>Continuar</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </CardContent>
      </Card>

      {/* Tooltips and Hover Cards */}
      <Card>
        <CardHeader>
          <CardTitle>Tooltips e Hover Cards</CardTitle>
          <CardDescription>
            Elementos de interface para informações adicionais
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <Button variant="outline">
              <Info className="h-4 w-4 mr-2" />
              Hover para ver tooltip
            </Button>
            <Button variant="outline">
              <Heart className="h-4 w-4 mr-2" />
              Hover para ver card
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
