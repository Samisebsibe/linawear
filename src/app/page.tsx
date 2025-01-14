'use client'; // Add this line at the top to use client-side features

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useState } from 'react';

export default function Home() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState('Black');
  const [quantity, setQuantity] = useState(1);
  const [email, setEmail] = useState('');

  const handleCarouselChange = (index) => {
    setSelectedIndex(index);
  };

  const handleQuantityChange = (action) => {
    if (action === 'increment' && quantity < 10) {
      setQuantity(quantity + 1);
    } else if (action === 'decrement' && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Thank you for subscribing! You will receive updates at ${email}.`);
    setEmail('');
  };

  const collections = [
    { name: 'Abaya', image: '/abaya.jpg' },
    { name: 'Hijabs', image: '/hijabs.jpg' },
    { name: 'Khimars', image: '/khimars.jpg' },
    { name: 'Sets', image: '/sets.jpg' },
    { name: 'Skirts', image: '/skirts.jpg' },
    { name: 'Accessories', image: '/accessories.jpg' },
    { name: 'Tote Bags', image: '/tote-bags.jpg' },
    { name: 'Destocking', image: '/destocking.jpg' },
  ];

  const newestProducts = [
    {
      name: 'Embroidered Abaya',
      price: 'zł180,00',
      image: '/embroidered-abaya.jpg',
    },
    {
      name: 'Silk Hijab',
      price: 'zł90,00',
      image: '/silk-hijab.jpg',
    },
    {
      name: 'Casual Khimar',
      price: 'zł120,00',
      image: '/casual-khimar.jpg',
    },
    {
      name: 'Floral Skirt',
      price: 'zł150,00',
      image: '/floral-skirt.jpg',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="relative">
        <Carousel
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={5000}
          showStatus={false}
          showIndicators={false} // Disable default dots
          selectedItem={selectedIndex} // Control the selected slide
          onChange={handleCarouselChange} // Update the selected index
        >
          <div>
            <img src="/hijab-banner-1.jpg" alt="Hijab 1" className="h-[400px] object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-4xl font-bold">Hijab Instant</h1>
                <p className="mt-4 text-xl">Available in 8 colors NOW</p>
                <button className="mt-6 px-6 py-2 bg-white text-gray-800 font-semibold rounded-lg">100% Cotton</button>
              </div>
            </div>
          </div>
          <div>
            <img src="/hijab-banner-2.jpg" alt="Hijab 2" className="h-[400px] object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-4xl font-bold">New Collection</h1>
                <p className="mt-4 text-xl">Explore our latest designs</p>
                <button className="mt-6 px-6 py-2 bg-white text-gray-800 font-semibold rounded-lg">Shop Now</button>
              </div>
            </div>
          </div>
          <div>
            <img src="/hijab-banner-3.jpg" alt="Hijab 3" className="h-[400px] object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-4xl font-bold">Exclusive Offers</h1>
                <p className="mt-4 text-xl">Limited time discounts</p>
                <button className="mt-6 px-6 py-2 bg-white text-gray-800 font-semibold rounded-lg">View Offers</button>
              </div>
            </div>
          </div>
        </Carousel>

        {/* Custom dots outside the carousel */}
        <div className="flex justify-center mt-4">
          <ul className="flex list-none p-0">
            {[0, 1, 2].map((index) => (
              <li
                key={index}
                style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  background: selectedIndex === index ? '#000' : '#ccc',
                  display: 'inline-block',
                  margin: '0 5px',
                  cursor: 'pointer',
                }}
                onClick={() => setSelectedIndex(index)} // Change slide on dot click
                onKeyDown={() => setSelectedIndex(index)}
                role="button"
                tabIndex={0}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </ul>
        </div>
      </section>

      {/* Introductory Section */}
      <section className="container mx-auto px-6 py-12 text-center">
        <blockquote className="text-2xl italic text-gray-700">
          "O Prophet: Say to your wives, your daughters and the believing women that they should let down upon themselves their jalabib" - Quran - Al Ahzab (33:59)
        </blockquote>
        <p className="mt-6 text-gray-600">
          At Linawear, we are inspired by timeless elegance and modesty. Our collections are designed to empower women with high-quality, stylish clothing that reflects their values.
        </p>
      </section>

      {/* Product Highlight Section */}
      <section className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Product Image */}
          <div className="flex justify-center">
            <img
              src="/abaya-cozycozy.jpg" // Replace with your product image path
              alt="Abaya CozyCozy"
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">Abaya CozyCozy</h2>
            <p className="text-xl text-gray-600">zł140,00</p>

            {/* Color Selector */}
            <div className="space-y-2">
              <p className="text-gray-700">Select Color:</p>
              <div className="flex space-x-3">
                {['Black', 'Beige', 'Gray', 'Navy'].map((color) => (
                  <button
                    key={color}
                    className={`w-8 h-8 rounded-full border-2 ${
                      selectedColor === color ? 'border-black' : 'border-gray-300'
                    } focus:outline-none focus:ring-2 focus:ring-gray-500`}
                    style={{ backgroundColor: color.toLowerCase() }}
                    onClick={() => setSelectedColor(color)}
                    aria-label={`Select ${color} color`}
                  />
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="space-y-2">
              <p className="text-gray-700">Quantity:</p>
              <div className="flex items-center space-x-4">
                <button
                  className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300"
                  onClick={() => handleQuantityChange('decrement')}
                >
                  -
                </button>
                <span className="text-lg">{quantity}</span>
                <button
                  className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300"
                  onClick={() => handleQuantityChange('increment')}
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button className="w-full md:w-auto px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors">
              Add to Cart
            </button>

            {/* Payment Options */}
            <div className="flex space-x-4">
              <img src="/paypal.png" alt="PayPal" className="h-8" />
              <img src="/visa.png" alt="Visa" className="h-8" />
              <img src="/mastercard.png" alt="Mastercard" className="h-8" />
            </div>
          </div>
        </div>
      </section>

      {/* Collections Section */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Collections</h2>
        <div className="flex overflow-x-auto space-x-4 pb-4">
          {collections.map((collection, index) => (
            <div key={index} className="flex-shrink-0 w-48 bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={collection.image}
                alt={collection.name}
                className="w-full h-32 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{collection.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newest Products Section */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Newest Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {newestProducts.map((product, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                <p className="text-gray-600">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Signup Section */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Newsletter</h2>
          <p className="text-gray-600 mb-6">
            Be the first to know about new collections, exclusive offers, and discounts.
          </p>
          <form onSubmit={handleSubscribe} className="flex justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-64 px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 text-gray-800"
              required
            />
            <button
              type="submit"
              className="px-6 py-2 bg-black text-white font-semibold rounded-r-lg hover:bg-gray-700 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
<footer className="bg-white shadow mt-8">
  <div className="container mx-auto px-6 py-12">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      {/* All Collections */}
      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-4">All Collections</h3>
        <ul className="space-y-2">
          {['Abaya', 'Hijabs', 'Khimars', 'Sets', 'Skirts', 'Accessories', 'Tote Bags', 'Destocking'].map(
            (collection, index) => (
              <li key={index} className="text-gray-900 hover:text-gray-700">
                <a href="#">{collection}</a>
              </li>
            )
          )}
        </ul>
      </div>

      {/* Social Media Links */}
      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-4">Follow Us</h3>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-900 hover:text-gray-700">
            <img src="/instagram.png" alt="Instagram" className="h-6" />
          </a>
          <a href="#" className="text-gray-900 hover:text-gray-700">
            <img src="/tiktok.png" alt="TikTok" className="h-6" />
          </a>
          <a href="#" className="text-gray-900 hover:text-gray-700">
            <img src="/youtube.png" alt="YouTube" className="h-6" />
          </a>
          <a href="#" className="text-gray-900 hover:text-gray-700">
            <img src="/facebook.png" alt="Facebook" className="h-6" />
          </a>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-4">Newsletter</h3>
        <p className="text-gray-900 mb-4">
          Be the first to know about new collections, exclusive offers, and discounts.
        </p>
        <form onSubmit={handleSubscribe} className="flex">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 text-gray-900"
            required
          />
          <button
            type="submit"
            className="px-4 py-2 bg-black text-white font-semibold rounded-r-lg hover:bg-gray-700 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Important Links */}
      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-4">Important Links</h3>
        <ul className="space-y-2">
          <li className="text-gray-900 hover:text-gray-700">
            <a href="#">Contact Information</a>
          </li>
          <li className="text-gray-900 hover:text-gray-700">
            <a href="#">Privacy Policy</a>
          </li>
          <li className="text-gray-900 hover:text-gray-700">
            <a href="#">Refund Policy</a>
          </li>
          <li className="text-gray-900 hover:text-gray-700">
            <a href="#">Terms of Service</a>
          </li>
          <li className="text-gray-900 hover:text-gray-700">
            <a href="#">Legal Notice</a>
          </li>
        </ul>
      </div>
    </div>

    {/* Payment Methods and Copyright */}
    <div className="border-t border-gray-200 mt-8 pt-8 text-center">
      <div className="flex justify-center space-x-6 mb-4">
        <img src="/paypal.png" alt="PayPal" className="h-8" />
        <img src="/visa.png" alt="Visa" className="h-8" />
        <img src="/mastercard.png" alt="Mastercard" className="h-8" />
      </div>
      <p className="text-gray-900">&copy; 2024 Linawear. All rights reserved.</p>
    </div>
  </div>
</footer>
    </div>
  );
}