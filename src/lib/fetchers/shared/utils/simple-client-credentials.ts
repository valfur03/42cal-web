import { FT_API_BASE_URL } from "@/common/constants/ft-api";
import { ClientCredentials } from "simple-oauth2";

const config = {
  client: {
    id: process.env.FT_API_CLIENT_ID || "",
    secret: process.env.FT_API_CLIENT_SECRET || "",
  },
  auth: {
    tokenHost: FT_API_BASE_URL,
  },
};

export const simpleClientCredentials = new ClientCredentials(config);
