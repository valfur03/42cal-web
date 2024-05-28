import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FindFtCampusesDto } from "@/lib/fetchers/shared/types/find-ft-campuses.dto";
import { QUERY_GENERATOR_ALL_CAMPUS_FILTER } from "@/components/query-generator/shared/constants/filters";

export type QueryGeneratorFormFieldCampusIdProps = {
  campuses: FindFtCampusesDto;
  campusId: string;
  onValueChange: (value: string) => void;
};

export function QueryGeneratorFormFieldCampusId({
  campuses,
  campusId,
  onValueChange,
}: QueryGeneratorFormFieldCampusIdProps) {
  return (
    <Select onValueChange={onValueChange} defaultValue={campusId}>
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value={QUERY_GENERATOR_ALL_CAMPUS_FILTER}>ALL</SelectItem>
        {campuses.map((campus) => (
          <SelectItem key={campus.id} value={campus.id.toString()}>
            {campus.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
