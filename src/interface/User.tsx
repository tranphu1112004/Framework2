export interface IUser{
    name: string;
    email: string;
    password: string;
    address: string;
    phone: string;
    role: number
}
export type formcheckout = Pick<IUser,'name'|'email'|'address'|'phone'>