import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const axiosCustom = axios.create({
    baseURL: "http://localhost:5000",
});

axiosCustom.interceptors.response.use((response) => response,(error) => {
    const string = error.response.data.message
    //const string = error.response.data.error.meta.target[0]
    toast.error(string)
    return Promise.reject(error)
})
