import React, { useState } from 'react';
import { Star, ExternalLink, Filter, Heart } from 'lucide-react';
import AdBanner from '../components/AdBanner';

const Accessories = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const accessories = [
    {
      id: 1,
      name: 'MagSafe Wireless Charger',
      category: 'chargers',
      image: 'https://images.pexels.com/photos/18525580/pexels-photo-18525580.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: '$39',
      originalPrice: '$49',
      rating: 4.8,
      reviews: 2341,
      description: 'Fast wireless charging with perfect alignment for iPhone 12 and later models.',
      features: ['15W Fast Charging', 'MagSafe Compatible', 'Premium Materials'],
      affiliateLinks: [
        { store: 'Amazon', url: 'https://amazon.com', price: '$39' },
        { store: 'Apple Store', url: 'https://apple.com', price: '$39' }
      ]
    },
    {
      id: 2,
      name: 'Spigen Liquid Crystal Case',
      category: 'cases',
      image: 'https://images.pexels.com/photos/18525581/pexels-photo-18525581.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: '$15',
      originalPrice: '$20',
      rating: 4.7,
      reviews: 5672,
      description: 'Crystal clear protection with military-grade drop protection.',
      features: ['Drop Protection', 'Crystal Clear', 'Wireless Charging'],
      affiliateLinks: [
        { store: 'Amazon', url: 'https://amazon.com', price: '$15' },
        { store: 'Spigen', url: 'https://spigen.com', price: '$15' }
      ]
    },
    {
      id: 3,
      name: 'Sony WH-1000XM4 Headphones',
      category: 'headphones',
      image: 'https://images.pexels.com/photos/18525582/pexels-photo-18525582.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: '$279',
      originalPrice: '$349',
      rating: 4.9,
      reviews: 8234,
      description: 'Industry-leading noise cancellation with exceptional sound quality.',
      features: ['Active Noise Cancellation', '30-hour Battery', 'Touch Controls'],
      affiliateLinks: [
        { store: 'Amazon', url: 'https://amazon.com', price: '$279' },
        { store: 'Sony', url: 'https://sony.com', price: '$279' },
        { store: 'Best Buy', url: 'https://bestbuy.com', price: '$279' }
      ]
    },
    {
      id: 4,
      name: 'Anker PowerCore 10000',
      category: 'chargers',
      image: 'https://images.pexels.com/photos/18525583/pexels-photo-18525583.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: '$29',
      originalPrice: '$35',
      rating: 4.6,
      reviews: 12456,
      description: 'Ultra-compact portable charger with high-speed charging technology.',
      features: ['10000mAh Capacity', 'PowerIQ Technology', 'Compact Design'],
      affiliateLinks: [
        { store: 'Amazon', url: 'https://amazon.com', price: '$29' },
        { store: 'Anker', url: 'https://anker.com', price: '$29' }
      ]
    },
    {
      id: 5,
      name: 'Moment Pro Camera Lens',
      category: 'camera',
      image: 'https://images.pexels.com/photos/18525584/pexels-photo-18525584.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: '$119',
      originalPrice: '$149',
      rating: 4.5,
      reviews: 892,
      description: 'Professional-grade lenses to enhance your smartphone photography.',
      features: ['Wide Angle Lens', 'Professional Quality', 'Easy Attachment'],
      affiliateLinks: [
        { store: 'Moment', url: 'https://shopmoment.com', price: '$119' },
        { store: 'Amazon', url: 'https://amazon.com', price: '$119' }
      ]
    },
    {
      id: 6,
      name: 'OtterBox Defender Pro',
      category: 'cases',
      image: 'https://images.pexels.com/photos/18525585/pexels-photo-18525585.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: '$45',
      originalPrice: '$60',
      rating: 4.8,
      reviews: 3456,
      description: 'Ultimate protection for your smartphone with rugged design.',
      features: ['Drop Protection', 'Dust Resistant', 'Holster Included'],
      affiliateLinks: [
        { store: 'OtterBox', url: 'https://otterbox.com', price: '$45' },
        { store: 'Amazon', url: 'https://amazon.com', price: '$45' }
      ]
    },
    {
      id: 7,
      name: 'Belkin 3-in-1 Wireless Charger',
      category: 'chargers',
      image: 'https://images.pexels.com/photos/18525586/pexels-photo-18525586.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: '$129',
      originalPrice: '$149',
      rating: 4.7,
      reviews: 1876,
      description: 'Charge your iPhone, Apple Watch, and AirPods simultaneously.',
      features: ['3-in-1 Design', 'Fast Charging', 'Apple Certified'],
      affiliateLinks: [
        { store: 'Belkin', url: 'https://belkin.com', price: '$129' },
        { store: 'Amazon', url: 'https://amazon.com', price: '$129' }
      ]
    },
    {
      id: 8,
      name: 'Peak Design Mobile Stand',
      category: 'stands',
      image: 'https://images.pexels.com/photos/18525587/pexels-photo-18525587.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: '$35',
      originalPrice: '$40',
      rating: 4.6,
      reviews: 654,
      description: 'Versatile phone stand with magnetic attachment system.',
      features: ['Magnetic Mount', 'Adjustable Angle', 'Premium Materials'],
      affiliateLinks: [
        { store: 'Peak Design', url: 'https://peakdesign.com', price: '$35' },
        { store: 'Amazon', url: 'https://amazon.com', price: '$35' }
      ]
    }
  ];

  const categories = [
    { name: 'all', label: 'All Accessories', count: 45 },
    { name: 'cases', label: 'Cases', count: 15 },
    { name: 'chargers', label: 'Chargers', count: 12 },
    { name: 'headphones', label: 'Headphones', count: 8 },
    { name: 'camera', label: 'Camera', count: 6 },
    { name: 'stands', label: 'Stands', count: 4 }
  ];

  const filteredAccessories = selectedCategory === 'all' 
    ? accessories 
    : accessories.filter(accessory => accessory.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Smartphone Accessories</h1>
          <p className="text-lg text-gray-600">Essential accessories to enhance your smartphone experience</p>
        </div>

        {/* Content Ad */}
        <AdBanner position="content" className="mb-8" />

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Category Filter */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <div className="flex items-center space-x-4 mb-4">
                <Filter className="w-5 h-5 text-gray-600" />
                <span className="font-medium text-gray-900">Categories:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category.name
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category.label} ({category.count})
                  </button>
                ))}
              </div>
            </div>

            {/* Accessories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAccessories.map((accessory) => (
                <div key={accessory.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative">
                    <img
                      src={accessory.image}
                      alt={accessory.name}
                      className="w-full h-48 object-cover"
                    />
                    <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-50">
                      <Heart className="w-4 h-4 text-gray-600" />
                    </button>
                    {accessory.originalPrice && (
                      <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                        SALE
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-bold text-gray-900">{accessory.name}</h3>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600 ml-1">{accessory.rating}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="text-2xl font-bold text-blue-600">{accessory.price}</span>
                      {accessory.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">{accessory.originalPrice}</span>
                      )}
                    </div>

                    <p className="text-gray-600 text-sm mb-3">{accessory.description}</p>

                    <div className="space-y-1 mb-4">
                      {accessory.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                          <span className="text-xs text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="text-xs text-gray-500 mb-4">
                      {accessory.reviews.toLocaleString()} reviews
                    </div>

                    <div className="space-y-2">
                      <div className="text-sm font-medium text-gray-900">Buy from:</div>
                      <div className="flex flex-wrap gap-1">
                        {accessory.affiliateLinks.map((link, index) => (
                          <a
                            key={index}
                            href={link.url}
                            className="inline-flex items-center px-3 py-1 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors text-xs"
                          >
                            {link.store}
                            <ExternalLink className="w-3 h-3 ml-1" />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/4 space-y-6">
            <AdBanner position="sidebar" className="sticky top-24" />
            
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Top Rated</h3>
              <div className="space-y-3">
                {accessories.slice(0, 5).map((accessory) => (
                  <div key={accessory.id} className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                    <img src={accessory.image} alt={accessory.name} className="w-12 h-12 object-cover rounded" />
                    <div className="flex-1">
                      <div className="font-medium text-sm">{accessory.name}</div>
                      <div className="flex items-center">
                        <Star className="w-3 h-3 text-yellow-400 fill-current" />
                        <span className="text-xs text-gray-600 ml-1">{accessory.rating}</span>
                      </div>
                    </div>
                    <div className="text-sm font-bold text-blue-600">{accessory.price}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Buying Tips</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-1">Cases</h4>
                  <p className="text-sm text-gray-600">Look for drop protection ratings and wireless charging compatibility.</p>
                </div>
                <div className="border-l-4 border-green-600 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-1">Chargers</h4>
                  <p className="text-sm text-gray-600">Choose chargers with fast charging support and safety certifications.</p>
                </div>
                <div className="border-l-4 border-purple-600 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-1">Headphones</h4>
                  <p className="text-sm text-gray-600">Consider noise cancellation and battery life for the best experience.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accessories;