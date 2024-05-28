import { ZodType } from "zod";
import { throwOnErrorResponse } from "@/lib/fetchers/shared/utils/throw-on-error-response";
import { getJsonDataOrThrow } from "@/lib/fetchers/shared/utils/get-json-data-or-throw";
import { FT_API_REGULAR_ERROR_MESSAGE } from "@/common/constants/errors/ft-api";

export async function getDataFromResponseOrThrow<T>(
  rawResponse: Response | Promise<Response>,
  schema: { response: ZodType<T> },
): Promise<T> {
  const { data } = await getJsonDataOrThrow(
    throwOnErrorResponse(rawResponse, FT_API_REGULAR_ERROR_MESSAGE),
    schema,
    FT_API_REGULAR_ERROR_MESSAGE,
  );

  return data;
}
