import axios from "./axios";

export const auth = {
  login: async function (data) {
    let response = await axios.post(`/login/`, data);
    return response.data;
  },
  register: async function (data) {
    let response = await axios.post(`/registation/`, data);
    return response.data;
  },
};
