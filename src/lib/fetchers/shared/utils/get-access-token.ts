import { FT_API_REGULAR_ERROR_MESSAGE } from "@/common/constants/errors/ft-api";
import { simpleClientCredentials } from "@/lib/fetchers/shared/utils/simple-client-credentials";
import { FT_API_DEFAULT_SCOPE } from "@/common/constants/ft-api";
import { clientCredentialsAuthSchema } from "@/lib/fetchers/shared/types/client-credentials-auth.dto";

export async function getAccessToken() {
  const auth = await simpleClientCredentials.getToken({ scope: FT_API_DEFAULT_SCOPE });

  try {
    return clientCredentialsAuthSchema.parse(auth.token);
  } catch {
    throw new Error(FT_API_REGULAR_ERROR_MESSAGE);
  }
}
