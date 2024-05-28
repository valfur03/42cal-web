import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export type QueryGeneratorFormFieldCampusIdProps = {
  campusId: string;
  onValueChange: (value: string) => void;
};

export function QueryGeneratorFormFieldCampusId({ campusId, onValueChange }: QueryGeneratorFormFieldCampusIdProps) {
  return (
    <Select onValueChange={onValueChange} defaultValue={campusId}>
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="0">All</SelectItem>
        <SelectItem value="1">Paris</SelectItem>
      </SelectContent>
    </Select>
  );
}
