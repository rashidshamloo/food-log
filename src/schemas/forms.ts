import * as z from "zod"
 
export const addEntryFormSchema = z.object({
  username: z.string().min(2).max(50),
})