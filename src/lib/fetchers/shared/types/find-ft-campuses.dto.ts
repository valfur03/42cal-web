import { z } from "zod";

export const findFtCampusesSchema = z.array(
  z.object({
    id: z.number(),
    name: z.string(),
  }),
);

export type FindFtCampusesDto = z.infer<typeof findFtCampusesSchema>;
