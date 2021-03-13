import React from 'react';
import product from '../../../../assets/images/product_dummy.svg';

function Product(props) {
    return (
        <div className="card-body">
            <div className="text-center">
                <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: '25em'}} src={product} alt="image dummy"/>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa exercitationem ratione?</p>
            <a target="_blank" rel="nofollow" href="/">View product detail</a>
        </div>
    );
}

export default Product;