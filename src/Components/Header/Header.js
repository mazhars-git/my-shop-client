import React from 'react';
import productImg from '../../images/product.jpg';

const Header = () => {
    return (
        <section className="container">
            <div className="row">
                <div className="col-md-6">
                    <img className="img-fluid" src={productImg} alt="" />
                </div>
                <div className="col-md-6">
                    <p>Limited stock</p>
                    <h1>Loki's Displacement Color</h1>
                    <p>Having left Manchester United almost a decade ago, it’s no surprise that international soccer superstar Cristiano Ronaldo is ready to bid farewell to his home in the affluent English village of Alderley Edge, just 15 miles away from his former playing ground at Old Trafford.</p>

                    <div className="d-flex justify-content-between">
                        <button className="btn btn-primary">Add To Cart</button>
                        <button className="btn btn-primary">Buy It Now</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Header;