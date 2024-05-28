import { useEffect, useState } from "react";
import { QueryGeneratorFilters } from "@/components/query-generator/shared/types/filters";
import { generateQueryUrlFromFiltersAndBasicToken } from "@/components/query-generator/shared/lib/utils/generate-query-url-from-filters-and-basic-token";

export type UseQueryGeneratorParams = {
  defaultFilters: QueryGeneratorFilters;
};

export function useQueryGenerator({ defaultFilters }: UseQueryGeneratorParams) {
  const [basicToken, setBasicToken] = useState<string>("");
  const [filters, setFilters] = useState<QueryGeneratorFilters>(defaultFilters);
  const [url, setUrl] = useState(
    generateQueryUrlFromFiltersAndBasicToken(
      `${process.env.NEXT_PUBLIC_API_BASE_URL || ""}/events/`,
      filters,
      basicToken,
    ),
  );

  useEffect(() => {
    setUrl((url) => generateQueryUrlFromFiltersAndBasicToken(url, filters, basicToken));
  }, [filters, basicToken]);

  return { url: url.toString(), basicToken, setBasicToken, filters, setFilters };
}
