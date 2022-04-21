import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Pay = () => {

    const [stripeToken, setStripeToken] = useState(null);
    const navigate = useNavigate();

    const onToken = (token) => {
        setStripeToken(token);

    }

    useEffect(() => {
        const makeRequest = async () => {
            try {
                const res = await axios.post("http://localhost:5000/api/checkout/payment", {
                    tokenId: stripeToken.id,
                    amount: 2000,

                });
                console.log(res.data);
                navigate('/Success')
            } catch (error) {
                console.log(error)
            }
        }
        stripeToken && makeRequest()
    }, [stripeToken, navigate])
    return (
        <div style={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        }}
        >
            {stripeToken ? (<span>processing.  Please wait...</span>) : (
                <StripeCheckout name="Ivolvo Shop"
                    image="https://image.shutterstock.com/z/stock-vector-avatar-man-and-shopping-and-ecommerce-icon-489296014.jpg"
                    billingAddress
                    shippingAddress
                    description='Your total is 20$'
                    amount={2000}
                    token={onToken}
                    stripeKey={"pk_test_51KqYGFCpPi8IDrPczZurFc8o1tllnhNEDnxigfIZTAZluptrCjY6q5CqeLiGhBLpwlCbEDIrjIGSfZmk1mNRUEsC00gyv1V4H6"}>


                    <button
                        style={{
                            border: "none",
                            width: 120,
                            borderRadius: 5,
                            padding: "20px",
                            backgroundColor: "black",
                            color: "white",
                            fontWeight: "600",
                            cursor: "pointer",

                        }}
                    >
                        Pay Now

                    </button>
                </StripeCheckout>
            )}
        </div>


    )
}






export default Pay