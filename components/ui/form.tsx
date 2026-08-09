import * as React from "react"

import { cn } from "@/lib/utils"
import { useFormContext } from "react-hook-form"
import { Controller, ControllerProps, FieldPath, FieldValues } from "react-hook-form"

function Form({ className, ...props }: React.ComponentProps<"form">) {
  return (
    <form
      className={cn("space-y-6", className)}
      {...props}
    />
  )
}

function FormItem({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="form-item"
      className={cn("space-y-2", className)}
      {...props}
    />
  )
}

function FormLabel({ className, ...props }: React.ComponentProps<"label">) {
  return (
    <label
      data-slot="form-label"
      className={cn(
        "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        className
      )}
      {...props}
    />
  )
}

function FormControl({ ...props }: React.ComponentProps<"div">) {
  return <div data-slot="form-control" {...props} />
}

function FormMessage({ className, ...props }: React.ComponentProps<"p">) {
  const { formState } = useFormContext<FieldValues>()
  const error = formState?.errors?.root?.message

  if (!error) {
    return null
  }

  return (
    <p
      data-slot="form-message"
      className={cn("text-sm font-medium text-destructive", className)}
      {...props}
    >
      {error as string}
    </p>
  )
}

function FormField<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({ ...props }: ControllerProps<TFieldValues, TName>) {
  return <Controller {...props} />
}

export {
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormField,
}
