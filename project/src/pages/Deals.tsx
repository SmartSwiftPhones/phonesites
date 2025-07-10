import React, { useState } from 'react';
import { Clock, ExternalLink, Percent, Siren as Fire, Tag } from 'lucide-react';
import AdBanner from '../components/AdBanner';

const Deals = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const deals = [
    {
      id: 1,
      title: 'iPhone 14 Pro - Limited Time Offer',
      phone: 'iPhone 14 Pro',
      image: 'https://images.pexels.com/photos/18525574/pexels-photo-18525574.jpeg?auto=compress&cs=tinysrgb&w=400',
      originalPrice: '$999',
      salePrice: '$749',
      discount: '25%',
      savings: '$250',
      category: 'flagship',
      store: 'Amazon',
      expires: '2025-01-20',
      timeLeft: '2 days',
      couponCode: 'SAVE25NOW',
      description: 'Get the flagship iPhone 14 Pro with professional camera system at an incredible price.',
      features: ['48MP Pro Camera', 'A16 Bionic Chip', '128GB Storage'],
      affiliateUrl: 'https://amazon.com'
    },
    {
      id: 2,
      title: 'Samsung Galaxy S23 - Flash Sale',
      phone: 'Samsung Galaxy S23',
      image: 'https://images.pexels.com/photos/18525569/pexels-photo-18525569.jpeg?auto=compress&cs=tinysrgb&w=400',
      originalPrice: '$799',
      salePrice: '$599',
      discount: '25%',
      savings: '$200',
      category: 'flagship',
      store: 'Best Buy',
      expires: '2025-01-19',
      timeLeft: '1 day',
      couponCode: 'FLASH25',
      description: 'Samsung\'s latest flagship with incredible camera capabilities and performance.',
      features: ['50MP Triple Camera', 'Snapdragon 8 Gen 2', '256GB Storage'],
      affiliateUrl: 'https://bestbuy.com'
    },
    {
      id: 3,
      title: 'Google Pixel 7a - Best Value',
      phone: 'Google Pixel 7a',
      image: 'https://images.pexels.com/photos/18525565/pexels-photo-18525565.jpeg?auto=compress&cs=tinysrgb&w=400',
      originalPrice: '$499',
      salePrice: '$349',
      discount: '30%',
      savings: '$150',
      category: 'budget',
      store: 'Google Store',
      expires: '2025-01-22',
      timeLeft: '4 days',
      couponCode: 'PIXEL30',
      description: 'Pure Android experience with excellent camera performance at an unbeatable price.',
      features: ['Google Tensor G2', '64MP Camera', 'Pure Android'],
      affiliateUrl: 'https://store.google.com'
    },
    {
      id: 4,
      title: 'OnePlus 11 - Gaming Beast',
      phone: 'OnePlus 11',
      image: 'https://images.pexels.com/photos/18525563/pexels-photo-18525563.jpeg?auto=compress&cs=tinysrgb&w=400',
      originalPrice: '$699',
      salePrice: '$559',
      discount: '20%',
      savings: '$140',
      category: 'gaming',
      store: 'OnePlus',
      expires: '2025-01-18',
      timeLeft: '6 hours',
      couponCode: 'GAME20',
      description: 'Ultimate gaming performance with 100W fast charging and flagship specs.',
      features: ['Snapdragon 8 Gen 2', '100W Fast Charge', '16GB RAM'],
      affiliateUrl: 'https://oneplus.com'
    },
    {
      id: 5,
      title: 'Samsung Galaxy A54 - Mid-Range Winner',
      phone: 'Samsung Galaxy A54',
      image: 'https://images.pexels.com/photos/18525572/pexels-photo-18525572.jpeg?auto=compress&cs=tinysrgb&w=400',
      originalPrice: '$449',
      salePrice: '$314',
      discount: '30%',
      savings: '$135',
      category: 'budget',
      store: 'Amazon',
      expires: '2025-01-25',
      timeLeft: '7 days',
      couponCode: 'MID30',
      description: 'Perfect balance of features and price with flagship-level camera performance.',
      features: ['50MP OIS Camera', 'Super AMOLED Display', '5000mAh Battery'],
      affiliateUrl: 'https://amazon.com'
    },
    {
      id: 6,
      title: 'Nothing Phone 2 - Unique Design',
      phone: 'Nothing Phone 2',
      image: 'https://images.pexels.com/photos/18525575/pexels-photo-18525575.jpeg?auto=compress&cs=tinysrgb&w=400',
      originalPrice: '$599',
      salePrice: '$479',
      discount: '20%',
      savings: '$120',
      category: 'gaming',
      store: 'Nothing',
      expires: '2025-01-21',
      timeLeft: '3 days',
      couponCode: 'GLYPH20',
      description: 'Stand out with unique Glyph interface and flagship performance.',
      features: ['Glyph Interface', 'Snapdragon 8+ Gen 1', '12GB RAM'],
      affiliateUrl: 'https://nothing.tech'
    }
  ];

  const categories = [
    { name: 'all', label: 'All Deals', count: 15 },
    { name: 'flagship', label: 'Flagship', count: 6 },
    { name: 'budget', label: 'Budget', count: 7 },
    { name: 'gaming', label: 'Gaming', count: 2 }
  ];

  const hotDeals = deals.filter(deal => parseInt(deal.discount) >= 25);
  const filteredDeals = selectedCategory === 'all' ? deals : deals.filter(deal => deal.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">🔥 Hot Deals & Offers</h1>
          <p className="text-lg text-gray-600">Limited time offers and exclusive coupon codes</p>
        </div>

        {/* Content Ad */}
        <AdBanner position="content" className="mb-8" />

        {/* Hot Deals Banner */}
        <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-xl p-6 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">⚡ Flash Deals</h2>
              <p className="text-lg">Up to 30% off on selected smartphones</p>
            </div>
            <div className="text-right">
              <div className="text-sm opacity-90">Ending Soon</div>
              <div className="text-2xl font-bold">{hotDeals.length} Deals</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Category Filter */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
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

            {/* Deals Grid */}
            <div className="space-y-6">
              {filteredDeals.map((deal) => (
                <div key={deal.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="md:flex">
                    <div className="md:w-1/3 relative">
                      <img
                        src={deal.image}
                        alt={deal.phone}
                        className="w-full h-64 md:h-full object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                        {deal.discount} OFF
                      </div>
                      {parseInt(deal.discount) >= 25 && (
                        <div className="absolute top-4 right-4 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center">
                          <Fire className="w-3 h-3 mr-1" />
                          HOT
                        </div>
                      )}
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-2xl font-bold text-gray-900">{deal.title}</h3>
                        <div className="text-right">
                          <div className="text-sm text-gray-500 line-through">{deal.originalPrice}</div>
                          <div className="text-2xl font-bold text-green-600">{deal.salePrice}</div>
                        </div>
                      </div>

                      <p className="text-gray-600 mb-4">{deal.description}</p>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        {deal.features.map((feature, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                            <span className="text-sm text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-2">
                            <Clock className="w-4 h-4 text-red-500" />
                            <span className="text-sm text-red-600 font-medium">{deal.timeLeft} left</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Tag className="w-4 h-4 text-blue-600" />
                            <span className="text-sm text-blue-600 font-medium">Code: {deal.couponCode}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-gray-500">Save</div>
                          <div className="text-lg font-bold text-green-600">{deal.savings}</div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-4">
                        <a
                          href={deal.affiliateUrl}
                          className="flex-1 bg-blue-600 text-white text-center py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                        >
                          Get Deal at {deal.store}
                        </a>
                        <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-800">
                          <ExternalLink className="w-4 h-4" />
                          <span>Compare</span>
                        </button>
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
              <h3 className="text-lg font-bold text-gray-900 mb-4">Deal Alerts</h3>
              <div className="space-y-3">
                <div className="p-3 bg-red-50 rounded-lg">
                  <div className="flex items-center space-x-2 mb-1">
                    <Fire className="w-4 h-4 text-red-500" />
                    <span className="text-sm font-medium text-red-700">Expiring Soon</span>
                  </div>
                  <p className="text-sm text-gray-600">3 deals ending in less than 24 hours</p>
                </div>
                <div className="p-3 bg-green-50 rounded-lg">
                  <div className="flex items-center space-x-2 mb-1">
                    <Percent className="w-4 h-4 text-green-500" />
                    <span className="text-sm font-medium text-green-700">Best Savings</span>
                  </div>
                  <p className="text-sm text-gray-600">Up to 30% off flagship phones</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Coupon Codes</h3>
              <div className="space-y-3">
                <div className="p-3 border-2 border-dashed border-blue-300 rounded-lg">
                  <div className="text-lg font-bold text-blue-600">SAVE25NOW</div>
                  <div className="text-sm text-gray-600">25% off iPhone 14 Pro</div>
                </div>
                <div className="p-3 border-2 border-dashed border-green-300 rounded-lg">
                  <div className="text-lg font-bold text-green-600">PIXEL30</div>
                  <div className="text-sm text-gray-600">30% off Google Pixel 7a</div>
                </div>
                <div className="p-3 border-2 border-dashed border-purple-300 rounded-lg">
                  <div className="text-lg font-bold text-purple-600">GAME20</div>
                  <div className="text-sm text-gray-600">20% off Gaming Phones</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deals;