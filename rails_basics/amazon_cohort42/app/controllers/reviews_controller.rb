class ReviewsController < ApplicationController
    def create
        @product = Product.find params[:product_id]
        @review = Review.new(params.require(:review).permit(:rating,:body))
        @review.product = @product
        if @review.save
            # product_path(@product) => '/products/23'
            redirect_to product_path(@product.id)
        else
            @reviews = @product.reviews.order(created_at: :desc)
            render '/products/show'
        end
        
    end
    def destroy
        @product = Product.find params[:product_id]
        @review = Review.find params[:id]
        if @review.destroy
            flash[:success] = "Deleted"
            redirect_to product_path(@product)
        else
            redirect_to root_path
        end
        
    end

    def edit
        @product = Product.find params[:product_id]
        @review = Review.find params[:id]
        @reviews = @product.reviews
        render '/products/show'
    end

    def update
        @product = Product.find(params[:product_id])
        @review = Review.find params[:id]
        if @review.update(params.require(:review).permit(:rating,:body))
            redirect_to product_path(@product.id)
        else
            @reviews = @product.reviews
            render '/products/show'
        end
    end
end
