import { Search } from 'lucide-react';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import InviteDialog from './invite-dialog';
import InviteList from './invite-list';

async function Invites() {
  return (
    <div>
      <div className="flex justify-between">
        <h1 className="font-bold text-3xl">Convites</h1>
        <InviteDialog trigger={<Button>Adicionar</Button>} />
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
      </div>

      <InviteList />
    </div>
  );
}

export default Invites;
