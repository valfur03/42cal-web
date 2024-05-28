import { useEffect, useState } from "react";
import { QueryGeneratorFilters } from "@/components/query-generator/shared/types/filters";
import { generateQueryUrlFromFiltersAndBasicToken } from "@/components/query-generator/shared/lib/utils/generate-query-url-from-filters-and-basic-token";
import { useSearchParams } from "next/navigation";
import { API_FILTER_BASIC_TOKEN } from "@/common/constants/api";

export type UseQueryGeneratorParams = {
  defaultFilters: QueryGeneratorFilters;
};

export function useQueryGenerator({ defaultFilters }: UseQueryGeneratorParams) {
  const searchParams = useSearchParams();

  const queryBasicToken = searchParams.get(API_FILTER_BASIC_TOKEN);
  const readonlyBasicToken = queryBasicToken !== null;

  const [basicToken, setBasicToken] = useState<string>(queryBasicToken ?? "");
  const [filters, setFilters] = useState<QueryGeneratorFilters>(defaultFilters);
  const [url, setUrl] = useState(
    generateQueryUrlFromFiltersAndBasicToken(
      `${process.env.NEXT_PUBLIC_API_BASE_URL || ""}/events/`,
      filters,
      basicToken,
    ),
  );

  useEffect(() => {
    if (queryBasicToken !== null) {
      setBasicToken(queryBasicToken);
    }
  }, [queryBasicToken]);

  useEffect(() => {
    setUrl((url) => generateQueryUrlFromFiltersAndBasicToken(url, filters, basicToken));
  }, [filters, basicToken]);

  return {
    url: url.toString(),
    basicToken,
    setBasicToken: readonlyBasicToken ? () => {} : setBasicToken,
    readonlyBasicToken,
    filters,
    setFilters,
  };
}
