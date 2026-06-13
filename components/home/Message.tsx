"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Check, MessageCircle } from "lucide-react";
import { FormEvent, useState } from "react";

interface MessageFormState {
  name: string;
  email: string;
  message: string;
}

const initialFormState: MessageFormState = {
  name: "",
  email: "",
  message: "",
};

const Message = () => {
  const [open, setOpen] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [formState, setFormState] = useState(initialFormState);

  const updateField =
    (field: keyof MessageFormState) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormState((current) => ({
        ...current,
        [field]: event.target.value,
      }));
    };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSent(true);
  };

  const handleSendAnother = () => {
    setFormState(initialFormState);
    setIsSent(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          type="button"
          aria-label="Send message"
          className="fixed bottom-4 right-4 z-50 h-14 w-14 rounded-full shadow-lg sm:bottom-6 sm:right-6 sm:h-16 sm:w-16"
        >
          <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
        </Button>
      </DialogTrigger>

      <DialogContent className="w-[calc(100vw-2rem)] sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>{isSent ? "Message Sent" : "Send Message"}</DialogTitle>
          <DialogDescription>
            {isSent
              ? "Your message has been sent successfully."
              : "Send me a message and I will get back to you soon."}
          </DialogDescription>
        </DialogHeader>

        {isSent ? (
          <div className="flex min-h-80 flex-col items-center justify-center text-center">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Check className="h-7 w-7" />
            </div>
            <h3 className="text-xl font-semibold">Thank you for reaching out</h3>
            <p className="mt-3 text-sm text-muted-foreground">
              I appreciate your message and will respond as soon as possible.
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
          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                value={formState.name}
                onChange={updateField("name")}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                placeholder="Your name"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formState.email}
                onChange={updateField("email")}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                placeholder="your@email.com"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formState.message}
                onChange={updateField("message")}
                className="flex w-full resize-none rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                placeholder="Write your message"
              />
            </div>

            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default Message;
