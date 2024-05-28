"use client";

import { TypographyH2 } from "@/components/ui/typography";
import { QueryGeneratorForm } from "@/components/query-generator/query-generator-form";
import { ClipboardBlock } from "@/components/ui/clipboard-block";
import { useQueryGenerator } from "@/components/query-generator/shared/hooks/use-query-generator";
import { QUERY_GENERATOR_DEFAULT_FILTERS } from "@/components/query-generator/shared/constants/filters";
import { FindFtCampusesDto } from "@/lib/fetchers/shared/types/find-ft-campuses.dto";

export type QueryGeneratorProps = {
  campuses: FindFtCampusesDto;
};

export function QueryGenerator({ campuses }: QueryGeneratorProps) {
  const { url, filters, setFilters } = useQueryGenerator({ defaultFilters: QUERY_GENERATOR_DEFAULT_FILTERS });

  return (
    <div className="w-full mt-20">
      <TypographyH2>Configure your own route</TypographyH2>
      <QueryGeneratorForm filters={filters} setFilters={setFilters} campuses={campuses} />
      <ClipboardBlock disabled={url === null} value={url} />
    </div>
  );
}
