import Product from "./Product";


const ProductTable = props => {




    return <div className='row'>
        <div className='col-10 col-sm-12 col-md-6 col-xl-4 p-2'>
            <Product />
        </div>
        <div className='col-10 col-sm-12 col-md-6 col-xl-4 p-2'>
            <Product />
        </div>
        <div className='col-10 col-sm-12 col-md-6 col-xl-4 p-2'>
            <Product />
        </div>
        <div className='col-10 col-sm-12 col-md-6 col-xl-4 p-2'>
            <Product />
        </div>
        <div className='col-10 col-sm-12 col-md-6 col-xl-4 p-2'>
            <Product />
        </div>
    </div>
}


export default ProductTable;