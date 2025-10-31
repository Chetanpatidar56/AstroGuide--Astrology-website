import axios from "axios";
const axiosClient=axios.create({
    baseURL:'http://astroguide.onrender.com',
    withCredentials:true,
    headers:{
        'Content-Type':'application/json'
    }
});
export default axiosClient;