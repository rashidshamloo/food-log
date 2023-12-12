import { type z } from "zod";

import { type entryFormSchema } from "@/schemas/forms";

export type EntryFormType = z.infer<typeof entryFormSchema>;
