import axios from "axios";

export const api = axios.create({
    baseURL:process.env.EXP_PUBLIC_URL_API,
    timeout: 5000,
    params:{

    }
})