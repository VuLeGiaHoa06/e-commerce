import axios from "axios";
////////////////// Original //////////////////

// export const axiosi = axios.create({
//    withCredentials: true,
//    baseURL: process.env.REACT_APP_BASE_URL,
// });

////////////////// Replace //////////////////

export const axiosi = axios.create({
   baseURL: "http://localhost:8000/", // Chạy ở cổng 8000
   headers: {
      "Content-Type": "application/json",
   },
});
