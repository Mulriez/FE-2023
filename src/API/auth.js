import client from "./baseURL";
import { syncToken } from "./baseURL";

export function login(payload) {
  return client.post("/login", payload);
}
export function authMeProcess(payload) {
  syncToken();
  return client.get("/authme");
}
