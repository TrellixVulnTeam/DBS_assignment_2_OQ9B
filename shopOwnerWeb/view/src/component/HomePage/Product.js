


const Product = props => {


    return (
    <div className='p-1'>
        <div class="card">

            <div class="view overlay p-1">
                <img class="card-img-top img-thumbnail rounded img-responsive" src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg"
                    alt="Card image cap" />
                {/* <a href="#!">
                    <div class="mask rgba-white-slight"></div>
                </a> */}
            </div>

            <div class="card-body">


            <h4 class="card-title">Card title</h4>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                content.</p>
            <a href="#" class="btn bg-main text-white">Button</a>

            </div>

        </div>
    </div>
    )
}

export default Product;