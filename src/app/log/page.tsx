import { auth } from "@clerk/nextjs";
import { type Entry } from "@prisma/client";

import EntryCard from "@/components/EntryCard";
import { db } from "@/lib/db";

const Log = async () => {
  const { userId } = auth();

  const yesterday = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();

  let entries: Entry[] = [];

  if (userId) {
    try {
      entries = await db.entry.findMany({
        where: {
          AND: {
            userId: { equals: userId },
            date: { gte: new Date(yesterday), lt: new Date() },
          },
        },
      });
    } catch (e) {
      console.log(e);
    }
  }

  const today = new Date().toLocaleDateString();
  const totalCalories = entries.reduce((acc, v) => acc + v.calories, 0);
  const totalProteins = entries.reduce((acc, v) => acc + v.proteins, 0);
  const totalCarbs = entries.reduce((acc, v) => acc + v.carbs, 0);
  const totalFats = entries.reduce((acc, v) => acc + v.fats, 0);
  return (
    <div className="flex w-full flex-col items-center justify-center gap-8">
      <div className="flex flex-col items-center justify-center gap-2">
        <h2 className="text-4xl font-bold">Today's Log</h2>
        <p className="text-sm">(enteries for {today})</p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-8 text-lg">
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
