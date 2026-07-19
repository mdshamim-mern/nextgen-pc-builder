"use server"

import { envConfig } from "@/config/envConfig";

export const getComponents = async (query: string = "") => {
  const res = await fetch(`${envConfig.baseUrl}/components${query}`, {
    cache: "no-store",
  });
  return res.json();
};