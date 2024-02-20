import { Invite } from '~/models/Invite';
import api from '~/services/api';

export async function getInvites() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const { data } = await api.get<Invite[]>('/invite');

  return data ?? [];
}
