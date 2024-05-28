import { Button } from "@/components/ui/button";
import { ClipboardCopyIcon } from "@radix-ui/react-icons";
import { TypographyCode } from "@/components/ui/typography";
import { cn } from "@/lib/utils/cn";

export type ClipboardBlockProps = {
  value: string;
  className?: string;
  disabled?: boolean;
};

export function ClipboardBlock({ className, disabled = false, value }: ClipboardBlockProps) {

  return (
    <div className={cn("flex flex-col gap-4", className)}>
      <Button className="w-full" disabled={disabled}>
        <ClipboardCopyIcon className="h-4 w-4 mr-2" />
        Copy to clipboard
      </Button>
      {!disabled && <TypographyCode>{value}</TypographyCode>}
    </div>
  );
}
