import { useParams } from "react-router";
import { getProductByID } from "../../api/services";
import { useEffect, useState } from "react";
import ProductDetail from "./ProductDetail";

const StatsPage = props => {

    const params = useParams();

    const [product, setProduct] = useState(null);
    
    useEffect(() => {

        getProductByID(params.id).then(result => setProduct(result));
        
    }, []);

    return (
        product ? 
        <div className='row p-0 m-0'>
            <div className='col-12 col-xl-4'>
                <ProductDetail product={product}/>
            </div>
            <div className='col-12 col-xl-8'>
                s
            </div>
        </div>
        : <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    )


};


export default StatsPage;