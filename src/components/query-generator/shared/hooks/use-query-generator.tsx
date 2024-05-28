import { useEffect, useState } from "react";
import { QueryGeneratorFilters } from "@/components/query-generator/shared/types/filters";
import { generateQueryUrlFromFilters } from "@/components/query-generator/shared/lib/utils/generate-query-url-from-filters";

export type UseQueryGeneratorParams = {
  defaultFilters: QueryGeneratorFilters;
};

export function useQueryGenerator({ defaultFilters }: UseQueryGeneratorParams) {
  const [filters, setFilters] = useState<QueryGeneratorFilters>(defaultFilters);
  const [url, setUrl] = useState(
    generateQueryUrlFromFilters(`${process.env.NEXT_PUBLIC_API_BASE_URL || ""}/events/`, filters),
  );

  useEffect(() => {
    setUrl((url) => generateQueryUrlFromFilters(url, filters));
  }, [filters]);

  return { url: url.toString(), filters, setFilters };
}
