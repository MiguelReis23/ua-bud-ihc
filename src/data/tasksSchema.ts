import { z } from "zod";

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const taskSchema = z.object({
  id: z.number(),
  service: z.string(),
  subject: z.string(),
  priority: z.string(),
  date: z.string(),
  requester: z.string(),
  responsible:  z.string(),
  status: z.string(),
  lastMessage: z.string(),
  details: z.string(),
});

export type Task = z.infer<typeof taskSchema>;
