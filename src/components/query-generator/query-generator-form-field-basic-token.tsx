import { Input } from "@/components/ui/input";

export type QueryGeneratorFormFieldBasicTokenProps = {
  basicToken: string;
  onValueChange: (value: string) => void;
};

export function QueryGeneratorFormFieldBasicToken({
  basicToken,
  onValueChange,
}: QueryGeneratorFormFieldBasicTokenProps) {
  return (
    <Input type="text" placeholder="Basic token" value={basicToken} onChange={(e) => onValueChange(e.target.value)} />
  );
}
