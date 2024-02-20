import { z } from 'zod';
import prisma from '~/database/prisma';

export async function GET() {
  const invites = await prisma.invite.findMany({
    orderBy: {
      createdAt: 'desc',
    },
    include: {
      Guest: true,
    },
  });

  return Response.json(invites);
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
      Guest: {
        createMany: {
          data: body.guests,
        },
      },
    },
    include: {
      Guest: true,
    },
  });

  return Response.json(invite);
}
