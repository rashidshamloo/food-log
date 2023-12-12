"use server";

import { auth } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";

import { db } from "@/lib/db";
import { type EntryFormType } from "@/types/forms";

const addEntry = async ({
  mealType,
  calories,
  carbs,
  fats,
  proteins,
}: EntryFormType) => {
  const { userId } = auth();
  if (!userId) return;

  const date = new Date();

  await db.entry.create({
    data: {
      mealType,
      calories: Number(calories),
      carbs: Number(carbs),
      fats: Number(fats),
      proteins: Number(proteins),
      date,
      userId,
    },
  });

  revalidatePath("/", "page");
};

export default addEntry;
