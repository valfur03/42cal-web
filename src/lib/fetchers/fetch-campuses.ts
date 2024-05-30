import { getDataFromResponseOrThrow } from "@/lib/fetchers/shared/utils/get-data-from-response-or-throw";
import { FT_API_BASE_URL } from "@/common/constants/ft-api";
import { findFtCampusesSchema } from "@/lib/fetchers/shared/types/find-ft-campuses.dto";
import { fetchWithAccessToken } from "@/lib/fetchers/shared/utils/fetch-with-access-token";

export async function fetchCampuses() {
  return getDataFromResponseOrThrow(fetchWithAccessToken(`${FT_API_BASE_URL}/v2/campus?sort=name&per_page=100`), {
    response: findFtCampusesSchema,
  });
}
