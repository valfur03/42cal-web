import { Button } from "@/components/ui/button";
import { ClipboardCopyIcon } from "@radix-ui/react-icons";
import { TypographyCode } from "@/components/ui/typography";
import { cn } from "@/lib/utils/cn";
import { PropsWithChildren } from "react";

export type ClipboardBlockProps = PropsWithChildren<{
  className?: string;
  disabled?: boolean;
}>;

export function ClipboardBlock({ children, className, disabled = false }: ClipboardBlockProps) {
  return (
    <div className={cn("flex flex-col gap-4", className)}>
      <Button className="w-full" disabled={disabled}>
        <ClipboardCopyIcon className="h-4 w-4 mr-2" />
        Copy to clipboard
      </Button>
      {!disabled && <TypographyCode>{children}</TypographyCode>}
    </div>
  );
}
