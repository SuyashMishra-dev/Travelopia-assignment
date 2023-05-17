import axios from "axios";
import { apiUrlConfig } from "./config";

// change this env value from `dev` to `local`
const env = "dev";

export const postData = (url = "", data) => {
  const { baseUrl } = apiUrlConfig[env];
  return axios({
    method: "POST",
    url: baseUrl + url,
    headers: {
      "Content-Type": "Application/json",
    },
    data: data,
  });
};
