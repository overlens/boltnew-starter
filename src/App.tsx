import { CircleCheck as CheckCircle2 } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-8">
      <div className="max-w-3xl w-full space-y-8">
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <CheckCircle2 className="h-16 w-16 text-green-600" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight">
            Shadcn/UI Configurado
          </h1>
          <p className="text-lg text-muted-foreground">
            O Design System está pronto para uso no projeto
          </p>
        </div>

        <div className="border border-border rounded-lg p-6 bg-card space-y-4">
          <h2 className="text-xl font-semibold">Configuração Completa:</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span><strong>Tailwind CSS</strong> - Configurado com variáveis de tema</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span><strong>Path Aliases</strong> - @/* configurado para imports limpos</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span><strong>Lucide Icons</strong> - Biblioteca de ícones integrada</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span><strong>Dark Mode</strong> - Suporte via class strategy</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span><strong>70+ Componentes</strong> - Prontos para uso imediato</span>
            </li>
          </ul>
        </div>

        <div className="border border-border rounded-lg p-6 bg-muted/50 space-y-3">
          <h3 className="font-semibold">Componentes Disponíveis:</h3>
          <div className="flex flex-wrap gap-2 text-sm">
            {[
              'Button', 'Card', 'Input', 'Label', 'Select', 'Checkbox',
              'Dialog', 'Sheet', 'Tabs', 'Alert', 'Badge', 'Avatar',
              'Dropdown', 'Form', 'Table', 'Calendar', 'Chart', 'Toast'
            ].map((component) => (
              <span
                key={component}
                className="px-3 py-1 bg-background border border-border rounded-md"
              >
                {component}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
