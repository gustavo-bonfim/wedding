import { Guest } from './Guest';

export interface Invite {
  id: string;
  alias: string;
  createdAt: string;
  firstVisitedAt: string | null;

  guests?: Guest[];
}
