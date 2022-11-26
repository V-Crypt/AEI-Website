/**
 * paypalCheckoutButton.js tiene todo el contenido y funcionalidades del botón relacionado con los pagos y transacciones de la sección "Tienda".
 * */

import React, { useState } from 'react';
import { PayPalButtons } from '@paypal/react-paypal-js';

const PaypalCheckoutButton = (props) => {
    const { product } = props;
    const [paidFor, setPaidFor] = useState(false);
    const [error, setError] = useState(null);
    const handleApprove = (orderId) => {
        // Call backend function to fulfill order.
        // if response is success.
        setPaidFor(true);
        // Refresh user's account or subscription status.
        // if response is error.
        // alert("Your payment was processed successfully. However, we are unable to fulfill your purchase. Please contact us at support@designcode.io for assistance.");
    };
    if (paidFor) {
        // Display success message, modal or redirect user to success page.
        alert("&#161;Gracias por tu compra!");
    }
    if (error) {
        // Display error message, modal or redirect user to error page.
        alert(error);
    }
    return (
        <PayPalButtons
            style={{
                color: 'silver'
            }}
            onClick={(data, actions) => {
                // Validate on button click, client or server side
                const hasAlreadyBoughtProduct = false;
                if (hasAlreadyBoughtProduct) {
                    setError(
                        "Ya has comprado este artículo. ¿Estás seguro de volver a comprarlo?"
                    );
                    return actions.reject();
                } else {
                    return actions.resolve();
                }
            }}
            createOrder={(data, actions) => {
                return actions.order.create({
                    purchase_units: [
                        {
                            description: product.description,
                            amount: {
                                value: product.price
                            }
                        }
                    ]
                });
            }}
            onApprove={async (data, actions) => {
                const order = await actions.order.capture();
                console.log("order", order);
                handleApprove(data.orderID);
            }}
            onCancel={() => {
                // Display cancel message, modal or redirect user to cancel page or back to cart.
            }}
            onError={(err) => {
                setError(err);
                console.error("PayPal Checkout onError", err);
            }}
        />
    );
}

export default PaypalCheckoutButton;