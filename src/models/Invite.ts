import { Guest } from './Guest';

export interface Invite {
  id: string;
  alias: string;
  createdAt: string;
  lastVisitedAt: string | null;

  guests?: Guest[];
}
