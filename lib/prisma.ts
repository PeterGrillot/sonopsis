import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient({
  log: ["query"], // optional: logs queries during development
});
