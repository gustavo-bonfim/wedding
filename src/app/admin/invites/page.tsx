import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query';
import { Suspense } from 'react';
import { getInvites } from '~/data/invite-data';
// import { Button } from '~/components/ui/button';
// import InviteDialog from './invite-dialog';
import InviteList from './invite-list';

async function Invites() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['invites'],
    queryFn: getInvites,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div>
        <div className="flex justify-between">
          <h1 className="font-bold text-3xl">Convites</h1>
          {/* <InviteDialog trigger={<Button>Adicionar</Button>} /> */}
        </div>

        <h2 className="mt-6 font-semibold text-xl print:hidden">
          Lista de convites adicionados
        </h2>

        <Suspense fallback={<span>loading</span>}>
          <InviteList />
        </Suspense>
      </div>
    </HydrationBoundary>
  );
}

export default Invites;
