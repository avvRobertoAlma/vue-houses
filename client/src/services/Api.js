import axios from 'axios'

export default () => {
    return axios.create({
        baseURL: `http://149.202.157.231:7001`
    })
}