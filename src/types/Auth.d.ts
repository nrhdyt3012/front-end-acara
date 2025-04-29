interface IRegister {
    fullName: string;
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
}

interface Iactivation {
    code:string;
}
export type { IRegister, Iactivation };