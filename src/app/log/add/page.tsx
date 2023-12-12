"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

import addEntry from "@/actions/addEntry";
import EntryFormField from "@/components/EntryFormField";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { entryFormSchema as formSchema } from "@/schemas/forms";
import { type EntryFormType } from "@/types/forms";

const Add = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const router = useRouter();
  const form = useForm<EntryFormType>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (values: EntryFormType) => {
    try {
      setIsError(false);
      setIsLoading(true);
      await addEntry(values);
      router.push("/log");
    } catch (e) {
      setIsError(true);
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Card className="max-w-md bg-secondary">
          <CardHeader>
            <CardTitle>Add Entry</CardTitle>
            <CardDescription>
              Create a new log entry for the meal you just had!
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <EntryFormField
              name="mealType"
              control={form.control}
              label="Meal Type"
              placeholder="Breakfast, Lunch, Dinner, Etc."
            />
            {Object.keys(formSchema.shape).map(
              (field, i) =>
                field !== "mealType" && (
                  <EntryFormField
                    key={i}
                    name={field as keyof EntryFormType}
                    control={form.control}
                    suffix={field !== "calories" ? "g" : "kcal"}
                    type="number"
                  />
                ),
            )}
          </CardContent>
          <CardFooter className="flex justify-between">
            {isLoading ? (
              <Button disabled>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Please wait
              </Button>
            ) : (
              <Button type="submit">Add Entry</Button>
            )}
            {isError && (
              <small className="text-destructive">
                An error occured while processing your request. please try
                again.
              </small>
            )}
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
};

export default Add;
