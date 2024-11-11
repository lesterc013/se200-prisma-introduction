/// To use prisma client to manipulate the database

import { PrismaClient } from "@prisma/client";

export const db = new PrismaClient();
