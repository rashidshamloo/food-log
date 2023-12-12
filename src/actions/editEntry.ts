"use server";

import { auth } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";

import { db } from "@/lib/db";
import { type EntryFormType } from "@/types/forms";

const addEntry = async ({
  id,
  mealType,
  calories,
  carbs,
  fats,
  proteins,
}: { id: number } & EntryFormType) => {
  const { userId } = auth();
  if (!userId) return;

  await db.entry.update({
    where: { id },
    data: {
      mealType,
      calories: Number(calories),
      carbs: Number(carbs),
      fats: Number(fats),
      proteins: Number(proteins),
    },
  });

  revalidatePath("/", "page");
};

export default addEntry;
