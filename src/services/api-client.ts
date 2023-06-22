import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: 'd117e2a81d4f4b0ba7d4ad57357433f0'
    }
})