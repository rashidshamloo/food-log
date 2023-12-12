import z from "zod";

export const entryFormSchema = z.object({
  mealType: z.string().min(2),
  calories: z
    .string()
    .refine((n) => !isNaN(Number(n)), "Please enter a number"),
  proteins: z
    .string()
    .refine((n) => !isNaN(Number(n)), "Please enter a number"),
  carbs: z.string().refine((n) => !isNaN(Number(n)), "Please enter a number"),
  fats: z.string().refine((n) => !isNaN(Number(n)), "Please enter a number"),
});
