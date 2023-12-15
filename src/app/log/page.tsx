import { auth } from "@clerk/nextjs";
import { type Entry } from "@prisma/client";

import EntryCard from "@/components/EntryCard";
import Title from "@/components/Title";
import { db } from "@/lib/db";

export const runtime = "edge";

const Log = async () => {
  const { userId } = auth();

  let entries: Entry[] = [];

  const todayDateString =
    new Date().toISOString().split("T")[0] + "T00:00:00.000+00:00";

  if (userId) {
    try {
      entries = await db.entry.findMany({
        where: {
          AND: {
            userId: { equals: userId },
            date: { gte: todayDateString },
          },
        },
      });
    } catch (e) {
      console.error(e);
    }
  }

  const today = new Date().toLocaleDateString();
  const totalCalories = entries.reduce((acc, v) => acc + v.calories, 0);
  const totalProteins = entries.reduce((acc, v) => acc + v.proteins, 0);
  const totalCarbs = entries.reduce((acc, v) => acc + v.carbs, 0);
  const totalFats = entries.reduce((acc, v) => acc + v.fats, 0);
  return (
    <div className="flex w-full flex-col items-center justify-center gap-8">
      <Title>Today's Log</Title>
      <p className="text-lg">Entries for {today}</p>
      <div className="flex flex-col flex-wrap items-center justify-center gap-2 md:flex-row md:gap-8">
        <p>
          Total Calories:{" "}
          <span className="text-primary">{totalCalories} kcal</span>
        </p>
        <p>
          Total Proteins:{" "}
          <span className="text-primary">{totalProteins} g</span>
        </p>
        <p>
          Total Carbs: <span className="text-primary">{totalCarbs} g</span>
        </p>
        <p>
          Total Fats: <span className="text-primary">{totalFats} g</span>
        </p>
      </div>
      <div className="flex w-full flex-wrap items-start justify-center gap-8">
        {entries.length > 0 ? (
          entries.map((entry, i) => <EntryCard key={i} entry={entry} />)
        ) : (
          <p>No entried found.</p>
        )}
      </div>
    </div>
  );
};

export default Log;
