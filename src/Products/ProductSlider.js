import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const ProductSlider = () => {

    const [quantity, setQuantity] = useState(1);
    const { id } = useParams();
    const dispatch = useDispatch();
    const { product } = useSelector(state => state.ProductsReducer);
    useEffect(() => {
        dispatch({ type: 'PRODUCT', id })
    }, [id])
    const decQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    const settings = {
        dots: false,
        infinite: true,
        pagination: false,
        speed: 500
    };

    return (
        <div className="carousel-wrapper">
            <Carousel {...settings}>
                <div>
                    <img src={`/images/${product.image}`} />
                </div>
                <div>
                    <img src={`/images/${product.imageOne}`} />
                </div>
                <div>
                    <img src={`/images/${product.imageOne}`} />
                </div>
                <div>
                    <img src={`/images/${product.imageOne}`} />
                </div>
            </Carousel>
        </div>
    )
}


export default ProductSlider;