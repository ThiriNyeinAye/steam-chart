import * as API from './url'

export const DataFetcher = (callback) => {
    fetch(API.Base_URL,{
        method:"GET",
        headers:{
            "Content-Type": "application/json",
            "Accept":"*/*"
        },
        cache:"no-cache"
    }).then(response => {
        if(response.status === 200){
            return response.json();
        }
    }).then(data=> {
        console.log("datafromFetcher =>", data.payload.length);
        callback(null, data);
    }).catch(err => console.log(err));
}