import axios, { AxiosInstance } from "axios";
import { useMemo } from "react";

interface ImportMetaEnv {
  VITE_APP_BACKEND_URL: string;
}

declare global {
    interface ImportMeta {
        readonly env: ImportMetaEnv; 
    }
}

function useAxiosInstance(): AxiosInstance {
  
  const axiosAuthInstance = useMemo(() => {
    return axios.create({
      baseURL: `${import.meta.env.VITE_APP_BACKEND_URL}api/public/`,
    });
  }, []);

  return axiosAuthInstance;
}

export default useAxiosInstance;
