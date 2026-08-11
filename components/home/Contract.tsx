"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Check, Mail, MapPin, Phone } from "lucide-react";
import { GithubLogo, LinkedInLogo } from "../icons/Icons";
import { FormProvider, useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";

interface FormValues {
  name: string;
  email: string;
  message: string;
}

const initialFormState: FormValues = {
  name: "",
  email: "",
  message: "",
};

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "abdulbarik1997m@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+880 1575-092830",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "Dhaka, Bangladesh",
  },
];

const socialLinks = [
  {
    icon: GithubLogo,
    label: "GitHub",
    href: "https://github.com/abdulbariks",
    text: "github.com/abdulbariks",
  },
  {
    icon: LinkedInLogo,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/abdul-barik1997",
    text: "linkedin.com/in/abdul-barik1997",
  },
];

const Contract = () => {
  const [isSent, setIsSent] = useState(false);
  const form = useForm<FormValues>({
    defaultValues: initialFormState,
  });

  const onSubmit: SubmitHandler<FormValues> = () => {
    setIsSent(true);
  };

  const handleSendAnother = () => {
    setIsSent(false);
    form.reset();
  };

  return (
    <section id="message" className="relative py-20 px-6 scroll-mt-24">
      <div className="max-w-3xl mx-auto text-center">
        <Badge variant="secondary" className="mb-4">
          Contract
        </Badge>
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Get In Touch
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-lg text-muted-foreground">
          Have a question or want to work together? Send me a message.
        </p>
      </div>

      <Card className="mx-auto mt-12 max-w-3xl border border-border/60 bg-card/90 shadow-none">
        <CardContent className="p-0 md:flex">
          <div className="flex-1 p-6 md:p-8">
            <h3 className="text-2xl font-semibold">Contact Information</h3>
            <p className="mt-2 text-muted-foreground">
              Feel free to reach out through any of these channels.
            </p>

            <div className="mt-8 space-y-6">
              {contactInfo.map(({ icon: Icon, label, value }) => (
                <div className="flex items-start gap-4" key={label}>
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-accent">
                    <Icon className="size-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{label}</p>
                    <p className="text-sm text-muted-foreground">{value}</p>
                  </div>
                </div>
              ))}

              {socialLinks.map(({ icon: Icon, label, href, text }) => (
                <div className="flex items-start gap-4" key={label}>
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-accent">
                    <Icon className="size-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{label}</p>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline"
                    >
                      {text}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 border-t p-6 md:p-8 md:border-t-0 md:border-l">
            {isSent ? (
              <div className="flex h-full min-h-80 flex-col items-center justify-center text-center">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Check className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold">
                  Thank you for reaching out
                </h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  I appreciate your message and will respond as soon as
                  possible.
                </p>
                <Button
                  type="button"
                  className="mt-6 w-full"
                  onClick={handleSendAnother}
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <FormProvider {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-semibold">Send Message</h3>
                  <p className="text-muted-foreground">
                    Fill out the form below and I&apos;ll get back to you soon.
                  </p>

                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="your@email.com"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Write your message"
                            rows={5}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </FormProvider>
            )}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default Contract;
