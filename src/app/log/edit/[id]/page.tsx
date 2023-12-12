import { type Entry } from "@prisma/client";

import EntryEditForm from "@/components/EntryEditForm";
import { db } from "@/lib/db";

const Edit = async ({ params }: { params: { id: string } }) => {
  const id = Number(params.id);

  let entry: Entry | null = null;
  try {
    entry = await db.entry.findUnique({ where: { id } });
  } catch (e) {
    console.log(e);
  }

  if (!entry) return <p>Could not find the entry to edit.</p>;

  return (
    <EntryEditForm
      entry={{
        id: entry.id,
        mealType: entry.mealType,
        calories: String(entry.calories),
        proteins: String(entry.proteins),
        carbs: String(entry.carbs),
        fats: String(entry.fats),
      }}
    />
  );
};

export default Edit;
