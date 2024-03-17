'use client';

import { useQuery } from '@tanstack/react-query';
import dayjs from 'dayjs';
import { Edit, Search } from 'lucide-react';
import { useQueryState } from 'nuqs';
import { useState } from 'react';
import { Button } from '~/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '~/components/ui/card';
import { Input } from '~/components/ui/input';
import { getInvites } from '~/data/invite-data';
import { Invite } from '~/models/Invite';
import InviteDialog from './invite-dialog';
import RemoveDialog from './remove-dialog';

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

      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
        {filteredInvites?.map((invite) => (
          <Card
            key={invite.id}
            className="flex flex-col hover:ring-1 hover:ring-foreground"
          >
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>
                  {invite.alias} - {invite.id}
                </span>
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
            <CardContent className="flex-1 flex flex-col gap-4 divide-y">
              {!invite.guests?.length && (
                <span className="font-light text-slate-800 italic">
                  Nenhum convidado adicionado a este convite
                </span>
              )}
              {invite.guests?.map((guest) => (
                <span key={guest.id}>{guest.name}</span>
              ))}
            </CardContent>
            <CardFooter>
              <div className="flex w-full flex-col items-end gap-4">
                <div className="flex flex-col items-end">
                  <span>
                    Criado em {dayjs(invite.createdAt).format('L LT')}
                  </span>
                  {invite.firstVisitedAt && (
                    <span>
                      Visto primeiro em{' '}
                      {dayjs(invite.firstVisitedAt).format('L LT')}
                    </span>
                  )}
                </div>

                <div className="flex gap-2">
                  <Button>
                    <a
                      target="_blank"
                      href={`https://chart.googleapis.com/chart?chs=200x200&cht=qr&chl=${invite.id}`}
                      rel="noreferrer"
                    >
                      Gerar QR Code
                    </a>
                  </Button>

                  <RemoveDialog
                    inviteId={invite.id}
                    trigger={
                      <Button variant="destructive">Excluir convite</Button>
                    }
                  />
                </div>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
}

export default InviteList;
