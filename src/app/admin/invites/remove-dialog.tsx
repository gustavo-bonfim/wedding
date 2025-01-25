'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { type ReactNode, useState } from 'react';
import { toast } from 'sonner';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '~/components/ui/alert-dialog';
import {
  type InviteIndexResponse,
  deleteInvite as deleteInviteFn,
} from '~/data/invite-data';

interface RemoveDialogProps {
  trigger: ReactNode;
  inviteId: string;
}

function RemoveDialog({ trigger, inviteId }: RemoveDialogProps) {
  const [isAlertVisible, setIsAlertVisible] = useState(false);

  const queryClient = useQueryClient();

  const { mutate: deleteInvite, isPending } = useMutation({
    mutationFn: deleteInviteFn,
    onSuccess: () => {
      queryClient.setQueryData<InviteIndexResponse>(['invites'], (data) => {
        if (!data) return data;

        return {
          ...data,
          invites: data.invites.filter((invite) => invite.id !== inviteId),
        };
      });

      toast.info('Convite e convidados deletados com sucesso.');

      setTimeout(() => {
        setIsAlertVisible(false);
      }, 300);
    },
  });

  return (
    <AlertDialog
      open={isAlertVisible}
      onOpenChange={(isOpening) => {
        if (!isOpening && !isPending) {
          setIsAlertVisible(false);
        }
      }}
    >
      <AlertDialogTrigger
        asChild
        onClick={() => {
          setIsAlertVisible(true);
        }}
      >
        {trigger}
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Tem certeza?</AlertDialogTitle>
          <AlertDialogDescription>
            Ao excluir esse convite todos os convidados que estão incluídos
            nesse convite também serão apagados.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction
            className="bg-red-500"
            onClick={() => {
              deleteInvite(inviteId);
            }}
            disabled={isPending}
          >
            Continuar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default RemoveDialog;
