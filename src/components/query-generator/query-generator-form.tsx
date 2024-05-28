import { QueryGeneratorFormFieldCampusId } from "@/components/query-generator/query-generator-form-field-campus-id";
import { QueryGeneratorFilters } from "@/components/query-generator/shared/types/filters";
import { Dispatch, SetStateAction } from "react";
import { FindFtCampusesDto } from "@/lib/fetchers/shared/types/find-ft-campuses.dto";

export type QueryGeneratorFormProps = {
  campuses: FindFtCampusesDto;
  filters: QueryGeneratorFilters;
  setFilters: Dispatch<SetStateAction<QueryGeneratorFilters>>;
};

export function QueryGeneratorForm({ campuses, filters, setFilters }: QueryGeneratorFormProps) {
  return (
    <div className="my-4">
      <QueryGeneratorFormFieldCampusId
        campuses={campuses}
        campusId={filters.campusId.toString()}
        onValueChange={(value) => {
          setFilters((filters) => ({ ...filters, campusId: value }));
        }}
      />
    </div>
  );
}
