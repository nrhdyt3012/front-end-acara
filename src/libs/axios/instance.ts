import environtment from "@/config/environtment";

import axios from "axios";
import { error } from "console";
// create untuk membuat instance

const headers =  {
    "Content-Type": "application/json",
  };
  
const instance = axios.create({
    //baseURl diambil dari environtment
  baseURL: environtment.API_URL,
  headers,
  //waktu makskimal untuk request
  // jika melebihi waktu ini maka request akan dibatalkan
  timeout: 10000, // 10 detik
});

//untuk mengintercept request dan response
//untuk mengecek error dan session kalau kalau kita membutuhkan token untuk request ke API
instance.interceptors.request.use(
async (request) => {
    return request;
},
(error) => Promise.reject(error) //jika error maka akan ditolak  
);

instance.interceptors.response.use(
 (response) => response,
 (error) => Promise.reject(error) //jika error maka akan ditolak
//jika error maka akan ditolak
)

export default instance;
