import React, { Component } from 'react'
import ProductDetails from './ProductDetails';
import ReviewList from './ReviewList';
import productData from '../mock_data/productData.json';


export default class ProductShowPage extends Component {
    constructor(props) {
        super(props);
        this.state = productData;
        this.deleteReview = this.deleteReview.bind(this);
    }
    deleteReview(reviewId) {
        this.setState((state) => {
            return { reviews: state.reviews.filter((review) => review.id !== reviewId) };
        });
    }
    render() {
        return (
            <div>
                <ProductDetails
                    title={this.state.title}
                    description={this.state.description}
                    created_at={this.state.created_at}
                    seller={this.state.seller}
                    price={this.state.price}
                />
                <ReviewList reviewList={this.state.reviews} onReviewDelete={this.deleteReview} />
            </div>
        )
    }
}

