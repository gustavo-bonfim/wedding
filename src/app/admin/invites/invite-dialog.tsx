'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Loader, Trash } from 'lucide-react';
import { ReactNode, useMemo, useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';
import { Button } from '~/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '~/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '~/components/ui/form';
import { Input } from '~/components/ui/input';
import { Invite } from '~/models/Invite';
import api from '~/services/api';

type InviteDialogProps = {
  invite?: Invite;
  trigger: ReactNode;
  onClose?: () => void;
};

const FormSchema = z.object({
  alias: z.string().min(1, 'Preencha o apelido do convite'),
  guests: z.array(
    z.object({
      name: z.string().min(1, 'Preencha o nome do convidado'),
    }),
  ),
});

type FormType = z.infer<typeof FormSchema>;

function InviteDialog({ invite, trigger, onClose }: InviteDialogProps) {
  const isEditMode = !!invite;

  const queryClient = useQueryClient();
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleClose() {
    setIsModalOpen(false);
    setTimeout(() => {
      onClose?.();
    }, 300);
  }

  const values = useMemo(() => {
    if (invite) {
      return {
        alias: invite.alias,
        guests: invite?.Guest?.map((guest) => ({ name: guest.name })) ?? [
          { name: '' },
        ],
      };
    }
    return {
      alias: '',
      guests: [
        {
          name: '',
        },
      ],
    };
  }, [invite]);

  const form = useForm<FormType>({
    resolver: zodResolver(FormSchema),
    values,
  });

  const guestsFieldArray = useFieldArray({
    control: form.control,
    name: 'guests',
  });

  const { mutate: createInvite, isPending: isCreatingInvite } = useMutation({
    mutationFn: (values: FormType) => {
      if (isEditMode) {
        return api.put('/invite');
      }
      return api.post<Invite>('/invite', {
        alias: values.alias,
        guests: values.guests,
      });
    },
    onSuccess: (response) => {
      const invite = response.data;
      queryClient.setQueryData<Invite[]>(['invites'], (data) => {
        if (!data) return data;

        return [invite, ...data];
      });

      toast.success('Convite criado com sucesso!');
      handleClose();
    },
    onError: (err) => {
      console.log(err);
      toast.error('Ocorreu um erro ao criar o convite');
    },
  });

  function onSubmit(values: FormType) {
    createInvite(values);
  }

  return (
    <Dialog
      onOpenChange={(isOpening) => {
        if (!isOpening) {
          handleClose();
          form.reset();
        }
      }}
      open={isModalOpen ?? false}
    >
      <DialogTrigger
        asChild
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        {trigger}
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl">
            {isEditMode ? 'Editar convite' : 'Novo convite'}
          </DialogTitle>
          <DialogDescription>
            Preencha os campos para adicionar convidados a este convite
          </DialogDescription>
        </DialogHeader>

        {!!invite?.Guest?.length && (
          <div className="mt-4 space-y-4">
            <span className="text-xl">Convidados</span>
            {invite?.Guest?.map((guest) => (
              <div className="flex items-center justify-between" key={guest.id}>
                <span>{guest.name}</span>

                <Button variant="destructive" size="sm">
                  <Trash size={15} />
                </Button>
              </div>
            ))}
          </div>
        )}

        <Form {...form}>
          <div className="space-y-4">
            <FormField
              name="alias"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Apelido</FormLabel>
                  <FormControl>
                    <Input placeholder="apelido" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {guestsFieldArray.fields.map((guestField, index) => (
              <FormField
                key={guestField.id}
                name={`guests.${index}.name`}
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Convidado {index + 1}</FormLabel>
                    <FormControl>
                      <div className="flex items-center gap-2">
                        <Input placeholder="Nome do convidado" {...field} />
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => {
                            guestsFieldArray.remove(index);
                          }}
                        >
                          <Trash size={15} />
                        </Button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
          </div>
        </Form>

        <div className="mt-4 flex w-full justify-end gap-4">
          <Button
            className="flex"
            onClick={() => {
              guestsFieldArray.append({
                name: '',
              });
            }}
          >
            Adicionar convidado
          </Button>

          <Button
            className="flex bg-green-700 hover:bg-green-900"
            onClick={form.handleSubmit(onSubmit)}
            disabled={isCreatingInvite}
          >
            {isCreatingInvite ? (
              <Loader className="h-4 w-4 animate-spin" />
            ) : (
              'Salvar'
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default InviteDialog;
