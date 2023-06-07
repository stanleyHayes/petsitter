import axios from "axios";
import {BASE_SERVER_URL} from "../utils/constants";

const getSitters = (query) => {
    return axios({
        method: 'GET',
        baseURL: BASE_SERVER_URL,
        params: `/sitters${query && `?query=${query}`}`,
    })
}
export const SITTERS_API =  {getSitters};