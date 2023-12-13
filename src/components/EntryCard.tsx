"use client";

import type { Entry } from "@prisma/client";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";

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
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const router = useRouter();

  const handleDelete = useCallback(async (id: number) => {
    try {
      setIsError(false);
      setIsLoading(true);
      await deleteEntry(id);
    } catch (e) {
      setIsError(true);
      console.error(e);
    } finally {
      setIsLoading(false);
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
      <CardFooter className="block space-y-4">
        <div className="flex justify-end gap-2">
          <Button
            variant="outline"
            onClick={() => {
              router.push("/log/edit/" + entry.id);
            }}
          >
            Edit
          </Button>
          {isLoading ? (
            <Button variant="destructive" disabled>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Delete
            </Button>
          ) : (
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive">Delete</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete
                    this log entry from our servers.
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
          )}
        </div>
        {isError && (
          <small className="block text-center text-destructive">
            Couldn't process your request. please try again.
          </small>
        )}
      </CardFooter>
    </Card>
  );
};

export default EntryCard;
