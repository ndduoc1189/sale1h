import axios from "axios";

const httpRequest = axios.create({
    baseURL: '/api/',
    timeout: 10000
  });

const apiService = {

    checkService: async () =>{
        var res = await httpRequest.get('/api');
        return res.data;
    },
    getSearchHint : async (key) =>{
        var res = await httpRequest.get('search-hint',{
            params:{
                key : key,
            }});
        return res.data;
    },

    getProducts : async (searchParams) =>{
        var res = await httpRequest.get('search-product',{
            params:searchParams});
        return res.data;
    }

};



export default apiService;