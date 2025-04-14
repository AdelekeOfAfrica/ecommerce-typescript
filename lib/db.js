import { PrismaClient } from '@/lib/generated/prisma';

// Create a new PrismaClient instance
const db = new PrismaClient();

// In non-production environments, store the PrismaClient instance globally
if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = db;
}

export default db;
