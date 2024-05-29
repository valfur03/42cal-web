import { Button } from "@/components/ui/button";
import { ClipboardCopyIcon } from "@radix-ui/react-icons";
import { TypographyCode } from "@/components/ui/typography";
import { cn } from "@/lib/utils/cn";
import { toast } from "sonner";

export type ClipboardBlockProps = {
  value: string;
  className?: string;
  disabled?: boolean;
};

export function ClipboardBlock({ className, disabled = false, value }: ClipboardBlockProps) {
  const onClick = () => {
    navigator.clipboard.writeText(value);
    toast("Copied to clipboard");
  };

  return (
    <div className={cn("flex flex-col gap-4", className)}>
      <Button className="w-full" onClick={onClick} disabled={disabled}>
        <ClipboardCopyIcon className="h-4 w-4 mr-2" />
        Copy to clipboard
      </Button>
      {!disabled && <TypographyCode>{value}</TypographyCode>}
    </div>
  );
}
