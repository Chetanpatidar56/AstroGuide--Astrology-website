import axios from "axios";
const axiosClient=axios.create({
    baseURL:'https://astroguide-za8o.onrender.com',
    withCredentials:true,
    headers:{
        'Content-Type':'application/json'
    }
});
export default axiosClient;