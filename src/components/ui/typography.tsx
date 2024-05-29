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

export function TypographyH2({ children, className }: TypographyProps) {
  return (
    <h2 className={cn("scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0", className)}>
      {children}
    </h2>
  );
}

export function TypographyP({ children, className }: TypographyProps) {
  return <p className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}>{children}</p>;
}

export function TypographyOList({ children, className }: TypographyProps) {
  return <ul className={cn("my-6 ml-6 list-disc [&>li]:mt-2", className)}>{children}</ul>;
}

export function TypographyLead({ children, className }: TypographyProps) {
  return <p className={cn("text-xl text-muted-foreground", className)}>{children}</p>;
}

export function TypographyCode({ children, className }: TypographyProps) {
  return <code className={cn("block rounded-md break-words p-2 bg-muted", className)}>{children}</code>;
}
