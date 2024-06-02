import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import { getInvites } from '~/data/invite-data';
import InviteList from './invite-list';

async function Invites({
  searchParams,
}: { searchParams: { [key: string]: string } }) {
  if (searchParams.pass !== process.env.ADMIN_PASSWORD) {
    notFound();
  }

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
