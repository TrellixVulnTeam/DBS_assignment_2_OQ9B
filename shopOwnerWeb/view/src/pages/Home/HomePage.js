import Sidebar from "../../component/HomePage/Sidebar";
import ProductTable from "../../component/HomePage/ProductTable";
import EditModalItem from "../../component/HomePage/EditModalItem";
import './HomePage.css';
import { getProduct } from "../../api/services";
import { useEffect, useState } from "react";
// import { useNavigate } from "react-router";

const HomePage = props => {

    // const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [isChanged, setChange] = useState(false);
    const [filterValue, setFilterValue] = useState("");
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
            // console.log(result);
            const items = result.filter(item => item.name.toLowerCase().includes(filterValue) || filterValue === '');
            console.log(items);
            setProducts(items)})
        .catch(error => setProducts([]));
    }, [isChanged, filterValue]);

    const toggleChange = () => {
        setChange(!isChanged);
    }
    
    return <div className='row home-page py-3'>
        <div className='col-12 col-lg-2 pb-2'>
            <div class="sticky-top">
                <Sidebar action = {setFilterValue}/>
            </div>
        </div>
        
        <div className='col col-lg-10 mx-auto'>
            
            {/* <ProductList products = {products}/> */}
            <ProductTable products={products} changeEditModalItem = {changeEditModalItem} action={toggleChange}/>
        </div>
        {
            editModalItem ? <EditModalItem item={editModalItem} action={toggleChange}/> : null
        }
    </div>
};


export default HomePage;