//untu menyimpan semua service yg diibutuhkan untuk auth

import instance from "@/libs/axios/instance";
import endpoint from "./endpoint.constant";
import { IRegister } from "@/types/Auth";

const authServices = {
    //payLoad itu adalah parameter yang dikirimkan ke server
    register : (payLoad :IRegister) => instance.post(`${endpoint.AUTH}/register`, payLoad),
    
};
console.log("Endpoint AUTH:", endpoint.AUTH);

export default authServices;