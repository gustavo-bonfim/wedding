import { Invite } from '~/models/Invite';
import api from '~/services/api';

export async function getInvites() {
  const { data } = await api.get<Invite[]>('/invite');

  return data ?? [];
}

export async function getInviteById(inviteId: string | null) {
  const { data } = await api.get<Invite>(`/invite/${inviteId}`);

  return data ?? [];
}

export async function editInvite(values: Partial<Invite>) {
  const { data } = await api.put<Invite>(`/invite/${values.id}`, values);

  return data;
}

export async function deleteInvite(inviteId: string) {
  return api.delete(`/invite/${inviteId}`);
}

export async function markVisitedDate(inviteId: string) {
  return api.patch(`/invite/${inviteId}`);
}
