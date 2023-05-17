import axios from "axios";
import { apiUrlConfig } from "./config";

const env = "local";

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
