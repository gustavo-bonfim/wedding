import { z } from 'zod';
import prisma from '~/database/prisma';

export async function GET() {
  const invites = await prisma.invite.findMany({
    orderBy: {
      createdAt: 'desc',
    },
    include: {
      guests: true,
    },
  });

  const confirmedGuests = await prisma.guest.count({
    where: {
      willBePresent: true,
    },
  });
  const guestsCount = await prisma.guest.count();

  return Response.json({
    invites,
    confirmedGuests,
    guestsCount,
  });
}

const createInviteBodySchema = z.object({
  alias: z.string().min(1, 'alias should not be empty'),
  guests: z.array(
    z.object({
      name: z.string().min(1),
      willBePresent: z.boolean().optional(),
    }),
  ),
});

export async function POST(request: Request) {
  const body = createInviteBodySchema.parse(await request.json());

  const invite = await prisma.invite.create({
    data: {
      alias: body.alias,
      guests: {
        createMany: {
          data: body.guests,
        },
      },
    },
    include: {
      guests: true,
    },
  });

  return Response.json(invite);
}
