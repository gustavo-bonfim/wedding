'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { Loader } from 'lucide-react';
import { useQueryState } from 'nuqs';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';
import { Button } from '~/components/ui/button';
import { Checkbox } from '~/components/ui/checkbox';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '~/components/ui/form';
import { editInvite, getInviteById, markVisitedDate } from '~/data/invite-data';

function PresenceForm() {
  const [inviteId] = useQueryState('i');

  const { data: invite, isLoading } = useQuery({
    queryKey: ['invite', inviteId],
    queryFn: () => getInviteById(inviteId),
    enabled: !!inviteId,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (invite?.id && !invite?.firstVisitedAt) {
      markVisitedDate(invite.id);
    }
  }, [invite]);

  const formSchema = z.object({
    id: z.string(),
    alias: z.string(),
    guests: z.array(
      z.object({
        id: z.string(),
        inviteId: z.string(),
        name: z.string().min(1, 'Preencha o nome do convidado'),
        willBePresent: z.boolean().default(false),
      }),
    ),
  });

  type FormValues = z.infer<typeof formSchema>;

  const form = useForm<FormValues>({
    values: {
      id: invite?.id ?? '',
      alias: invite?.alias ?? '',
      guests: invite?.guests ?? [],
    },
    resolver: zodResolver(formSchema),
  });

  const { mutate: submitValues, isPending } = useMutation({
    mutationFn: editInvite,
    onSuccess: () => {
      toast.success('Presença confirmada com sucesso');
    },
  });

  if (isLoading) {
    return (
      <div className="flex items-center gap-2">
        <Loader className="h-4 w-4 animate-spin text-wedding" />
        <span>Carregando informações do convite</span>
      </div>
    );
  }

  if (!invite) {
    return (
      <div>
        <span className="text-center font-semibold text-xl">
          Para confirmar presença por favor, escaneie o código QR no convite que
          você recebeu
        </span>
      </div>
    );
  }

  return (
    <div>
      <Form {...form}>
        <form
          className="space-y-4"
          onSubmit={form.handleSubmit((values) => submitValues(values))}
        >
          {invite?.guests?.map((guest, index) => (
            <div key={guest.id}>
              <FormLabel className="text-wedding">{guest.name}</FormLabel>
              <FormField
                name={`guests.${index}.willBePresent`}
                control={form.control}
                render={({ field }) => (
                  <FormItem className="mt-4 flex items-center gap-2">
                    <FormControl className="m-0 p-0">
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel className="!mt-0">Estará presente ?</FormLabel>
                  </FormItem>
                )}
              />
            </div>
          ))}
          <Button type="submit" className="mx-auto flex" disabled={isPending}>
            <motion.div
              className="flex items-center justify-center"
              animate={{
                width: isPending ? 'auto' : 100,
              }}
            >
              {isPending ? (
                <Loader className="h-4 w-4 animate-spin text-white" />
              ) : (
                'Confirmar'
              )}
            </motion.div>
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default PresenceForm;
