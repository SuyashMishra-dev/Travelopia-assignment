import axios from "axios";
import { apiUrlConfig } from "./config";

const env = "local";

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
