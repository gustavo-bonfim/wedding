import { Plus, Search, Trash } from 'lucide-react';
import { Button } from '~/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '~/components/ui/card';
import { Input } from '~/components/ui/input';
import InviteDialog from './invite-dialog';

function NewInvite() {
  return (
    <div>
      <div className="flex justify-between">
        <h1 className="font-bold text-3xl">Convites</h1>
        <InviteDialog />
      </div>

      <div className="mt-6">
        <h2 className="font-semibold text-xl">Lista de convites adicionados</h2>

        <div className="mt-4 flex items-center gap-4">
          <span className="text-xl">Filtrar</span>
          <form className="mt-2 flex w-[300px] items-center rounded-full border border-foreground px-4">
            <Search size={15} />
            <Input placeholder="Buscar convidados" />
          </form>
        </div>

        <div className="mt-6 grid grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Convite 2342-234234-324</span>
                <Button size="sm">
                  <Plus size={15} />
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <span>Gustavo Bonfim</span>

                <Button variant="destructive" size="sm">
                  <Trash size={15} />
                </Button>
              </div>
            </CardContent>
            <CardFooter>
              <span className="ml-auto">Criado em 01/01/2024</span>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default NewInvite;
