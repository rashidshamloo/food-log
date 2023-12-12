import z from "zod";

export const navLinksSchema = z.array(
  z.object({
    title: z.string(),
    url: z.string(),
  }),
);
