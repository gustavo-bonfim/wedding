'use client';

import { useQuery } from '@tanstack/react-query';
import { Search } from 'lucide-react';
import { useQueryState } from 'nuqs';
import { useMemo } from 'react';

import { Input } from '~/components/ui/input';
import { getInvites } from '~/data/invite-data';
import InviteItem from './invite-item';

function InviteList() {
  const { data: invites } = useQuery({
    queryKey: ['invites'],
    queryFn: getInvites,
  });

  const [search, setSearch] = useQueryState('q');

  const filteredInvites = invites?.filter((invite) => {
    const guestsNames = invite.guests?.map((guest) => guest.name).join() ?? '';
    return new RegExp(search ?? '', 'ig').test(invite.alias + guestsNames);
  });

  const count = useMemo(() => {
    return invites?.reduce((acc, curr) => {
      return acc + (curr?.guests?.length ?? 0);
    }, 0);
  }, [invites]);

  if (!invites) return null;

  return (
    <>
      <div className="mt-4">
        <span className="font-semibold text-wedding text-xl">
          {count} convidados e {invites.length} convites cadastrados até o
          momento
        </span>
      </div>
      <div className="mt-4 flex items-center gap-4 print:hidden">
        <span className="text-xl">Filtrar</span>
        <div className="mt-2 flex w-[300px] items-center rounded-full border border-foreground px-4">
          <Search size={15} />
          <Input
            value={search ?? ''}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar convites"
          />
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3 print:grid-cols-2 print:gap-y-12">
        {filteredInvites?.map((invite) => (
          <InviteItem invite={invite} />
        ))}
      </div>
    </>
  );
}

export default InviteList;
