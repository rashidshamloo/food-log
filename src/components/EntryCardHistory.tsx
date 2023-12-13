import { type Entry } from "@prisma/client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

const EntryCardHistory = ({ entry }: { entry: Entry }) => {
  return (
    <Card className="w-full max-w-xl bg-secondary">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{entry.mealType}</CardTitle>
      </CardHeader>
      <CardContent className="flex gap-4 text-sm">
        <p>Calories : {entry.calories} kcal</p>
        <p>Proteins : {entry.proteins} g</p>
        <p>Carbs : {entry.carbs} g</p>
        <p>Fats : {entry.fats} g</p>
      </CardContent>
    </Card>
  );
};

export default EntryCardHistory;
