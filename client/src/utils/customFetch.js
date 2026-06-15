import axios from "axios";

const customFetch = axios.create({
  // baseURL: "/api/v1",
  // This is the actual backend link that Vercel provided
  baseURL: "https://jobify-backend-6elpz3pus-sayyad-projects.vercel.app/api/v1",
  // Very important for the cookies and Auth to work
  withCredentials: true,
});

export default customFetch;
