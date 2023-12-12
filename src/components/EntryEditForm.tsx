"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
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
  const router = useRouter();
  const form = useForm<EntryFormType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ...formSchema.parse(entry),
    },
  });

  const onSubmit = async (values: EntryFormType) => {
    try {
      await editEntry({ id: entry.id, ...values });
      router.push("/log");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Card className="max-w-md bg-secondary">
          <CardHeader>
            <CardTitle>Edit Entry</CardTitle>
            <CardDescription>
              Edit any information you missed before.
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
          <CardFooter className="flex justify-end gap-2">
            <Button
              variant="outline"
              onClick={() => {
                router.back();
              }}
            >
              Cancel
            </Button>
            <Button type="submit">Submit</Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
};

export default EntryEditForm;
