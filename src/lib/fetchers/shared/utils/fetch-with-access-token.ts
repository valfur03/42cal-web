import { getAccessToken } from "@/lib/fetchers/shared/utils/get-access-token";

export async function fetchWithAccessToken(route: string, init?: RequestInit) {
  const { tokenType, accessToken } = await getAccessToken();
  return fetch(route, {
    ...init,
    headers: {
      Authorization: `${tokenType} ${accessToken}`,
      ...init?.headers,
    },
  });
}
