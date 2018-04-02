import Api from '@/services/Api'

export default {
    getHouses(){
        return Api().get('houses');
    },
    getHouse(params){
        return Api().get(`houses/${params.id}`);
    },
    addHouse(params){
        return Api().post('houses', params);
    },
    updateHouse(params){
        return Api().put(`houses/${params.id}`, params);
    },
    deleteHouse(params){
        return Api().delete(`houses/${params.id}`);
    }
}