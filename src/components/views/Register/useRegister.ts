import { use, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const registerSchema = yup.object().shape({
    fullName: yup.string().required("Fullname is required"),
    username: yup.string().required("Username is required"),
    email: yup.string().email("Email is invalid").required("Email is required"),
    password: yup.string().min(8, "minimal 8 character").required("Password is required"),
    passwordConfirmation: yup.string().oneOf([yup.ref("password"), ""], "Passwords must match").required("Passwor must be filled"),
})

const useRegister = () => {
    const [visiblePassword, setVisiblePassword] = useState({
        password: false,
        passwordConfirmation: false,
    });

    //tergantung key yg dimasukkan bila password ya password yang mati
    const handleVisiblePassword = (key:"password" | "passwordConfirmation") => {
       setVisiblePassword({
        ...visiblePassword,
        [key] :!visiblePassword[key],
       });
    };

    const {register, 
        handleSubmit, 
        formState: {errors},
        reset,
        setError,

} = useForm({
        resolver:yupResolver(registerSchema),
    });
    return {
        visiblePassword,
        handleVisiblePassword
    };

}

export default useRegister;