import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query';
import { Suspense } from 'react';
import { Button } from '~/components/ui/button';
import { getInvites } from '~/data/invite-data';
import InviteDialog from './invite-dialog';
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
          <InviteDialog trigger={<Button disabled>Adicionar</Button>} />
        </div>

        <Suspense fallback={<span>loading</span>}>
          <InviteList />
        </Suspense>
      </div>
    </HydrationBoundary>
  );
}

export default Invites;
