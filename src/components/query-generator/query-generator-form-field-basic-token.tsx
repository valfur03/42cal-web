import { Input } from "@/components/ui/input";
import { QUERY_GENERATOR_BASIC_TOKEN_FIELD_NAME } from "@/components/query-generator/shared/constants/fields";
import { Label } from "@/components/ui/label";

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
    <>
      <Label htmlFor={QUERY_GENERATOR_BASIC_TOKEN_FIELD_NAME}>Basic token</Label>
      <Input
        type="text"
        placeholder="Basic token"
        name={QUERY_GENERATOR_BASIC_TOKEN_FIELD_NAME}
        value={basicToken}
        onChange={(e) => onValueChange(e.target.value)}
        disabled={disabled}
      />
    </>
  );
}
