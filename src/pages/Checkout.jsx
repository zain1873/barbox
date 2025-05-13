import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function CheckoutPage() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    country: 'United States',
    address: '',
    city: '',
    state: '',
    zip: '',
    cardNumber: '',
    expiry: '',
    cvc: '',
    useShippingAsBilling: true,
  });

  const navigate = useNavigate();
  const location = useLocation();
  const { billingType, selectedPlan } = location.state || {};

  const planDetails = {
    '12mo': { title: '12 Month Subscription', price: '$29.00' },
    '6mo': { title: '6 Month Subscription', price: '$35.00' },
    'monthly': { title: 'Monthly Subscription', price: '$45.00' },
    '12mo-prepay': { title: '12 Month Prepay Subscription', price: '$313.20' },
    '6mo-prepay': { title: '6 Month Prepay Subscription', price: '$189.00' },
  };

  const selected = planDetails[selectedPlan] || {};

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Order submitted', form);
    // navigate('/thank-you');
  };

  return (
    <div className="checkout-container">
      <div className="checkout-left">
        <h2 className='theme-title'>Checkout</h2>
        <form onSubmit={handleSubmit}>
          <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />

          <div className="input-row">
            <input type="text" name="firstName" placeholder="First name" value={form.firstName} onChange={handleChange} required />
            <input type="text" name="lastName" placeholder="Last name" value={form.lastName} onChange={handleChange} required />
          </div>

          <input type="text" name="address" placeholder="Address" value={form.address} onChange={handleChange} required />
          <input type="text" name="city" placeholder="City" value={form.city} onChange={handleChange} required />

          <div className="input-row">
            <input type="text" name="state" placeholder="State" value={form.state} onChange={handleChange} required />
            <input type="text" name="zip" placeholder="ZIP Code" value={form.zip} onChange={handleChange} required />
          </div>

          <label className="checkbox-label">
            <input
              type="checkbox"
              name="useShippingAsBilling"
              checked={form.useShippingAsBilling}
              onChange={handleChange}
            />
            Use shipping address as billing address
          </label>

          <h3>Payment</h3>
          <input type="text" name="cardNumber" placeholder="Card number" value={form.cardNumber} onChange={handleChange} required />
          <div className="input-row">
            <input type="text" name="expiry" placeholder="MM/YY" value={form.expiry} onChange={handleChange} required />
            <input type="text" name="cvc" placeholder="CVC" value={form.cvc} onChange={handleChange} required />
          </div>

          <button type="submit" className="pay-button">Pay now</button>
        </form>
      </div>

      <div className="checkout-right">
        <div className="order-summary">
          <h4>Order Summary</h4>
          <div className="summary-item">
            <div>
              <strong>{selected.title || 'BarkBox Monthly Subscription'}</strong><br />
              Includes 2 toys, 2 treats, 1 chew. Free shipping.
            </div>
            <div>{selected.price || '$35.00'}</div>
          </div>
          <div className="discount-box">
            <input type="text" placeholder="Discount code or gift card" />
            <button className="apply-code">Apply</button>
          </div>
          <div className="summary-total">
            <div>Subtotal:</div>
            <div>{selected.price || '$35.00'}</div>
          </div>
          <div className="summary-total bold">
            <div>Total:</div>
            <div>{selected.price || '$35.00'}</div>
          </div>
          {selectedPlan === 'monthly' && (
            <p className="recurring-note">Recurring subtotal: $45.00/month</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;