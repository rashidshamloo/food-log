import { type Entry } from "@prisma/client";

import EntryEditForm from "@/components/EntryEditForm";
import Title from "@/components/Title";
import { db } from "@/lib/db";

export const runtime = "edge";

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
    <div className="flex w-full flex-col items-center justify-center gap-8">
      <Title>Edit Entry</Title>
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
    </div>
  );
};

export default Edit;
