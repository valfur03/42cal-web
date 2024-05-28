"use client";

import { TypographyH2 } from "@/components/ui/typography";
import { QueryGeneratorForm } from "@/components/query-generator/query-generator-form";
import { ClipboardBlock } from "@/components/ui/clipboard-block";
import { useQueryGenerator } from "@/components/query-generator/shared/hooks/use-query-generator";
import { QUERY_GENERATOR_DEFAULT_FILTERS } from "@/components/query-generator/shared/constants/filters";

export function QueryGenerator() {
  const { url, filters, setFilters } = useQueryGenerator({ defaultFilters: QUERY_GENERATOR_DEFAULT_FILTERS });

  return (
    <div className="w-full mt-20">
      <TypographyH2>Configure your own route</TypographyH2>
      <QueryGeneratorForm filters={filters} setFilters={setFilters} />
      <ClipboardBlock disabled={url === null}>{url}</ClipboardBlock>
    </div>
  );
}
