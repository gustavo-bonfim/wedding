'use client';

import { useQuery } from '@tanstack/react-query';
import dayjs from 'dayjs';
import { Edit, Search } from 'lucide-react';
import { useQueryState } from 'nuqs';
import { useState } from 'react';
import InviteQRCode from '~/components/invite-qr-code';
import { Button } from '~/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '~/components/ui/card';
import { Input } from '~/components/ui/input';
import { Invite } from '~/models/Invite';
import api from '~/services/api';
import InviteDialog from './invite-dialog';

async function getInvites() {
  const { data } = await api.get<Invite[]>('/invite');

  return data ?? [];
}

function InviteList() {
  const { data: invites } = useQuery({
    queryKey: ['invites'],
    queryFn: getInvites,
  });

  const [search, setSearch] = useQueryState('q');

  const [selectedInvite, setSelectedInvite] = useState<Invite>();

  const filteredInvites = invites?.filter((invite) =>
    new RegExp(search ?? '', 'ig').test(invite.alias),
  );

  if (!invites) return null;

  return (
    <>
      <div className="mt-4 flex items-center gap-4">
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

      <div className="mt-6 grid grid-cols-3 gap-4">
        {filteredInvites?.map((invite) => (
          <Card key={invite.id} className="hover:ring-1 hover:ring-foreground">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>{invite.alias}</span>
                <InviteDialog
                  invite={selectedInvite}
                  onClose={() => {
                    setSelectedInvite(undefined);
                  }}
                  trigger={
                    <Button
                      size="sm"
                      onClick={() => {
                        setSelectedInvite(invite);
                      }}
                    >
                      <Edit size={15} />
                    </Button>
                  }
                />
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4 divide-y">
              {!invite.Guest?.length && (
                <span className="font-light text-slate-800 italic">
                  Nenhum convidado adicionado a este convite
                </span>
              )}
              {invite.Guest?.map((guest) => (
                <span key={guest.id}>{guest.name}</span>
              ))}
            </CardContent>
            <CardFooter>
              <div className="flex w-full flex-col items-end gap-4">
                <span>Criado em {dayjs(invite.createdAt).format('L LT')}</span>
                <InviteQRCode inviteId={invite.id} />
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
}

export default InviteList;
