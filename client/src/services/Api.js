import axios from 'axios'

export default () => {
    return axios.create({
        baseURL: `http://http://149.202.157.231:7001`
    })
}