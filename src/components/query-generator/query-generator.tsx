"use client";

import { TypographyH2, TypographyOList, TypographyP } from "@/components/ui/typography";
import { QueryGeneratorForm } from "@/components/query-generator/query-generator-form";
import { ClipboardBlock } from "@/components/ui/clipboard-block";
import { useQueryGenerator } from "@/components/query-generator/shared/hooks/use-query-generator";
import { QUERY_GENERATOR_DEFAULT_FILTERS } from "@/components/query-generator/shared/constants/filters";
import { FindFtCampusesDto } from "@/lib/fetchers/shared/types/find-ft-campuses.dto";

export type QueryGeneratorProps = {
  campuses: FindFtCampusesDto;
};

export function QueryGenerator({ campuses }: QueryGeneratorProps) {
  const { url, basicToken, setBasicToken, readonlyBasicToken, filters, setFilters } = useQueryGenerator({
    defaultFilters: QUERY_GENERATOR_DEFAULT_FILTERS,
  });

  return (
    <div className="w-full mt-20">
      <TypographyH2>Configure your own route</TypographyH2>
      <TypographyP>Follow these simple steps:</TypographyP>
      <TypographyOList>
        <li>Choose a campus</li>
        <li>Copy the URL</li>
        <li>Paste it in your calendar app</li>
      </TypographyOList>
      <TypographyP>And your done! ✨</TypographyP>
      <QueryGeneratorForm
        basicToken={basicToken}
        setBasicToken={setBasicToken}
        readonlyBasicToken={readonlyBasicToken}
        filters={filters}
        setFilters={setFilters}
        campuses={campuses}
      />
      <ClipboardBlock disabled={url === null} value={url} />
    </div>
  );
}
