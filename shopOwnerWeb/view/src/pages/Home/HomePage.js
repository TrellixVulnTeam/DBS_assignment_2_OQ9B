import ProductTable from "../../component/HomePage/ProductTable";
import Sidebar from "../../component/HomePage/Sidebar";
import './HomePage.css';

const HomePage = props => {





    return <div className='row home-page py-3'>
        {/* <div className='col-3'>
            <div class="sticky-top">
                <Sidebar />
            </div>
        </div> */}
        <div className='col col-md-8 mx-auto'>
            <ProductTable />
        </div>
        
    </div>
};


export default HomePage;