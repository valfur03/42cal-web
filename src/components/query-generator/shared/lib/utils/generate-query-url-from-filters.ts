import { QueryGeneratorFilters } from "@/components/query-generator/shared/types/filters";
import { QUERY_GENERATOR_ALL_CAMPUS_FILTER } from "@/components/query-generator/shared/constants/filters";
import { API_FILTER_CAMPUS_IDS } from "@/common/constants/api";

export function generateQueryUrlFromFilters(rawUrl: URL | string, filters: QueryGeneratorFilters) {
  const url = new URL(rawUrl);

  if (filters.campusId === QUERY_GENERATOR_ALL_CAMPUS_FILTER) {
    url.searchParams.delete(API_FILTER_CAMPUS_IDS);
  } else {
    url.searchParams.set(API_FILTER_CAMPUS_IDS, filters.campusId);
  }

  return url;
}
