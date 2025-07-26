import { integer, pgTable, varchar, date } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    name: varchar({ length: 255 }).notNull(),
    company: varchar({ length: 255 }).notNull(),
    age: integer().notNull(),
    date: date("date").notNull()
});
