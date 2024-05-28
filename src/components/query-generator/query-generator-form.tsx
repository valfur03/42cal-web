import { QueryGeneratorFormFieldCampusId } from "@/components/query-generator/query-generator-form-field-campus-id";
import { QueryGeneratorFilters } from "@/components/query-generator/shared/types/filters";
import { Dispatch, SetStateAction } from "react";
import { FindFtCampusesDto } from "@/lib/fetchers/shared/types/find-ft-campuses.dto";
import { QueryGeneratorFormFieldBasicToken } from "@/components/query-generator/query-generator-form-field-basic-token";

export type QueryGeneratorFormProps = {
  campuses: FindFtCampusesDto;
  basicToken: string;
  setBasicToken: Dispatch<SetStateAction<string>>;
  readonlyBasicToken?: boolean;
  filters: QueryGeneratorFilters;
  setFilters: Dispatch<SetStateAction<QueryGeneratorFilters>>;
};

export function QueryGeneratorForm({
  campuses,
  basicToken,
  setBasicToken,
  readonlyBasicToken = false,
  filters,
  setFilters,
}: QueryGeneratorFormProps) {
  return (
    <div className="flex flex-col gap-4 my-4">
      <QueryGeneratorFormFieldCampusId
        campuses={campuses}
        campusId={filters.campusId.toString()}
        onValueChange={(value) => {
          setFilters((filters) => ({ ...filters, campusId: value }));
        }}
      />
      <QueryGeneratorFormFieldBasicToken
        disabled={readonlyBasicToken}
        basicToken={basicToken}
        onValueChange={(value) => {
          setBasicToken(value);
        }}
      />
    </div>
  );
}
