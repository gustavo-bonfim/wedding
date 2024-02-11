'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { clsx } from 'clsx';
import { Trash } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
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
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '~/components/ui/form';
import { Input } from '~/components/ui/input';

const FormSchema = z.object({
  name: z.string().min(1, 'Preencha o nome do convidado'),
});

// type FormType = z.infer<typeof FormSchema>;

function InviteDialog() {
  const form = useForm({
    resolver: zodResolver(FormSchema),
    values: {
      name: '',
    },
  });

  const [isGuestFormVisible, setIsGuestFormVisible] = useState(false);

  function handleHideForm() {
    form.reset();
    setIsGuestFormVisible(false);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Adicionar</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl">Novo convite</DialogTitle>
          <DialogDescription>
            Preencha os campos para adicionar convidados a este convite
          </DialogDescription>
        </DialogHeader>

        <div className="flex items-center justify-between mt-4">
          <span className="text-xl">Convidados</span>
          {!isGuestFormVisible ? (
            <Button
              variant="ghost"
              className="text-green-600 hover:text-green-700"
              onClick={() => {
                setIsGuestFormVisible(true);
              }}
            >
              adicionar
            </Button>
          ) : (
            <Button onClick={handleHideForm} variant="ghost">
              Esconder formulário
            </Button>
          )}
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span>Gustavo Bonfim</span>

            <Button variant="destructive" size="sm">
              <Trash size={15} />
            </Button>
          </div>
        </div>

        {isGuestFormVisible && (
          <div>
            <Form {...form}>
              <FormField
                name="name"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome</FormLabel>
                    <FormControl>
                      <Input placeholder="teste" {...field} />
                    </FormControl>
                    <FormDescription>Nome do convidado</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </Form>

            <Button className="bg-green-700 hover:bg-green-900 mt-4 ml-auto flex">
              Salvar
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

export default InviteDialog;
