'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
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

const guests = [
  {
    id: '1',
    name: 'Gustavo Henrique Bonfim Dos Santos',
    willBePresent: false,
  },
  {
    id: '2',
    name: 'Otávio',
    willBePresent: true,
  },
];

const invite = {
  id: 'akldfjaslj-sadiofj',
  alias: 'Familia',
  guests: guests,
};

function PresenceForm() {
  const formSchema = z.object({
    id: z.string(),
    alias: z.string(),
    guests: z.array(
      z.object({
        id: z.string().optional().nullable(),
        name: z.string().min(1, 'Preencha o nome do convidado'),
        willBePresent: z.boolean().optional().default(false),
      }),
    ),
  });

  type FormValues = z.infer<typeof formSchema>;

  const form = useForm<FormValues>({
    values: {
      ...invite,
    },
    resolver: zodResolver(formSchema),
  });

  function handleSubmit(values: FormValues) {
    console.log(values);
  }

  return (
    <div>
      <Form {...form}>
        <form className="space-y-4" onSubmit={form.handleSubmit(handleSubmit)}>
          {guests.map((guest, index) => (
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
          <Button type="submit" className="flex mx-auto">
            Confirmar
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default PresenceForm;
