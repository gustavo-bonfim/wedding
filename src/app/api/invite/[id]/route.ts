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
      guests: true,
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

  const guestsToDelete = inviteExists.guests.filter(
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
      guests: {
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
      guests: true,
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
    include: {
      guests: true,
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
// @ts-ignore
export async function DELETE(_, { params }: RouteContext) {
  const invite = await prisma.invite.findUnique({
    where: {
      id: params.id,
    },
    include: {
      guests: true,
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

  await prisma.invite.delete({
    where: {
      id: invite.id,
    },
  });

  return Response.json({});
}

// @ts-ignore
export async function PATCH(_, { params }: RouteContext) {
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

  if (!invite.firstVisitedAt) {
    await prisma.invite.update({
      data: {
        firstVisitedAt: new Date(),
      },
      where: {
        id: params.id,
      },
    });
  }

  return Response.json({});
}
