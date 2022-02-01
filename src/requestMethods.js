import axios from "axios";

const BASE_URL = "https://artagshop.herokuapp.com/api/";
const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;
//const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxN2M1NjRmNDJmZmZiZTMwOTU5NWVjNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNjczOTE2Nn0.gDvaESBzHXahut_rFTrTI3U5k1f30RSVb3QuJEmo-Pc"
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
