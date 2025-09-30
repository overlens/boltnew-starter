import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Input } from "@/components/ui/input";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Label } from "@/components/ui/label";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Skeleton } from "@/components/ui/skeleton";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Toaster } from "@/components/ui/toaster";
import { Toggle } from "@/components/ui/toggle";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { toast } from "@/hooks/use-toast";
import {
  AlertCircle,
  Bold,
  ChevronDown,
  Italic,
  Search,
  Terminal,
  Underline,
} from "lucide-react";
import { useState } from "react";

function DesignSystem() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [progress, setProgress] = useState(60);

  return (
    <div className="min-h-screen w-full bg-background">
      <div className="container mx-auto">
        <Toaster />

        {/* Header */}
        <div className="border-b">
          <div className="w-full py-8 px-4">
            <h1 className="text-4xl font-bold mb-2">Design System</h1>
            <p className="text-muted-foreground">
              Documentação completa de todos os componentes UI disponíveis
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="w-full py-8 px-4 space-y-16">
          {/* Accordion */}
          <section className="space-y-4">
            <div>
              <h2 className="text-3xl font-semibold mb-2">Accordion</h2>
              <p className="text-muted-foreground">
                Seções expansíveis para organizar conteúdo
              </p>
            </div>
            <Card>
              <CardContent className="pt-6">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>É acessível?</AccordionTrigger>
                    <AccordionContent>
                      Sim. Segue as diretrizes WAI-ARIA de design.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>É estilizado?</AccordionTrigger>
                    <AccordionContent>
                      Sim. Vem com estilos padrão que podem ser customizados.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>É animado?</AccordionTrigger>
                    <AccordionContent>
                      Sim. Animado por padrão, mas pode ser desabilitado.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </section>

          {/* Alert */}
          <section className="space-y-4">
            <div>
              <h2 className="text-3xl font-semibold mb-2">Alert</h2>
              <p className="text-muted-foreground">
                Exibe mensagens de alerta importantes
              </p>
            </div>
            <div className="space-y-4">
              <Alert>
                <Terminal className="h-4 w-4" />
                <AlertTitle>Informação</AlertTitle>
                <AlertDescription>
                  Mensagem informativa padrão para o usuário.
                </AlertDescription>
              </Alert>
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Erro</AlertTitle>
                <AlertDescription>
                  Algo deu errado. Por favor, tente novamente.
                </AlertDescription>
              </Alert>
            </div>
          </section>

          {/* Alert Dialog */}
          <section className="space-y-4">
            <div>
              <h2 className="text-3xl font-semibold mb-2">Alert Dialog</h2>
              <p className="text-muted-foreground">
                Diálogo modal para confirmações importantes
              </p>
            </div>
            <Card>
              <CardContent className="pt-6">
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="outline">Abrir Diálogo</Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Você tem certeza?</AlertDialogTitle>
                      <AlertDialogDescription>
                        Esta ação não pode ser desfeita. Isso irá
                        permanentemente deletar seus dados.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancelar</AlertDialogCancel>
                      <AlertDialogAction>Continuar</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </CardContent>
            </Card>
          </section>

          {/* Avatar */}
          <section className="space-y-4">
            <div>
              <h2 className="text-3xl font-semibold mb-2">Avatar</h2>
              <p className="text-muted-foreground">
                Exibe imagens de perfil com fallback
              </p>
            </div>
            <Card>
              <CardContent className="pt-6">
                <div className="flex gap-4 items-center">
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <Avatar>
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <Avatar className="h-12 w-12">
                    <AvatarFallback>LG</AvatarFallback>
                  </Avatar>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Badge */}
          <section className="space-y-4">
            <div>
              <h2 className="text-3xl font-semibold mb-2">Badge</h2>
              <p className="text-muted-foreground">
                Pequenos rótulos para categorizar conteúdo
              </p>
            </div>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-wrap gap-2">
                  <Badge>Default</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="destructive">Destructive</Badge>
                  <Badge variant="outline">Outline</Badge>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Breadcrumb */}
          <section className="space-y-4">
            <div>
              <h2 className="text-3xl font-semibold mb-2">Breadcrumb</h2>
              <p className="text-muted-foreground">Navegação hierárquica</p>
            </div>
            <Card>
              <CardContent className="pt-6">
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem>
                      <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbLink href="/components">
                        Componentes
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </CardContent>
            </Card>
          </section>

          {/* Button */}
          <section className="space-y-4">
            <div>
              <h2 className="text-3xl font-semibold mb-2">Button</h2>
              <p className="text-muted-foreground">
                Botões em diversos estilos e tamanhos
              </p>
            </div>
            <Card>
              <CardContent className="pt-6 space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Button>Default</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="destructive">Destructive</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="link">Link</Button>
                </div>
                <div className="flex flex-wrap gap-2 items-center">
                  <Button size="sm">Small</Button>
                  <Button size="default">Default</Button>
                  <Button size="lg">Large</Button>
                  <Button size="icon">
                    <Search className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Calendar */}
          <section className="space-y-4">
            <div>
              <h2 className="text-3xl font-semibold mb-2">Calendar</h2>
              <p className="text-muted-foreground">
                Seletor de data interativo
              </p>
            </div>
            <Card>
              <CardContent className="pt-6 flex justify-center">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border"
                />
              </CardContent>
            </Card>
          </section>

          {/* Card */}
          <section className="space-y-4">
            <div>
              <h2 className="text-3xl font-semibold mb-2">Card</h2>
              <p className="text-muted-foreground">
                Container flexível para agrupar conteúdo
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Card Simples</CardTitle>
                  <CardDescription>Descrição do card</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Conteúdo do card aqui.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Card com Footer</CardTitle>
                  <CardDescription>Exemplo com rodapé</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Conteúdo do card.</p>
                </CardContent>
                <CardFooter>
                  <Button>Ação</Button>
                </CardFooter>
              </Card>
            </div>
          </section>

          {/* Carousel */}
          <section className="space-y-4">
            <div>
              <h2 className="text-3xl font-semibold mb-2">Carousel</h2>
              <p className="text-muted-foreground">
                Exibição rotativa de conteúdo
              </p>
            </div>
            <Card>
              <CardContent className="pt-6">
                <Carousel className="w-full max-w-xs mx-auto">
                  <CarouselContent>
                    {Array.from({ length: 5 }).map((_, index) => (
                      <CarouselItem key={index}>
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-6">
                            <span className="text-4xl font-semibold">
                              {index + 1}
                            </span>
                          </CardContent>
                        </Card>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </CardContent>
            </Card>
          </section>

          {/* Checkbox */}
          <section className="space-y-4">
            <div>
              <h2 className="text-3xl font-semibold mb-2">Checkbox</h2>
              <p className="text-muted-foreground">
                Caixas de seleção para múltiplas escolhas
              </p>
            </div>
            <Card>
              <CardContent className="pt-6 space-y-3">
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms1" />
                  <Label htmlFor="terms1">Aceitar termos e condições</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms2" defaultChecked />
                  <Label htmlFor="terms2">Receber notificações</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms3" disabled />
                  <Label htmlFor="terms3">Opção desabilitada</Label>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Collapsible */}
          <section className="space-y-4">
            <div>
              <h2 className="text-3xl font-semibold mb-2">Collapsible</h2>
              <p className="text-muted-foreground">
                Conteúdo expansível simples
              </p>
            </div>
            <Card>
              <CardContent className="pt-6">
                <Collapsible className="space-y-2">
                  <CollapsibleTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-between"
                    >
                      Clique para expandir
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="space-y-2">
                    <div className="rounded-md border px-4 py-3 text-sm">
                      Conteúdo oculto 1
                    </div>
                    <div className="rounded-md border px-4 py-3 text-sm">
                      Conteúdo oculto 2
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </CardContent>
            </Card>
          </section>

          {/* Command */}
          <section className="space-y-4">
            <div>
              <h2 className="text-3xl font-semibold mb-2">Command</h2>
              <p className="text-muted-foreground">
                Paleta de comandos com busca
              </p>
            </div>
            <Card>
              <CardContent className="pt-6">
                <Command className="rounded-lg border shadow-md">
                  <CommandInput placeholder="Digite um comando..." />
                  <CommandList>
                    <CommandEmpty>Nenhum resultado encontrado.</CommandEmpty>
                    <CommandGroup heading="Sugestões">
                      <CommandItem>Calendar</CommandItem>
                      <CommandItem>Search Emoji</CommandItem>
                      <CommandItem>Calculator</CommandItem>
                    </CommandGroup>
                  </CommandList>
                </Command>
              </CardContent>
            </Card>
          </section>

          {/* Context Menu */}
          <section className="space-y-4">
            <div>
              <h2 className="text-3xl font-semibold mb-2">Context Menu</h2>
              <p className="text-muted-foreground">
                Menu contextual ao clicar com botão direito
              </p>
            </div>
            <Card>
              <CardContent className="pt-6">
                <ContextMenu>
                  <ContextMenuTrigger className="flex h-32 w-full items-center justify-center rounded-md border border-dashed text-sm">
                    Clique com o botão direito aqui
                  </ContextMenuTrigger>
                  <ContextMenuContent>
                    <ContextMenuItem>Perfil</ContextMenuItem>
                    <ContextMenuItem>Configurações</ContextMenuItem>
                    <ContextMenuItem>Sair</ContextMenuItem>
                  </ContextMenuContent>
                </ContextMenu>
              </CardContent>
            </Card>
          </section>

          {/* Dialog */}
          <section className="space-y-4">
            <div>
              <h2 className="text-3xl font-semibold mb-2">Dialog</h2>
              <p className="text-muted-foreground">Janela modal sobreposta</p>
            </div>
            <Card>
              <CardContent className="pt-6">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>Abrir Dialog</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Título do Dialog</DialogTitle>
                      <DialogDescription>
                        Descrição do dialog. Adicione conteúdo e formulários
                        aqui.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="py-4">
                      <p className="text-sm text-muted-foreground">
                        Conteúdo principal do dialog.
                      </p>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          </section>

          {/* Drawer */}
          <section className="space-y-4">
            <div>
              <h2 className="text-3xl font-semibold mb-2">Drawer</h2>
              <p className="text-muted-foreground">
                Painel deslizante a partir da borda
              </p>
            </div>
            <Card>
              <CardContent className="pt-6">
                <Drawer>
                  <DrawerTrigger asChild>
                    <Button>Abrir Drawer</Button>
                  </DrawerTrigger>
                  <DrawerContent>
                    <DrawerHeader>
                      <DrawerTitle>Título do Drawer</DrawerTitle>
                      <DrawerDescription>
                        Descrição do drawer.
                      </DrawerDescription>
                    </DrawerHeader>
                    <div className="p-4">
                      <p className="text-sm text-muted-foreground">
                        Conteúdo do drawer.
                      </p>
                    </div>
                    <DrawerFooter>
                      <Button>Confirmar</Button>
                      <DrawerClose asChild>
                        <Button variant="outline">Cancelar</Button>
                      </DrawerClose>
                    </DrawerFooter>
                  </DrawerContent>
                </Drawer>
              </CardContent>
            </Card>
          </section>

          {/* Dropdown Menu */}
          <section className="space-y-4">
            <div>
              <h2 className="text-3xl font-semibold mb-2">Dropdown Menu</h2>
              <p className="text-muted-foreground">Menu suspenso com opções</p>
            </div>
            <Card>
              <CardContent className="pt-6">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline">Abrir Menu</Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Perfil</DropdownMenuItem>
                    <DropdownMenuItem>Configurações</DropdownMenuItem>
                    <DropdownMenuItem>Sair</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </CardContent>
            </Card>
          </section>

          {/* Hover Card */}
          <section className="space-y-4">
            <div>
              <h2 className="text-3xl font-semibold mb-2">Hover Card</h2>
              <p className="text-muted-foreground">
                Card informativo ao passar o mouse
              </p>
            </div>
            <Card>
              <CardContent className="pt-6">
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <Button variant="link">@usuário</Button>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80">
                    <div className="flex justify-between space-x-4">
                      <Avatar>
                        <AvatarFallback>US</AvatarFallback>
                      </Avatar>
                      <div className="space-y-1">
                        <h4 className="text-sm font-semibold">@usuário</h4>
                        <p className="text-sm">
                          Informações adicionais aparecem ao passar o mouse.
                        </p>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </CardContent>
            </Card>
          </section>

          {/* Input */}
          <section className="space-y-4">
            <div>
              <h2 className="text-3xl font-semibold mb-2">Input</h2>
              <p className="text-muted-foreground">
                Campos de entrada de texto
              </p>
            </div>
            <Card>
              <CardContent className="pt-6 space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="email@exemplo.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Senha</Label>
                  <Input id="password" type="password" placeholder="••••••••" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="disabled">Desabilitado</Label>
                  <Input
                    id="disabled"
                    disabled
                    placeholder="Campo desabilitado"
                  />
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Input OTP */}
          <section className="space-y-4">
            <div>
              <h2 className="text-3xl font-semibold mb-2">Input OTP</h2>
              <p className="text-muted-foreground">
                Campo para código de verificação
              </p>
            </div>
            <Card>
              <CardContent className="pt-6 flex justify-center">
                <InputOTP maxLength={6}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </CardContent>
            </Card>
          </section>

          {/* Label */}
          <section className="space-y-4">
            <div>
              <h2 className="text-3xl font-semibold mb-2">Label</h2>
              <p className="text-muted-foreground">
                Rótulos acessíveis para formulários
              </p>
            </div>
            <Card>
              <CardContent className="pt-6 space-y-2">
                <Label>Label Padrão</Label>
                <Label htmlFor="field">Label com associação</Label>
                <Input id="field" placeholder="Campo associado" />
              </CardContent>
            </Card>
          </section>

          {/* Menubar */}
          <section className="space-y-4">
            <div>
              <h2 className="text-3xl font-semibold mb-2">Menubar</h2>
              <p className="text-muted-foreground">Barra de menu horizontal</p>
            </div>
            <Card>
              <CardContent className="pt-6">
                <Menubar>
                  <MenubarMenu>
                    <MenubarTrigger>Arquivo</MenubarTrigger>
                    <MenubarContent>
                      <MenubarItem>Novo</MenubarItem>
                      <MenubarItem>Abrir</MenubarItem>
                      <MenubarSeparator />
                      <MenubarItem>Sair</MenubarItem>
                    </MenubarContent>
                  </MenubarMenu>
                  <MenubarMenu>
                    <MenubarTrigger>Editar</MenubarTrigger>
                    <MenubarContent>
                      <MenubarItem>Desfazer</MenubarItem>
                      <MenubarItem>Refazer</MenubarItem>
                    </MenubarContent>
                  </MenubarMenu>
                  <MenubarMenu>
                    <MenubarTrigger>Ajuda</MenubarTrigger>
                    <MenubarContent>
                      <MenubarItem>Documentação</MenubarItem>
                    </MenubarContent>
                  </MenubarMenu>
                </Menubar>
              </CardContent>
            </Card>
          </section>

          {/* Navigation Menu */}
          <section className="space-y-4">
            <div>
              <h2 className="text-3xl font-semibold mb-2">Navigation Menu</h2>
              <p className="text-muted-foreground">
                Menu de navegação principal
              </p>
            </div>
            <Card>
              <CardContent className="pt-6">
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>Começar</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="w-[400px] p-4">
                          <p className="text-sm text-muted-foreground">
                            Conteúdo do menu de navegação
                          </p>
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuLink className="px-4 py-2">
                        Documentação
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </CardContent>
            </Card>
          </section>

          {/* Pagination */}
          <section className="space-y-4">
            <div>
              <h2 className="text-3xl font-semibold mb-2">Pagination</h2>
              <p className="text-muted-foreground">Navegação entre páginas</p>
            </div>
            <Card>
              <CardContent className="pt-6">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" isActive>
                        2
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext href="#" />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </CardContent>
            </Card>
          </section>

          {/* Popover */}
          <section className="space-y-4">
            <div>
              <h2 className="text-3xl font-semibold mb-2">Popover</h2>
              <p className="text-muted-foreground">
                Conteúdo flutuante ao clicar
              </p>
            </div>
            <Card>
              <CardContent className="pt-6">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline">Abrir Popover</Button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <div className="space-y-2">
                      <h4 className="font-medium leading-none">Dimensões</h4>
                      <p className="text-sm text-muted-foreground">
                        Defina as dimensões do conteúdo.
                      </p>
                    </div>
                  </PopoverContent>
                </Popover>
              </CardContent>
            </Card>
          </section>

          {/* Progress */}
          <section className="space-y-4">
            <div>
              <h2 className="text-3xl font-semibold mb-2">Progress</h2>
              <p className="text-muted-foreground">Barra de progresso</p>
            </div>
            <Card>
              <CardContent className="pt-6 space-y-4">
                <Progress value={33} />
                <Progress value={progress} />
                <Progress value={85} />
              </CardContent>
            </Card>
          </section>

          {/* Radio Group */}
          <section className="space-y-4">
            <div>
              <h2 className="text-3xl font-semibold mb-2">Radio Group</h2>
              <p className="text-muted-foreground">
                Grupo de opções de escolha única
              </p>
            </div>
            <Card>
              <CardContent className="pt-6">
                <RadioGroup defaultValue="option-1">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option-1" id="option-1" />
                    <Label htmlFor="option-1">Opção 1</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option-2" id="option-2" />
                    <Label htmlFor="option-2">Opção 2</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option-3" id="option-3" disabled />
                    <Label htmlFor="option-3">Opção desabilitada</Label>
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>
          </section>

          {/* Resizable */}
          <section className="space-y-4">
            <div>
              <h2 className="text-3xl font-semibold mb-2">Resizable</h2>
              <p className="text-muted-foreground">Painéis redimensionáveis</p>
            </div>
            <Card>
              <CardContent className="pt-6">
                <ResizablePanelGroup
                  direction="horizontal"
                  className="min-h-[200px] rounded-lg border"
                >
                  <ResizablePanel defaultSize={50}>
                    <div className="flex h-full items-center justify-center p-6">
                      <span className="font-semibold">Painel 1</span>
                    </div>
                  </ResizablePanel>
                  <ResizableHandle />
                  <ResizablePanel defaultSize={50}>
                    <div className="flex h-full items-center justify-center p-6">
                      <span className="font-semibold">Painel 2</span>
                    </div>
                  </ResizablePanel>
                </ResizablePanelGroup>
              </CardContent>
            </Card>
          </section>

          {/* Scroll Area */}
          <section className="space-y-4">
            <div>
              <h2 className="text-3xl font-semibold mb-2">Scroll Area</h2>
              <p className="text-muted-foreground">
                Área com scroll customizado
              </p>
            </div>
            <Card>
              <CardContent className="pt-6">
                <ScrollArea className="h-[200px] w-full rounded-md border p-4">
                  <div className="space-y-2">
                    {Array.from({ length: 20 }).map((_, i) => (
                      <div key={i} className="text-sm">
                        Item de scroll {i + 1}
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </section>

          {/* Select */}
          <section className="space-y-4">
            <div>
              <h2 className="text-3xl font-semibold mb-2">Select</h2>
              <p className="text-muted-foreground">Menu suspenso de seleção</p>
            </div>
            <Card>
              <CardContent className="pt-6 space-y-2">
                <Label>Selecione uma opção</Label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Escolha uma opção" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="option1">Opção 1</SelectItem>
                    <SelectItem value="option2">Opção 2</SelectItem>
                    <SelectItem value="option3">Opção 3</SelectItem>
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>
          </section>

          {/* Separator */}
          <section className="space-y-4">
            <div>
              <h2 className="text-3xl font-semibold mb-2">Separator</h2>
              <p className="text-muted-foreground">
                Divisor visual entre conteúdos
              </p>
            </div>
            <Card>
              <CardContent className="pt-6 space-y-4">
                <div>Conteúdo acima</div>
                <Separator />
                <div>Conteúdo abaixo</div>
                <div className="flex items-center gap-4">
                  <div>Esquerda</div>
                  <Separator orientation="vertical" className="h-8" />
                  <div>Direita</div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Sheet */}
          <section className="space-y-4">
            <div>
              <h2 className="text-3xl font-semibold mb-2">Sheet</h2>
              <p className="text-muted-foreground">Painel lateral deslizante</p>
            </div>
            <Card>
              <CardContent className="pt-6">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button>Abrir Sheet</Button>
                  </SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle>Título do Sheet</SheetTitle>
                      <SheetDescription>
                        Descrição do conteúdo lateral.
                      </SheetDescription>
                    </SheetHeader>
                    <div className="py-4">
                      <p className="text-sm text-muted-foreground">
                        Conteúdo do painel lateral.
                      </p>
                    </div>
                  </SheetContent>
                </Sheet>
              </CardContent>
            </Card>
          </section>

          {/* Skeleton */}
          <section className="space-y-4">
            <div>
              <h2 className="text-3xl font-semibold mb-2">Skeleton</h2>
              <p className="text-muted-foreground">
                Placeholder de carregamento
              </p>
            </div>
            <Card>
              <CardContent className="pt-6 space-y-3">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-20 w-full" />
              </CardContent>
            </Card>
          </section>

          {/* Slider */}
          <section className="space-y-4">
            <div>
              <h2 className="text-3xl font-semibold mb-2">Slider</h2>
              <p className="text-muted-foreground">
                Controle deslizante para valores
              </p>
            </div>
            <Card>
              <CardContent className="pt-6 space-y-6">
                <div className="space-y-2">
                  <Label>Volume: {progress}%</Label>
                  <Slider
                    value={[progress]}
                    onValueChange={(value) => setProgress(value[0])}
                    max={100}
                    step={1}
                  />
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Switch */}
          <section className="space-y-4">
            <div>
              <h2 className="text-3xl font-semibold mb-2">Switch</h2>
              <p className="text-muted-foreground">Alternador on/off</p>
            </div>
            <Card>
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-center space-x-2">
                  <Switch id="switch1" />
                  <Label htmlFor="switch1">Notificações</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="switch2" defaultChecked />
                  <Label htmlFor="switch2">Modo escuro</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="switch3" disabled />
                  <Label htmlFor="switch3">Desabilitado</Label>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Table */}
          <section className="space-y-4">
            <div>
              <h2 className="text-3xl font-semibold mb-2">Table</h2>
              <p className="text-muted-foreground">
                Tabela para exibição de dados
              </p>
            </div>
            <Card>
              <CardContent className="pt-6">
                <Table>
                  <TableCaption>Lista de produtos recentes</TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Produto</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Valor</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Produto A</TableCell>
                      <TableCell>Ativo</TableCell>
                      <TableCell className="text-right">R$ 250,00</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Produto B</TableCell>
                      <TableCell>Pendente</TableCell>
                      <TableCell className="text-right">R$ 150,00</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Produto C</TableCell>
                      <TableCell>Ativo</TableCell>
                      <TableCell className="text-right">R$ 350,00</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </section>

          {/* Tabs */}
          <section className="space-y-4">
            <div>
              <h2 className="text-3xl font-semibold mb-2">Tabs</h2>
              <p className="text-muted-foreground">Navegação por abas</p>
            </div>
            <Card>
              <CardContent className="pt-6">
                <Tabs defaultValue="tab1" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="tab1">Aba 1</TabsTrigger>
                    <TabsTrigger value="tab2">Aba 2</TabsTrigger>
                    <TabsTrigger value="tab3">Aba 3</TabsTrigger>
                  </TabsList>
                  <TabsContent value="tab1">
                    <p className="text-sm text-muted-foreground">
                      Conteúdo da aba 1
                    </p>
                  </TabsContent>
                  <TabsContent value="tab2">
                    <p className="text-sm text-muted-foreground">
                      Conteúdo da aba 2
                    </p>
                  </TabsContent>
                  <TabsContent value="tab3">
                    <p className="text-sm text-muted-foreground">
                      Conteúdo da aba 3
                    </p>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </section>

          {/* Textarea */}
          <section className="space-y-4">
            <div>
              <h2 className="text-3xl font-semibold mb-2">Textarea</h2>
              <p className="text-muted-foreground">Campo de texto multilinha</p>
            </div>
            <Card>
              <CardContent className="pt-6 space-y-2">
                <Label htmlFor="message">Mensagem</Label>
                <Textarea
                  id="message"
                  placeholder="Digite sua mensagem aqui..."
                  rows={5}
                />
              </CardContent>
            </Card>
          </section>

          {/* Toast */}
          <section className="space-y-4">
            <div>
              <h2 className="text-3xl font-semibold mb-2">Toast</h2>
              <p className="text-muted-foreground">Notificações temporárias</p>
            </div>
            <Card>
              <CardContent className="pt-6 flex flex-wrap gap-2">
                <Button
                  onClick={() => {
                    toast({
                      title: "Sucesso!",
                      description: "Operação realizada com sucesso.",
                    });
                  }}
                >
                  Toast Padrão
                </Button>
                <Button
                  variant="destructive"
                  onClick={() => {
                    toast({
                      title: "Erro!",
                      description: "Algo deu errado.",
                    });
                  }}
                >
                  Toast de Erro
                </Button>
              </CardContent>
            </Card>
          </section>

          {/* Toggle */}
          <section className="space-y-4">
            <div>
              <h2 className="text-3xl font-semibold mb-2">Toggle</h2>
              <p className="text-muted-foreground">Botão de alternância</p>
            </div>
            <Card>
              <CardContent className="pt-6 flex flex-wrap gap-2">
                <Toggle aria-label="Toggle bold">
                  <Bold className="h-4 w-4" />
                </Toggle>
                <Toggle aria-label="Toggle italic">
                  <Italic className="h-4 w-4" />
                </Toggle>
                <Toggle aria-label="Toggle underline">
                  <Underline className="h-4 w-4" />
                </Toggle>
              </CardContent>
            </Card>
          </section>

          {/* Toggle Group */}
          <section className="space-y-4">
            <div>
              <h2 className="text-3xl font-semibold mb-2">Toggle Group</h2>
              <p className="text-muted-foreground">
                Grupo de botões de alternância
              </p>
            </div>
            <Card>
              <CardContent className="pt-6">
                <ToggleGroup type="multiple">
                  <ToggleGroupItem value="bold" aria-label="Toggle bold">
                    <Bold className="h-4 w-4" />
                  </ToggleGroupItem>
                  <ToggleGroupItem value="italic" aria-label="Toggle italic">
                    <Italic className="h-4 w-4" />
                  </ToggleGroupItem>
                  <ToggleGroupItem
                    value="underline"
                    aria-label="Toggle underline"
                  >
                    <Underline className="h-4 w-4" />
                  </ToggleGroupItem>
                </ToggleGroup>
              </CardContent>
            </Card>
          </section>

          {/* Tooltip */}
          <section className="space-y-4">
            <div>
              <h2 className="text-3xl font-semibold mb-2">Tooltip</h2>
              <p className="text-muted-foreground">Dica ao passar o mouse</p>
            </div>
            <Card>
              <CardContent className="pt-6">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline">Passe o mouse aqui</Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Informação adicional em tooltip</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </CardContent>
            </Card>
          </section>
        </div>

        {/* Footer */}
        <div className="border-t mt-16">
          <div className="w-full py-8 px-4 text-center text-sm text-muted-foreground">
            <p>Design System - Todos os componentes UI disponíveis</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesignSystem;
