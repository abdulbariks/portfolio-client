"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bubble, BubbleContent } from "@/components/ui/bubble";
import {
  Message,
  MessageAvatar,
  MessageContent,
  MessageFooter,
} from "@/components/ui/message";
import { useForm } from "react-hook-form";
import { cn } from "@/lib/utils";

interface FormValues {
  message: string;
}

interface MessageBubble {
  id: string;
  content: string;
  sender: "me" | "them";
  timestamp?: string;
}

const initialMessages: MessageBubble[] = [
  {
    id: "1",
    content: "Hi there! 👋",
    sender: "them",
    timestamp: "2:30 PM",
  },
  {
    id: "2",
    content: "Hey! How can I help you?",
    sender: "me",
    timestamp: "2:31 PM",
  },
  {
    id: "3",
    content: "I&apos;d like to discuss a potential project collaboration.",
    sender: "them",
    timestamp: "2:32 PM",
  },
];

export default function MessageModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<MessageBubble[]>(initialMessages);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const idCounter = useRef(4);
  const form = useForm<FormValues>({
    defaultValues: { message: "" },
  });

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [isOpen, messages, isTyping, scrollToBottom]);

  const onSubmit = (data: FormValues) => {
    if (!data.message.trim()) return;

    const newMessage: MessageBubble = {
      id: (idCounter.current++).toString(),
      content: data.message,
      sender: "me",
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => [...prev, newMessage]);
    form.reset();

    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      const reply: MessageBubble = {
        id: (idCounter.current++).toString(),
        content: "Thanks for your message! I&apos;ll get back to you soon. 🚀",
        sender: "them",
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages((prev) => [...prev, reply]);
    }, 1500);
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
      <AnimatePresence>
        {!isOpen ? (
          <motion.div
            key="message-trigger"
            layoutId="message-modal"
            className="flex items-center justify-center"
          >
            <Button
              onClick={() => setIsOpen(true)}
              className="h-14 w-14 rounded-full shadow-lg sm:h-16 sm:w-16"
              size="icon"
              aria-label="Send message"
            >
              <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
            </Button>
          </motion.div>
        ) : (
          <motion.div
            key="message-content"
            layoutId="message-modal"
            className={cn(
              "origin-bottom-right flex flex-col overflow-hidden rounded-2xl border bg-background shadow-2xl",
              "w-[calc(100vw-2rem)] h-[calc(100vh-8rem)] sm:w-95 sm:h-130",
            )}
          >
            <div className="flex items-center justify-between border-b px-4 py-3 sm:px-5 sm:py-3.5">
              <div className="flex items-center gap-3">
                <Avatar size="sm">
                  <AvatarImage src="/images/barik.jpg" alt="Abdul Barik" />
                  <AvatarFallback>AB</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-sm font-semibold">Abdul Barik</h3>
                  <p className="text-xs text-muted-foreground">Online</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon-sm"
                onClick={() => setIsOpen(false)}
                className="h-8 w-8 rounded-full"
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </Button>
            </div>

            <div className="flex-1 overflow-y-auto px-4 py-4 sm:px-5">
              <div className="flex flex-col gap-4">
                {messages.map((msg) => (
                  <Message
                    key={msg.id}
                    align={msg.sender === "me" ? "end" : "start"}
                  >
                    {msg.sender === "them" && (
                      <MessageAvatar>
                        <Avatar size="sm">
                          <AvatarImage
                            src="/images/barik.jpg"
                            alt="Abdul Barik"
                          />
                          <AvatarFallback>AB</AvatarFallback>
                        </Avatar>
                      </MessageAvatar>
                    )}
                    <MessageContent>
                      <Bubble
                        variant={msg.sender === "me" ? "default" : "muted"}
                        align={msg.sender === "me" ? "end" : "start"}
                      >
                        <BubbleContent>{msg.content}</BubbleContent>
                      </Bubble>
                      {msg.timestamp && (
                        <MessageFooter className="text-[10px]">
                          {msg.timestamp}
                        </MessageFooter>
                      )}
                    </MessageContent>
                    {msg.sender === "me" && (
                      <MessageAvatar>
                        <Avatar size="sm">
                          <AvatarFallback>ME</AvatarFallback>
                        </Avatar>
                      </MessageAvatar>
                    )}
                  </Message>
                ))}

                {isTyping && (
                  <Message align="start">
                    <MessageAvatar>
                      <Avatar size="sm">
                        <AvatarImage
                          src="/images/barik.jpg"
                          alt="Abdul Barik"
                        />
                        <AvatarFallback>AB</AvatarFallback>
                      </Avatar>
                    </MessageAvatar>
                    <MessageContent>
                      <Bubble variant="muted">
                        <BubbleContent>
                          <span className="flex items-center gap-1">
                            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.3s]" />
                            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.15s]" />
                            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground" />
                          </span>
                        </BubbleContent>
                      </Bubble>
                    </MessageContent>
                  </Message>
                )}
                <div ref={messagesEndRef} />
              </div>
            </div>

            <div className="border-t p-3 sm:p-4">
              <form
                onSubmit={(e) => form.handleSubmit(onSubmit)(e)}
                className="flex gap-2"
              >
                <Input
                  {...form.register("message")}
                  placeholder="Type a message..."
                  className="flex-1 rounded-full border-0 bg-muted/50 px-4 py-2 text-sm shadow-none focus-visible:ring-1"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      form.handleSubmit(onSubmit)();
                    }
                  }}
                />
                <Button
                  type="submit"
                  size="icon"
                  className="h-9 w-9 shrink-0 rounded-full"
                  aria-label="Send message"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/10 backdrop-blur-xs sm:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
