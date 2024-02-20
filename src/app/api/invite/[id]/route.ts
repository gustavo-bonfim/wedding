import { z } from 'zod';
import prisma from '~/database/prisma';

type RouteContext = { params: { id: string } };

const updateInviteSchema = z.object({
  id: z.string().min(1),
  alias: z.string().min(1),
  guests: z.array(
    z.object({
      id: z.string().optional(),
      name: z.string().min(1),
      willBePresent: z.boolean().optional(),
    }),
  ),
});

export async function PUT(request: Request, { params }: RouteContext) {
  const body = await updateInviteSchema.parseAsync(await request.json());

  const inviteExists = await prisma.invite.findUnique({
    where: {
      id: params.id,
    },
    include: {
      Guest: true,
    },
  });

  if (!inviteExists) {
    return Response.json(
      { error: 'Not found' },
      {
        status: 404,
      },
    );
  }

  const guestsToDelete = inviteExists.Guest.filter(
    (guest) => !body.guests.find((g) => g.id === guest.id),
  );
  const guestsToCreate = body.guests.filter((guest) => !guest.id);
  const guestsToUpdate = body.guests.filter((guest) => !!guest.id);

  const invite = await prisma.invite.update({
    where: {
      id: params.id,
    },
    data: {
      alias: body.alias,
      Guest: {
        deleteMany: guestsToDelete,
        create: guestsToCreate,
        update: guestsToUpdate.map((guest) => ({
          data: guest,
          where: {
            id: guest.id,
          },
        })),
      },
    },
    include: {
      Guest: true,
    },
  });

  return Response.json(invite);
}

// @ts-ignore
export async function GET(_, { params }: RouteContext) {
  const invite = await prisma.invite.findUnique({
    where: {
      id: params.id,
    },
  });

  if (!invite) {
    return Response.json(
      { error: 'Not found' },
      {
        status: 404,
      },
    );
  }

  return Response.json(invite);
}
