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
  FormMessage,
} from '~/components/ui/form';
import { Input } from '~/components/ui/input';

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

function PresenceForm() {
  const formSchema = z.object({
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
      guests: [],
    },
    resolver: zodResolver(formSchema),
  });

  return (
    <div>
      <Form {...form}>
        <div className="space-y-4">
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
          <Button className="flex mx-auto">Confirmar</Button>
        </div>
      </Form>
    </div>
  );
}

export default PresenceForm;
