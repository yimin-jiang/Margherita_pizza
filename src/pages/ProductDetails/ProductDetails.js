import React from 'react';
import PizzaIntro from './components/PizzaIntro';
import PizzaInfo from './components/PizzaInfo';
import RelatedPizza from './components/RelatedPizza';
import './ProductDetails.css';

class ProductDetails extends React.Component {

    render() {
        return (
            <div className="product-details-page">
                <PizzaIntro />
                <PizzaInfo />
                <RelatedPizza />
            </div>
        )
    }
};

export default ProductDetails;