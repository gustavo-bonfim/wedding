import type { Invite } from './Invite';

export interface Guest {
  id: string;
  name: string;
  willBePresent: boolean;
  inviteId: string;

  Invite?: Invite;
}
