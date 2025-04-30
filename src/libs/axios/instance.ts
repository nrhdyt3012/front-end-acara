import environtment from "@/config/environtment";

import axios from "axios";
import { error } from "console";
import { Session } from "next-auth";
import { getSession } from "next-auth/react";

interface CustomSession extends Session { 
    accessToken?: string; // tambahkan properti accessToken
}
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
  timeout: 20 * 1000, // 10 detik
});

//untuk mengintercept request dan response
//untuk mengecek error dan session kalau kalau kita membutuhkan token untuk request ke API
instance.interceptors.request.use(
async (request) => {
    const session: CustomSession | null = await getSession();
    //jika ada session maka tambahkan token ke header
    if (session && session.accessToken) {
        request.headers.Authorization = `Bearer ${session.accessToken}`;
    }
    //jika tidak ada session maka hapus token dari header
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
