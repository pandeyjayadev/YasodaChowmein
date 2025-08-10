'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { products } from '../../lib/products';
import emailjs from '@emailjs/browser';

export default function OrderPage() {
  const [cart, setCart] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const [showAddedNotification, setShowAddedNotification] = useState(false);
  const [addedItemName, setAddedItemName] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [orderDetails, setOrderDetails] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    note: '',
    paymentMethod: 'cash'
  });
  
  const router = useRouter();
  
  // Initialize EmailJS
  useEffect(() => {
    emailjs.init('YiSBRLxXUr9r3J_Vb'); // Replace with your actual EmailJS public key
  }, []);

  // Extract prices from product strings
  const getPriceValue = (priceStr) => {
    return Number(priceStr.replace('Rs. ', '').trim());
  };

  // Categories based on products
  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'chowmein', name: 'Chowmein' },
    { id: 'sauces', name: 'Sauces' },
    { id: 'vinegar', name: 'Vinegar' },
  ];

  // Add item to cart
  const addToCart = (item) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    
    if (existingItem) {
      setCart(cart.map(cartItem => 
        cartItem.id === item.id 
          ? { ...cartItem, quantity: cartItem.quantity + 1 } 
          : cartItem
      ));
    } else {
      setCart([...cart, { 
        ...item, 
        quantity: 1,
        priceValue: getPriceValue(item.price)
      }]);
    }
    
    setAddedItemName(item.name);
    setShowAddedNotification(true);
    setTimeout(() => setShowAddedNotification(false), 2000);
  };

  // Remove item from cart
  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  // Update item quantity
  const updateQuantity = (id, quantity) => {
    if (quantity < 1) {
      removeFromCart(id);
      return;
    }
    setCart(cart.map(item => item.id === id ? { ...item, quantity } : item));
  };

  // Calculate cart totals
  const cartTotal = cart.reduce((total, item) => total + (item.priceValue * item.quantity), 0);
  const deliveryFee = cartTotal > 0 ? 50 : 0;
  const grandTotal = cartTotal + deliveryFee;

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    // For phone number, only allow numbers
    if (name === 'phone') {
      const numbersOnly = value.replace(/[^0-9]/g, '');
      setOrderDetails({ ...orderDetails, [name]: numbersOnly });
    } else {
      setOrderDetails({ ...orderDetails, [name]: value });
    }
  };

  // Handle order placement with improved error handling
  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    setIsSending(true);

    if (cart.length === 0) {
      alert('Your cart is empty!');
      setIsSending(false);
      return;
    }
    // Validate EmailJS configuration
    if (!emailjs) {
      alert('Email service not available. Please try again later.');
      setIsSending(false);
      return;
    }

    try {
      const orderId = `ORD-${Date.now().toString().slice(-6)}`;
      const orderDate = new Date().toLocaleString();
      
      // Format cart items for email
      const cartItemsText = cart.map(item => 
        `${item.name} x${item.quantity} - Rs. ${(item.priceValue * item.quantity).toFixed(2)}`
      ).join('\n');

      // Prepare customer confirmation email
      const customerTemplateParams = {
        customer_name: orderDetails.name,
        customer_email: orderDetails.email,
        order_id: orderId,
        cart_items: cartItemsText,
        order_total: `Rs. ${grandTotal.toFixed(2)}`,
        delivery_address: orderDetails.address,
        payment_method: orderDetails.paymentMethod === 'cash' ? 'Cash on Delivery' : 'Fonepay',
        order_date: orderDate
      };

      // Prepare admin notification email
      const adminTemplateParams = {
        customer_name: orderDetails.name,
        customer_email: orderDetails.email,
        customer_phone: orderDetails.phone,
        customer_address: orderDetails.address,
        payment_method: orderDetails.paymentMethod === 'cash' ? 'Cash on Delivery' : 'Fonepay',
        special_instructions: orderDetails.note || 'None',
        cart_items: cartItemsText,
        order_total: `Rs. ${grandTotal.toFixed(2)}`,
        order_date: orderDate,
        order_id: orderId
      };

      console.log('Attempting to send customer email...', customerTemplateParams);
      
      // Send customer confirmation email
      try {
        const customerResult = await emailjs.send(
          'service_77516ha',
          'template_ga091vx',
          customerTemplateParams
        );
        console.log('Customer email sent successfully:', customerResult);
      } catch (customerError) {
        console.error('Customer email failed:', customerError);
        // Continue with admin email even if customer email fails
      }

      console.log('Attempting to send admin email...', adminTemplateParams);
      
      // Send admin notification email
      try {
        const adminResult = await emailjs.send(
          'service_77516ha', 
          'template_9dnum39',
          adminTemplateParams
        );
        console.log('Admin email sent successfully:', adminResult);
      } catch (adminError) {
        console.error('Admin email failed:', adminError);
        // Continue even if admin email fails
      }

      // Show success confirmation modal
      setShowConfirmationModal(true);
      setIsOrderPlaced(true);
      
      // Reset form and cart after delay
      setTimeout(() => {
        setCart([]);
        setIsOrderPlaced(false);
        setOrderDetails({
          name: '',
          email: '',
          phone: '',
          address: '',
          note: '',
          paymentMethod: 'cash'
        });
        
        // Redirect to home page
        setTimeout(() => router.push('/'), 3000);
      }, 5000);

    } catch (error) {
      console.error('Order placement failed:', error);
      
      // Show error with more specific message
      let errorMessage = 'Order processing failed. ';
      
      if (error.text) {
        errorMessage += `Error: ${error.text}`;
      } else if (error.message) {
        errorMessage += `Error: ${error.message}`;
      } else {
        errorMessage += 'Please check your internet connection and try again.';
      }
      
      alert(errorMessage);
      
    } finally {
      setIsSending(false);
    }
  };

  // Filter menu items by category
  const filteredItems = activeCategory === 'all' 
    ? products 
    : products.filter(item => {
        if (activeCategory === 'chowmein') return item.name.includes('Chowmein');
        if (activeCategory === 'sauces') return item.name.includes('Sauce');
        if (activeCategory === 'vinegar') return item.name.includes('Vinegar');
        return true;
      });

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50 pt-16 md:pt-0"> {/* Added pt-16 for mobile padding */}
      {/* Confirmation Modal */}
      {showConfirmationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6 relative"
          >
            <div className="absolute top-0 right-0 p-4">
              <button 
                onClick={() => setShowConfirmationModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Order Confirmed!</h3>
              <p className="text-gray-600 mb-6">
                Thank you for your order. We've sent a confirmation to your email.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mb-6 text-left">
                <h4 className="font-medium text-gray-800 mb-2">Order Summary</h4>
                {cart.map(item => (
                  <div key={item.id} className="flex justify-between text-sm mb-1">
                    <span>{item.name} x {item.quantity}</span>
                    <span>Rs. {(item.priceValue * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
                <div className="border-t border-gray-200 mt-2 pt-2">
                  <div className="flex justify-between font-medium">
                    <span>Total</span>
                    <span>Rs. {grandTotal.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setShowConfirmationModal(false)}
                className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 px-4 rounded-lg font-medium transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-500 to-amber-500">
        <div className="max-w-7xl mx-auto px-4 py-12 md:py-25 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            Order Yasoda Chowmein Products
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-orange-100 max-w-2xl mx-auto"
          >
            Premium ingredients for authentic chowmein
          </motion.p>
        </div>
      </div>

      {/* Notification for added item */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: showAddedNotification ? 1 : 0, y: showAddedNotification ? 0 : -50 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50"
      >
        <div className="bg-green-500 text-white px-6 py-3 rounded-full shadow-lg flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span>{addedItemName} added to cart!</span>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Product Menu */}
          <div className="lg:w-7/12">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-1">Our Products</h2>
              <p className="text-gray-600 text-sm mb-4">For bulk order contact us directly.</p>
              
              {/* Category Tabs */}
              <div className="flex flex-wrap gap-2 mb-6">
                {categories.map(category => (
                  <motion.button
                    key={category.id}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      activeCategory === category.id
                        ? 'bg-orange-500 text-white'
                        : 'bg-white text-gray-800 hover:bg-gray-100 shadow-sm'
                    }`}
                  >
                    {category.name}
                  </motion.button>
                ))}
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredItems.map(item => (
                  <motion.div 
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-xl shadow-md overflow-hidden border border-orange-100 transition-all"
                  >
                    <div className="p-5">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-bold text-gray-800">{item.name}</h3>
                          <p className="text-orange-600 font-bold mt-2">{item.price}</p>
                        </div>
                        {item.id <= 2 && (
                          <span className="bg-amber-100 text-amber-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                            Popular
                          </span>
                        )}
                      </div>
                      <p className="text-gray-600 text-sm mt-2">{item.description}</p>
                      <motion.button 
                        whileTap={{ scale: 0.95 }}
                        onClick={() => addToCart(item)}
                        className="mt-4 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg font-medium transition-colors flex items-center justify-center"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                        </svg>
                        Add to Cart
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Cart Section */}
          <div className="lg:w-5/12">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-4">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Order</h2>
              
              {/* Cart Items */}
              {cart.length === 0 ? (
                <div className="text-center py-8">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <p className="text-gray-500 mt-4">Your cart is empty</p>
                  <p className="text-gray-400 text-sm mt-2">Add products to place an order</p>
                </div>
              ) : (
                <div className="mb-6">
                  <div className="space-y-4">
                    {cart.map(item => (
                      <div key={item.id} className="flex justify-between items-center border-b pb-4">
                        <div className="w-1/2">
                          <h4 className="font-medium text-gray-800">{item.name}</h4>
                          <p className="text-xs text-gray-600">{item.price}</p>
                        </div>
                        <div className="flex items-center">
                          <motion.button 
                            whileTap={{ scale: 0.9 }}
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                            </svg>
                          </motion.button>
                          <span className="mx-2 text-gray-800">{item.quantity}</span>
                          <motion.button 
                            whileTap={{ scale: 0.9 }}
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                          </motion.button>
                        </div>
                        <div className="flex items-center">
                          <p className="font-medium text-gray-800">Rs. {item.priceValue * item.quantity}</p>
                          <motion.button 
                            whileTap={{ scale: 0.9 }}
                            onClick={() => removeFromCart(item.id)}
                            className="ml-4 text-gray-400 hover:text-red-500"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </motion.button>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Order Summary */}
                  <div className="mt-6 pt-4 border-t">
                    <div className="flex justify-between mb-2">
                      <span className="text-orange-600">Subtotal</span>
                      <span className="font-medium text-orange-600">Rs. {cartTotal}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-orange-600">Delivery</span>
                      <span className="font-medium text-orange-600">Rs. {deliveryFee}</span>
                    </div>
                    <div className="flex justify-between mt-4 pt-2 border-t border-gray-200 font-bold text-lg text-orange-600">
                      <span>Total</span>
                      <span>Rs. {grandTotal.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Order Form */}
              <form onSubmit={handlePlaceOrder}>
                <h3 className="text-lg font-medium text-gray-800 mb-4">Delivery Information</h3>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-800 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={orderDetails.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 bg-white text-gray-800 placeholder-gray-500"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-800 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={orderDetails.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 bg-white text-gray-800 placeholder-gray-500"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-800 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={orderDetails.phone}
                      onChange={handleInputChange}
                      required
                      pattern="[0-9]*"
                      inputMode="numeric"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 bg-white text-gray-800 placeholder-gray-500"
                      placeholder="98xxxxxxxx"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-800 mb-1">
                      Delivery Address
                    </label>
                    <textarea
                      id="address"
                      name="address"
                      value={orderDetails.address}
                      onChange={handleInputChange}
                      required
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 bg-white text-gray-800 placeholder-gray-500"
                      placeholder="Street, City / you can put google maps location"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="note" className="block text-sm font-medium text-gray-800 mb-1">
                      Special Instructions
                    </label>
                    <textarea
                      id="note"
                      name="note"
                      value={orderDetails.note}
                      onChange={handleInputChange}
                      rows={2}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 bg-white text-gray-800 placeholder-gray-500"
                      placeholder="Any special requests"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-800 mb-1">
                      Payment Method
                    </label>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="cash"
                          name="paymentMethod"
                          value="cash"
                          checked={orderDetails.paymentMethod === 'cash'}
                          onChange={handleInputChange}
                          className="h-4 w-4 text-orange-600 focus:ring-orange-500"
                        />
                        <label htmlFor="cash" className="ml-3 block text-sm font-medium text-gray-800">
                          Cash on Delivery
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="card"
                          name="paymentMethod"
                          value="card"
                          checked={orderDetails.paymentMethod === 'card'}
                          onChange={handleInputChange}
                          className="h-4 w-4 text-orange-600 focus:ring-orange-500"
                        />
                        <label htmlFor="card" className="ml-3 block text-sm font-medium text-gray-800">
                          Fonepay (Automated Payment will be availbale soon but for now we will send you detaials personally after order conformation)
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                
                {isOrderPlaced ? (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="bg-green-100 text-green-700 p-4 rounded-lg text-center"
                  >
                    <div className="flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <p className="font-medium">Order Placed Successfully!</p>
                    </div>
                    <p className="text-sm mt-1">Your products will be delivered soon</p>
                  </motion.div>
                ) : (
                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={cart.length === 0 || isSending}
                    className={`w-full py-3 px-4 rounded-lg font-bold text-white transition-colors flex items-center justify-center ${
                      cart.length === 0 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-orange-600 hover:bg-orange-700 shadow-md'
                    }`}
                  >
                    {isSending ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      `Place Order - Rs. ${grandTotal.toFixed(2)}`
                    )}
                  </motion.button>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
      
      {/* Product Benefits */}
      <div className="py-12 bg-gradient-to-r from-orange-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Yasoda Products</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Premium ingredients for authentic homemade chowmein experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Premium Quality */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-orange-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Premium Quality</h3>
              <p className="text-gray-600">Made with the finest ingredients for authentic taste and superior quality</p>
            </div>

            {/* Card 2: Fast Delivery */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-orange-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Quick delivery within 1 business day inside bardiya & 2-3 business days outside bardiya</p>
            </div>

            {/* Card 3: Authentic Taste */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-orange-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Authentic Taste</h3>
              <p className="text-gray-600">Traditional recipes for genuine Nepali flavor that brings back memories</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}