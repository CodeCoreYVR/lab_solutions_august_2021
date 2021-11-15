import React, { Component } from 'react'
import ProductDetails from './ProductDetails';
import ReviewList from './ReviewList';
import { Product } from '../request';
import NewReviewForm from './NewReviewForm'


export default class ProductShowPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            review: {
                body: '',
                rating: 1
            }
        };
        this.deleteReview = this.deleteReview.bind(this);
        this.handleReviewForm = this.handleReviewForm.bind(this);
        this.handleAddNewReview = this.handleAddNewReview.bind(this);
    }
    componentDidMount() {
        const pid = this.props.match.params.id;
        Product.one(pid).then(data => {
            this.setState(data)
        })
    }
    deleteReview(reviewId) {
        this.setState((state) => {
            return { reviews: state.reviews.filter((review) => review.id !== reviewId) };
        });
    }
    handleReviewForm(type, val) {
        if (type === "CHANGE_BODY") {
            const { body, ...rest } = this.state.review;
            this.setState({
                review: {
                    body: val,
                    ...rest
                }
            })
        } else {
            const { rating, ...rest } = this.state.review;
            this.setState({
                review: {
                    rating: val,
                    ...rest
                }
            })
        }
    }

    handleAddNewReview(params) {
        this.setState(
            {
                reviews: [
                    ...this.state.reviews,
                    {
                        id: 123,
                        ...params
                    }
                ]
            }
        )
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
                <NewReviewForm onChange={this.handleReviewForm} review={this.state.review} handleAddNewReview={this.handleAddNewReview} />
            </div>
        )
    }
}

