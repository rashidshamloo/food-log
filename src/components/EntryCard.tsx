"use client";

import type { Entry } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

import deleteEntry from "@/actions/deleteEntry";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

const EntryCard = ({ entry }: { entry: Entry }) => {
  const router = useRouter();

  const handleDelete = useCallback(async (id: number) => {
    try {
      await deleteEntry(id);
    } catch (e) {
      console.error(e);
    }
  }, []);

  return (
    <Card className="w-full max-w-[240px] bg-secondary">
      <CardHeader>
        <CardTitle>{entry.mealType}</CardTitle>
        <CardDescription>
          Added at {new Date(entry.date).toLocaleTimeString()}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <p>Calories : {entry.calories} kcal</p>
        <p>Proteins : {entry.proteins} g</p>
        <p>Carbs : {entry.carbs} g</p>
        <p>Fats : {entry.fats} g</p>
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        <Button
          variant="outline"
          onClick={() => {
            router.push("/log/edit/" + entry.id);
          }}
        >
          Edit
        </Button>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="destructive">Delete</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete this
                entry from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
                onClick={() => handleDelete(entry.id)}
                className="bg-destructive hover:bg-destructive/90"
              >
                Delete
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </CardFooter>
    </Card>
  );
};

export default EntryCard;
