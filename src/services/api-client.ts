import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
    key: '097c4aabcd97454bbc7a54f475c3af40'

    }
})