import axios from "axios";
import {getUserID} from "../utils/func";
const url = 'http://localhost:3000/';

const addProduct = (data) => {

    return new Promise((resolve, reject) => {

        axios.post(url + 'add-product', data).
        then(response => resolve(response))
        .catch(error => reject(error));


    });
    
}

const getProduct = () => {

    return new Promise((resolve, reject) => {


        axios.get(url + 'product/' + getUserID()).then(result => 
        {   
            console.log(result.data.data);
            resolve(result.data.data)
        })
        .catch(error => reject(error));
    })
}

const getProductByID = (product) => {

    return new Promise((resolve, reject) => {


        axios.get(url + 'product' + product.ownerID + '/' + product.id).then(result => 
        {   
            console.log(result);
            resolve(result.data.data)
        })
        .catch(error => reject(error));
    })
}

const login = (account, password) => {
    return new Promise((resolve, reject) => {

        axios.post(url + 'auth', {account, password})
        .then(resolve)
        .catch(reject);
    })
}

const updateProduct = (data) => {

    return new Promise((resolve, reject) => {

        axios.post(url + 'update-product', data).
        then(response => resolve(response))
        .catch(error => reject(error));
    });
    
}


export {addProduct, getProduct, login, updateProduct};