import axios from "axios";
import { IHttpClient } from "../../interfaces/http.interface";

const Http = (): IHttpClient => {
    return {
        get: async <T>(url: string, params?: Record<string, any>): Promise<T> => {
            return axios.get<T>(url, { params })
                .then((response) => response.data)
                .catch((error) => {
                    console.error("Error fetching data:", error);
                    throw error;
                }
            );
        }
    }
};

export default Http;