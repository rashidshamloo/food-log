import { auth } from "@clerk/nextjs";
import { type Entry } from "@prisma/client";
import groupBy from "object.groupby";

import EntryCard from "@/components/EntryCard";
import Title from "@/components/Title";
import { db } from "@/lib/db";

const History = async () => {
  const { userId } = auth();
  if (!userId) return <div>No history found.</div>;

  let entries: Entry[] = [];
  try {
    entries = await db.entry.findMany({
      where: { userId: { equals: userId } },
    });
  } catch (e) {
    console.log(e);
    return <div>No history found.</div>;
  }

  if (entries.length === 0) return <div>No history found.</div>;

  const entriesByDate = groupBy(entries, (entry) =>
    entry.date.toLocaleDateString(),
  );

  return (
    <div className="flex w-full flex-col items-center justify-center gap-8">
      <Title>History</Title>
      {Object.keys(entriesByDate).map((date, i) => (
        <div
          key={i}
          className="flex w-full flex-col items-center justify-center gap-8 [&:not(:last-child)]:border-b"
        >
          <p>Entries for {date}</p>
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
            <p>
              Total Calories:{" "}
              <span className="text-primary">
                {entriesByDate[date]?.reduce((acc, v) => acc + v.calories, 0)}{" "}
                kcal
              </span>
            </p>
            <p>
              Total Proteins:{" "}
              <span className="text-primary">
                {entriesByDate[date]?.reduce((acc, v) => acc + v.proteins, 0)} g
              </span>
            </p>
            <p>
              Total Carbs:{" "}
              <span className="text-primary">
                {entriesByDate[date]?.reduce((acc, v) => acc + v.carbs, 0)} g
              </span>
            </p>
            <p>
              Total Fats:{" "}
              <span className="text-primary">
                {entriesByDate[date]?.reduce((acc, v) => acc + v.fats, 0)} g
              </span>
            </p>
          </div>
          <div className="flex w-full flex-wrap items-start justify-center gap-8">
            {entriesByDate[date]?.map((entry, i) => (
              <EntryCard key={i} entry={entry} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default History;
