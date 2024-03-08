import { Invite } from '~/models/Invite';
import api from '~/services/api';

export async function getInvites() {
  const { data } = await api.get<Invite[]>('/invite');

  return data ?? [];
}

export async function getInviteById(inviteId: string) {
  const { data } = await api.get<Invite>('/invite/id', {
    params: {
      id: inviteId,
    },
  });

  return data ?? [];
}
