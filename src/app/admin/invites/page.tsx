import { Suspense } from 'react';
import { Button } from '~/components/ui/button';
import InviteDialog from './invite-dialog';
import InviteList from './invite-list';

async function Invites() {
  return (
    <div>
      <div className="flex justify-between">
        <h1 className="font-bold text-3xl">Convites</h1>
        <InviteDialog trigger={<Button>Adicionar</Button>} />
      </div>

      <h2 className="mt-6 font-semibold text-xl">
        Lista de convites adicionados
      </h2>

      <Suspense fallback={<span>loading</span>}>
        <InviteList />
      </Suspense>
    </div>
  );
}

export default Invites;
