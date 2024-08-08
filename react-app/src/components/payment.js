import React, { useState } from 'react';
import './payment.css';

const Payment = ({ goBack }) => {
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');

    const handlePayment = async () => {
        console.log('handlePayment called');
        console.log('Selected payment method:', paymentMethod);

        if (paymentMethod === 'Cash on Delivery') {
            console.log('Processing Cash on Delivery payment');
            if (!email || !phone || !address) {
                alert('Please fill in all required fields for Cash on Delivery.');
                return;
            }

            try {
                const response = await fetch('http://localhost:4000/send-email', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        email: email,
                        subject: 'Order Confirmation',
                        text: 'Your order has been confirmed. We will deliver it to your address soon.',
                    }),
                });

                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(errorData.details || 'Network response was not ok');
                }

                const data = await response.json();
                console.log('Email sent:', data);
                alert('Your order has been confirmed. A confirmation email has been sent.');
            } catch (error) {
                console.error('Error sending email:', error);
                alert(`There was an error processing your request: ${error.message}`);
            }
        } else {
            // Handle other payment methods
            alert('Payment processed successfully!');
        }
    };

    return (
        <div className='payment'>
            <h2>Select Payment Method</h2>
       
           
           
            <div>
                <input
                    type="radio"
                    id="cashOnDelivery"
                    name="paymentMethod"
                    value="Cash on Delivery"
                    onChange={() => setPaymentMethod('Cash on Delivery')}
                />
                <label htmlFor="cashOnDelivery">Cash on Delivery</label>
            </div>

            {paymentMethod === 'Cash on Delivery' && (
                <div className='cod-form'>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="phone">Phone Number:</label>
                        <input
                            type="text"
                            id="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="address">Delivery Address:</label>
                        <input
                            type="text"
                            id="address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </div>
                </div>
            )}

            <button onClick={handlePayment}>Confirm Order</button>
            <button onClick={goBack}>Go Back</button>
        </div>
    );
};

export default Payment;
