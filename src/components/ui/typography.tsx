import React, { PropsWithChildren } from "react";
import { cn } from "@/lib/utils/cn";

export type TypographyProps = PropsWithChildren<{
  className?: string;
}>;

export function TypographyH1({ children, className }: TypographyProps) {
  return (
    <h1 className={cn("scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl", className)}>{children}</h1>
  );
}

export function TypographyLead({ children, className }: TypographyProps) {
  return <p className={cn("text-xl text-muted-foreground", className)}>{children}</p>;
}
