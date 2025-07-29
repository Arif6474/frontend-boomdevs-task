
import axios from "axios";
import {  useMemo } from "react";

function useAxiosInstance() {

    const axiosAuthInstance = useMemo(() => axios.create({

        baseURL: import.meta.env.VITE_REACT_APP_BACKEND_URL + 'api/public/',
       
    }), [])

    return axiosAuthInstance;
}

export default useAxiosInstance;