import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useAddToCart from "../hooks/useAddToCart";
import Loading from "../Loading";
import QuantityField from "../QuantityField";
import Container from "../wrapper/Container";

const ProductPage = () => {
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [productDetails, setProductDetails] = useState(null);
    const [currentQuantity, setCurrentQuantity] = useState(1);
    const { handleAddToCart, isAddingToCart } = useAddToCart("grid--product-page", { 
        id: productDetails && productDetails.id, 
        name: productDetails && productDetails.title, 
        image: productDetails && productDetails.image, 
        price: productDetails && productDetails.price, 
        currentQuantity
    })

    const handleChange = e => {
        const qty = e.target.value;
        const maxValue = 99;

        if (qty <= maxValue) {
            setCurrentQuantity(parseInt(qty));
        }
    }

    //fetch product details
    useEffect(() => {
        const fetchProductDetails = async () => {
            setIsLoading(true);

            try {
                const response = await fetch(`https://fakestoreapi.com/products/${id}`);
                const data = await response.json();

                if (data) {
                    setProductDetails(data);
                } else throw new Error("Could not fetch data..");
            } catch (e) {
                setError(e.message);
            }

            setIsLoading(false);
        }

        fetchProductDetails();
    }, [id])

    return (
        <Container>
            { isLoading && <Loading /> }
            { error && <p className="error__text">{error}</p> }

            { productDetails && 
            <div className="grid grid--product-page" id={productDetails.id}>
            
                <img src={productDetails.image} alt={productDetails.title} className="product__image"/>

                <div className="product__details">
                    <h3 className="product__main-text">
                        { productDetails.title }
                    </h3>

                    <p className="product__text">
                        { productDetails.description }
                    </p>

                    <p className="product__text">
                        Category: { productDetails.category }
                    </p>

                    <div className="flex flex--sb-c">
                        <QuantityField 
                            currentQuantity={currentQuantity}
                            handleChange={handleChange}
                        />
                        <button 
                            className={`button ${isAddingToCart ? 'button--loading': ''}`}
                            onClick={handleAddToCart}
                        >
                            { isAddingToCart ? '' : 'Add to Cart' }
                        </button>
                    </div>
                </div>
            </div>
            }
        </Container>
    );
}
 
export default ProductPage;