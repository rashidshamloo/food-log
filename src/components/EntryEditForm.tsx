"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

import editEntry from "@/actions/editEntry";
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

const EntryEditForm = ({
  entry,
}: {
  entry: EntryFormType & { id: number };
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const router = useRouter();
  const form = useForm<EntryFormType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ...formSchema.parse(entry),
    },
  });

  const onSubmit = async (values: EntryFormType) => {
    try {
      setIsError(false);
      setIsLoading(true);
      await editEntry({ id: entry.id, ...values });
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
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full items-center justify-center"
      >
        <Card className="w-full max-w-sm bg-secondary">
          <CardHeader>
            <CardTitle>Edit Entry</CardTitle>
            <CardDescription>
              Edit any information you missed before!
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
            <div className="flex justify-end gap-2">
              <Button
                variant="outline"
                onClick={() => {
                  router.push("/log");
                }}
              >
                Cancel
              </Button>
              {isLoading ? (
                <Button disabled>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Edit Entry
                </Button>
              ) : (
                <Button type="submit">Edit Entry</Button>
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
  );
};

export default EntryEditForm;
