export interface IFormLogin {
    email: string;
    password: string;
    disable: boolean;
}

export const defaultValues: IFormLogin = {
    email: '',
    password: '',
    disable: false
}