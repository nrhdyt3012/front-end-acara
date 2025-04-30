import AuthLayout from "@/components/layouts/AuthLayout"
import Activation from "@/components/views/Auth/Activation";
import authServices from "@/services/auth.service";

interface PropTypes {
    status: "success" | "failed";
}
const ActivationPage =(props: PropTypes) =>{
    return(
        <AuthLayout title="Acara | Activation">
            <Activation {...props} />
        </AuthLayout>
    );
};
//context menyesuaikan dengan parameternya dalam hal ini berupa code
export async function getServerSideProps(context:{query: {code:string}})  {
try {
    const result = await authServices.activation({code: context.query.code});
    console.log(result.data.data)
    if(result.data.data) {
        //kalau activation berhasil di server maka kembalikan sattus succes maka akan diarahkan ke halaman sukses
        return {
        props:{
            status: "success",
        },
    };

}else{
    //kalau gagal verifikasi
    return {
        props:{
            status: "success",
        },
    };
}
} catch (error) {
    console.error("Error during activation:", error); // Tambahkan log untuk melihat error

    return {
        props:{
            status: "failed",
        },
    };
}
}
//Server Side Rendering sudah dimiliki next js agara berjalan 2 kode dalam satu halaman
export default ActivationPage;