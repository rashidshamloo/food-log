"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

import addEntry from "@/actions/addEntry";
import EntryFormField from "@/components/EntryFormField";
import Title from "@/components/Title";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
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
    <div className="flex w-full flex-col items-center justify-center gap-8">
      <Title>Add Entry</Title>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex w-full items-center justify-center"
        >
          <Card className="w-full max-w-sm bg-secondary">
            <CardHeader>
              <CardDescription>
                Add a new log entry for the meal you just had!
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
            <CardFooter className="block space-y-4">
              <div className="flex w-full justify-end gap-4">
                <Button variant="outline" onClick={() => router.push("/log")}>
                  Cancel
                </Button>
                {isLoading ? (
                  <Button disabled>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Add Entry
                  </Button>
                ) : (
                  <Button type="submit">Add Entry</Button>
                )}
              </div>
              {isError && (
                <small className="block text-center text-destructive">
                  Couldn't process your request. please try again.
                </small>
              )}
            </CardFooter>
          </Card>
        </form>
      </Form>
    </div>
  );
};

export default Add;
