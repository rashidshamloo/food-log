"use client";

import { type HTMLInputTypeAttribute } from "react";
import { type Control } from "react-hook-form";

import { type EntryFormType } from "@/types/forms";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";

const EntryFormField = ({
  name,
  control,
  type,
  placeholder,
  label,
  suffix,
}: {
  name: keyof EntryFormType;
  control: Control<EntryFormType>;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  label?: string;
  suffix?: string;
}) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field: { value, ...rest } }) => (
        <FormItem>
          <FormLabel>
            {label ?? name[0]?.toUpperCase() + name.slice(1)}
          </FormLabel>
          <div className="relative">
            {!!suffix && (
              <p className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 select-none text-sm text-muted-foreground">
                {suffix}
              </p>
            )}
            <FormControl>
              <Input
                placeholder={
                  placeholder ?? name[0]?.toUpperCase() + name.slice(1)
                }
                {...rest}
                value={value || ""}
                type={type}
                style={{
                  paddingRight: 20 + 6 * (!!suffix ? suffix.length : 0),
                }}
              />
            </FormControl>
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default EntryFormField;
