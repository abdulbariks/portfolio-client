import * as React from "react"

import { cn } from "@/lib/utils"
import { useFormContext } from "react-hook-form"
import { Controller, ControllerProps, FieldPath, FieldValues } from "react-hook-form"
import { FormProvider, useFormContext as useRHFContext } from "react-hook-form"

const FormFieldContext = React.createContext<{ name?: FieldPath<FieldValues> }>({})

function Form({
  className,
  children,
  ...formProps
}: React.ComponentProps<"form"> & {
  children: React.ReactNode
}) {
  const { onSubmit, ...rest } = formProps as any
  return (
    <FormProvider {...rest}>
      <form
        className={cn("space-y-6", className)}
        onSubmit={onSubmit}
      >
        {children}
      </form>
    </FormProvider>
  )
}

function FormField<TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>({ ...props }: ControllerProps<TFieldValues, TName>) {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
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
  const formContext = useRHFContext<FieldValues>()
  const fieldContext = React.useContext(FormFieldContext)

  if (!formContext) {
    return null
  }

  const { formState } = formContext
  const error = formState?.errors?.root?.message || formState?.errors[fieldContext.name as FieldPath<FieldValues>]?.message

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

export {
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormField,
  FormProvider,
}
