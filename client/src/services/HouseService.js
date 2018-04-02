import Api from '@/services/Api'

export default {
    getHouses(){
        return Api().get('houses');
    },
    addHouse(params){
        return Api().post('houses', params)
    }
}