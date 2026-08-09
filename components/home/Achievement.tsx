"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import achievementsData from "@/data/achievements.json";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface AchievementItem {
  label: string;
  title: string;
  description: string;
  image: string;
}

const achievements = achievementsData as AchievementItem[];

const Achievement = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const achievement = achievements[currentIndex];
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === achievements.length - 1;

  const handlePrevious = () => {
    setCurrentIndex((current) => Math.max(0, current - 1));
  };

  const handleNext = () => {
    setCurrentIndex((current) =>
      Math.min(achievements.length - 1, current + 1),
    );
  };

  return (
    <section id="achievements" className="relative py-20 px-6 scroll-mt-24">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10 flex flex-col items-center gap-4 md:flex-row md:items-end md:justify-between">
          <div className="text-center md:text-left">
            <Badge variant="secondary" className="mb-4">
              Achievements
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Milestones That Matter
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-lg text-muted-foreground md:mx-0">
              Browse my professional achievements with the previous and next
              controls.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="icon"
              className="h-11 w-11 rounded-full"
              disabled={isFirst}
              onClick={handlePrevious}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-11 w-11 rounded-full"
              disabled={isLast}
              onClick={handleNext}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <Card className="overflow-hidden border border-border/60 bg-card/90 shadow-none">
          <CardContent className="flex flex-col p-0 md:flex-row">
            <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
              <Badge variant="secondary" className="mb-4 w-fit">
                {achievement.label}
              </Badge>
              <CardTitle className="text-2xl font-semibold sm:text-3xl">
                {achievement.title}
              </CardTitle>
              <CardDescription className="mt-4 text-base leading-relaxed">
                {achievement.description}
              </CardDescription>

              <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
                <span
                  className="h-2 w-2 rounded-full bg-primary"
                  aria-hidden="true"
                />
                {currentIndex + 1} of {achievements.length}
              </div>
            </div>

            <div className="relative h-72 w-full shrink-0 overflow-hidden bg-accent md:h-auto md:w-md">
              <Image
                key={achievement.image}
                src={achievement.image}
                alt={achievement.title}
                fill
                className="object-cover transition-transform duration-500"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Achievement;
