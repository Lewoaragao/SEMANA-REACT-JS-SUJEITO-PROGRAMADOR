import axios from 'axios'
export const key = "1135bf0f7dbce0aec6c073a025552afd58199ddd"

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4/', 
    headers: {
        'Authorization': `Bearer ${key}`
    }
})

export default api