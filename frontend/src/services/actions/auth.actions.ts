"use server"

import { envConfig } from "@/config/envConfig";

export const registerUser = async (data: any) => {
  const res = await fetch(`${envConfig.baseUrl}/users/create-user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-store",
  });
  return res.json();
};