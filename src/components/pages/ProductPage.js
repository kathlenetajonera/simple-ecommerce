import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Loading";
import QuantityField from "../QuantityField";
import Container from "../wrapper/Container";

const ProductPage = () => {
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [productDetails, setProductDetails] = useState(null);

    useEffect(() => {
        const fetchProductDetails = async () => {
            setIsLoading(true);

            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            const data = await response.json();

            setProductDetails(data);
            setIsLoading(false);
        }

        console.log("run");

        fetchProductDetails();
    }, [id])

    return (
        <Container>
            { isLoading && <Loading /> }

            { productDetails && 
            <div className="grid grid--product-page">
            
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
                        <QuantityField />
                        <button className="button">Add to Cart</button>
                    </div>
                </div>
            </div>
            }
        </Container>
    );
}
 
export default ProductPage;