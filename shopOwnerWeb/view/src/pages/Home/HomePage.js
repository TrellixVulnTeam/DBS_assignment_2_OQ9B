import Sidebar from "../../component/HomePage/Sidebar";
import ProductTable from "../../component/HomePage/ProductTable";
import EditModalItem from "../../component/HomePage/EditModalItem";
import './HomePage.css';
import { getProduct } from "../../api/services";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const HomePage = props => {

    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [editModalItem, changeEditModalItem] = useState({
        ownerID: 1,
        amount: 1,
        name: "",
        description: "",
        price: 1,
        type: "",
        imageURL: ""
    });

    useEffect(() => {

        getProduct().
        then(result => {
            console.log(result);
            setProducts(result)})
        .catch(error => setProducts([]));
    }, []);

    
    return <div className='row home-page py-3'>
        <div className='col-2'>
            <div class="sticky-top">
                <Sidebar />
            </div>
        </div>
        
        <div className='col col-md-10 mx-auto'>
            
            {/* <ProductList products = {products}/> */}
            <ProductTable products={products} changeEditModalItem = {changeEditModalItem}/>
        </div>
        {
            editModalItem ? <EditModalItem item={editModalItem}/> : null
        }
    </div>
};


export default HomePage;