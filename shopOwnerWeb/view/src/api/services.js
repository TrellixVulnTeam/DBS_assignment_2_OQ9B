import axios from "axios";
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


        axios.get(url + 'product').then(result => resolve(result.data))
        .catch(error => reject(error));
    })
}


export {addProduct, getProduct};