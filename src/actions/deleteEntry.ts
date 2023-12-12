"use server";

import { auth } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";

import { db } from "@/lib/db";

const addEntry = async (id: number) => {
  const { userId } = auth();
  if (!userId) return;

  await db.entry.delete({
    where: { id, userId },
  });

  revalidatePath("/", "page");
};

export default addEntry;
