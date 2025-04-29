import { use, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import authServices from "@/services/auth.service";
import { IRegister } from "@/types/Auth";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";

const registerSchema = yup.object().shape({
    fullName: yup.string().required("Fullname is required"),
    username: yup.string().required("Username is required"),
    email: yup.string().email("Email is invalid").required("Email is required"),
    password: yup.string().min(8, "minimal 8 character").required("Password is required"),
    confirmPassword: yup.string().oneOf([yup.ref("password"), ""], "Passwords must match").required("Passwor must be filled"),
})

const useRegister = () => {
    const router = useRouter();
    const [visiblePassword, setVisiblePassword] = useState({
        password: false,
        confirmPassword: false,
    });

    //tergantung key yg dimasukkan bila password ya password yang mati
    const handleVisiblePassword = (key:"password" | "confirmPassword") => {
       setVisiblePassword({
        ...visiblePassword,
        [key] :!visiblePassword[key],
       });
    };

    const {
        //control untuk ontrol terhadap inputan form
        control, 
        handleSubmit, 
        formState: {errors},
        reset,
        setError,

} = useForm({
        resolver:yupResolver(registerSchema),
    });

    const registerService = async (payLoad : IRegister) => {
        const result = authServices.register(payLoad);
        return result;
    }

    //fungsi react query untuk mutasi data
    //useMutation berfungsi untuk mengubah data yg ada di backend
    //MUTATE untuk alias dan isPending untuk loading SEHINGGA bisa menampilkan ui loading nantinya
    const {mutate:mutateRegister, isPending:isPendingRegister} = useMutation({
        mutationFn: registerService,
        onError: (error) => {
            setError("root", {
                message:error.message,
            });
},
        onSuccess:()=> {  
            //Untuk mengarahkan ke halaman sukses ketika berhasil
            router.push("/auth//register/success");
            reset();
        }
        });
//handle Register adalah fungsi untuk menghandle data yg diambil dari form ketika tombol register di klik
        const handleRegister = (data: IRegister) => mutateRegister(data);
    return {
        visiblePassword,
        handleVisiblePassword,
        control,
        handleSubmit,
        handleRegister,
        isPendingRegister,
        errors
    };

}

export default useRegister;