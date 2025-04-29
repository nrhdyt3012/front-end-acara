//untu menyimpan semua service yg diibutuhkan untuk auth

import instance from "@/libs/axios/instance";
import endpoint from "./endpoint.constant";
import { Iactivation, IRegister } from "@/types/Auth";
import { act } from "react";

const authServices = {
    //payLoad itu adalah parameter yang dikirimkan ke server
    register : (payLoad :IRegister) => instance.post(`${endpoint.AUTH}/register`, payLoad),
    activation : (payLoad : Iactivation) => 
        instance.post(`${endpoint.AUTH}/activation`, payLoad),
};
console.log("Endpoint AUTH:", endpoint.AUTH);

export default authServices;