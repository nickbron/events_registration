import { UUID } from "crypto";

export interface EventType {
  id?: string;
  title: string;
  description: string;
  organizer: string;
  eventDate: Date;
}

export type UserType = {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  birthday: Date;
  whereKnow: string;
  id_event: string;
};
