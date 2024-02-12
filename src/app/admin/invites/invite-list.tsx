'use client';

import { useQuery } from '@tanstack/react-query';
import dayjs from 'dayjs';
import { Edit } from 'lucide-react';
import { useState } from 'react';
import { Button } from '~/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '~/components/ui/card';
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

  const [selectedInvite, setSelectedInvite] = useState<Invite>();

  if (!invites) return null;

  return (
    <>
      <div className="mt-6 grid grid-cols-3 gap-4">
        {invites.map((invite) => (
          <Card key={invite.id}>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Convite {invite.id}</span>
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
              {invite.Guest?.map((guest) => (
                <span key={guest.id}>{guest.name}</span>
              ))}
            </CardContent>
            <CardFooter>
              <span className="ml-auto">
                Criado em {dayjs(invite.createdAt).format('L LT')}
              </span>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
}

export default InviteList;
