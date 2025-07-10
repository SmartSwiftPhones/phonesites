import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ArrowRight, Zap, Shield, Camera, Battery, TrendingUp } from 'lucide-react';
import AdBanner from '../components/AdBanner';

const Home = () => {
  const featuredPhones = [
    {
      id: 1,
      name: 'iPhone 15 Pro Max',
      brand: 'Apple',
      image: 'https://images.pexels.com/photos/18525574/pexels-photo-18525574.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.8,
      price: '$1,199',
      features: ['A17 Pro Chip', '48MP Camera', 'Titanium Build'],
      affiliate: 'https://amazon.com'
    },
    {
      id: 2,
      name: 'Samsung Galaxy S24 Ultra',
      brand: 'Samsung',
      image: 'https://images.pexels.com/photos/18525569/pexels-photo-18525569.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.7,
      price: '$1,299',
      features: ['S Pen', '200MP Camera', '12GB RAM'],
      affiliate: 'https://amazon.com'
    },
    {
      id: 3,
      name: 'Google Pixel 8 Pro',
      brand: 'Google',
      image: 'https://images.pexels.com/photos/18525565/pexels-photo-18525565.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.6,
      price: '$999',
      features: ['Tensor G3', 'Magic Eraser', 'Pure Android'],
      affiliate: 'https://amazon.com'
    }
  ];

  const latestDeals = [
    {
      id: 1,
      title: 'iPhone 14 Pro - 25% Off',
      description: 'Limited time offer on last year\'s flagship',
      discount: '25% OFF',
      originalPrice: '$999',
      salePrice: '$749',
      expires: '2 days left'
    },
    {
      id: 2,
      title: 'Samsung Galaxy A54 - Special Price',
      description: 'Best mid-range phone with flagship features',
      discount: '30% OFF',
      originalPrice: '$449',
      salePrice: '$314',
      expires: '5 days left'
    },
    {
      id: 3,
      title: 'OnePlus 11 - Flash Sale',
      description: 'Flagship killer at unbeatable price',
      discount: '20% OFF',
      originalPrice: '$699',
      salePrice: '$559',
      expires: '1 day left'
    }
  ];

  const categories = [
    { name: 'Flagship Phones', icon: <Zap className="w-6 h-6" />, count: 25 },
    { name: 'Budget Phones', icon: <Shield className="w-6 h-6" />, count: 40 },
    { name: 'Camera Phones', icon: <Camera className="w-6 h-6" />, count: 30 },
    { name: 'Gaming Phones', icon: <Battery className="w-6 h-6" />, count: 15 },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Find Your Perfect
              <span className="text-yellow-400"> Smartphone</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Expert reviews, unbeatable deals, and trusted recommendations
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/reviews"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                Browse Reviews
              </Link>
              <Link
                to="/deals"
                className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors duration-200"
              >
                View Deals
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Content Ad */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AdBanner position="content" />
      </div>

      {/* Featured Phones */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-3/4">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Smartphones</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredPhones.map((phone) => (
                  <div key={phone.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <div className="aspect-w-16 aspect-h-12">
                      <img
                        src={phone.image}
                        alt={phone.name}
                        className="w-full h-48 object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-blue-600">{phone.brand}</span>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm text-gray-600 ml-1">{phone.rating}</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{phone.name}</h3>
                      <p className="text-2xl font-bold text-blue-600 mb-3">{phone.price}</p>
                      <ul className="space-y-1 mb-4">
                        {phone.features.map((feature, index) => (
                          <li key={index} className="text-sm text-gray-600">• {feature}</li>
                        ))}
                      </ul>
                      <div className="flex gap-2">
                        <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                          View Review
                        </button>
                        <button className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors">
                          Buy Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar with Ad */}
            <div className="lg:w-1/4 space-y-6">
              <AdBanner position="sidebar" className="sticky top-24" />
              
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Popular Categories</h3>
                <div className="space-y-3">
                  {categories.map((category, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors">
                      <div className="flex items-center space-x-3">
                        <div className="text-blue-600">{category.icon}</div>
                        <span className="font-medium text-gray-900">{category.name}</span>
                      </div>
                      <span className="text-sm text-gray-500">{category.count}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hot Deals */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">🔥 Hot Deals</h2>
            <p className="text-lg text-gray-600">Limited time offers you don't want to miss</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestDeals.map((deal) => (
              <div key={deal.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold">{deal.discount}</span>
                    <span className="text-sm">{deal.expires}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{deal.title}</h3>
                  <p className="text-gray-600 mb-4">{deal.description}</p>
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-lg text-gray-500 line-through">{deal.originalPrice}</span>
                    <span className="text-2xl font-bold text-green-600">{deal.salePrice}</span>
                  </div>
                  <button className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors">
                    Get Deal
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link
              to="/deals"
              className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              View All Deals
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl mb-8">Get the latest smartphone news and exclusive deals</p>
          <div className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-r-lg hover:bg-yellow-300 transition-colors font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;