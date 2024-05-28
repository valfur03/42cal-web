import { Input } from "@/components/ui/input";

export type QueryGeneratorFormFieldBasicTokenProps = {
  basicToken: string;
  disabled?: boolean;
  onValueChange: (value: string) => void;
};

export function QueryGeneratorFormFieldBasicToken({
  basicToken,
  disabled,
  onValueChange,
}: QueryGeneratorFormFieldBasicTokenProps) {
  return (
    <Input
      type="text"
      placeholder="Basic token"
      value={basicToken}
      onChange={(e) => onValueChange(e.target.value)}
      disabled={disabled}
    />
  );
}
