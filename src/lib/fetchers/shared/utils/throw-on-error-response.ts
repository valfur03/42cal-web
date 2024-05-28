export async function throwOnErrorResponse(rawResponse: Response | Promise<Response>, errorMessage: string) {
  const response = await rawResponse;

  if (!response.ok) {
    throw new Error(errorMessage);
  }

  return response;
}
