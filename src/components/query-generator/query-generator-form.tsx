import { QueryGeneratorFormFieldCampusId } from "@/components/query-generator/query-generator-form-field-campus-id";
import { QueryGeneratorFilters } from "@/components/query-generator/shared/types/filters";
import { Dispatch, SetStateAction } from "react";

export type QueryGeneratorFormProps = {
  filters: QueryGeneratorFilters;
  setFilters: Dispatch<SetStateAction<QueryGeneratorFilters>>;
};

export function QueryGeneratorForm({ filters, setFilters }: QueryGeneratorFormProps) {
  return (
    <div className="my-4">
      <QueryGeneratorFormFieldCampusId
        campusId={filters.campusId.toString()}
        onValueChange={(value) => {
          setFilters((filters) => ({ ...filters, campusId: value }));
        }}
      />
    </div>
  );
}
