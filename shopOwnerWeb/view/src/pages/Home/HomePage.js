import ProductList from "../../component/HomePage/ProductList";
import Sidebar from "../../component/HomePage/Sidebar";
import AddProduct from "../AddProduct/AddProduct";
import './HomePage.css';
import { getProduct } from "../../api/services";
import { useEffect, useState } from "react";

const HomePage = props => {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        getProduct().
        then(result => {
            console.log(result);
            setProducts(result)})
        .catch(error => setProducts([]));
    }, []);

    return <div className='row home-page py-3'>
        <div className='col-2'>
            <div class="sticky-top p-2">
                <Sidebar />
            </div>
        </div>
        
        <div className='col col-md-10 mx-auto'>
            
            <ProductList products = {products}/>
        </div>
        
    </div>
};


export default HomePage;