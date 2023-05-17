import axios from "axios";
import { apiUrlConfig } from "./config";

// change this env value from `dev` to `local`
const env = "dev";

export const getData = (url = "") => {
  const { baseUrl } = apiUrlConfig[env];
  return axios({
    method: "GET",
    url: baseUrl + url,
    headers: {
      "Content-Type": "Application/json",
    },
  });
};
