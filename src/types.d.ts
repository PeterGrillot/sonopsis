import { Band, User } from "@prisma/client";

type MembershipWithBand = {
  role: string;
  band: {
    name: string;
    id: string;
  };
};

type UserWithMemberships = {
  id: string;
  name: string;
  email: string;
  image?: string | null;
  memberships: MembershipWithBand[];
} & User;

type BandWithMembers = {
  members: UserWithMemberships[];
} & Band;
