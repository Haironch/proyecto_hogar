import axios from "axios";

// this function is used to set the axios settings
export const setAxiosSettings = () => {
  //   axios.defaults.baseURL = import.meta.env.VITE_BACKEND_BASE_URL;
  //   axios.defaults.baseURL = "http://localhost:5000";
  //   const token = Cookies.get("access_token");
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ…zAwfQ.x3HZ1vVdPNDxItaVJ6lDGXv6vJVfKxLCT4PPp9dae_k";
  //   if (token) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${encodeURIComponent(
    token
  )}`;
  axios.defaults.headers.post["Content-Type"] = "application/json";
  //   }
};
