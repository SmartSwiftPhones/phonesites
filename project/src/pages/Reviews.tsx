import React, { useState } from 'react';
import { Star, Filter, Search, ExternalLink } from 'lucide-react';
import AdBanner from '../components/AdBanner';

const Reviews = () => {
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const reviews = [
    {
      id: 1,
      name: 'iPhone 15 Pro Max',
      brand: 'Apple',
      category: 'flagship',
      image: 'https://images.pexels.com/photos/18525574/pexels-photo-18525574.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.8,
      price: '$1,199',
      releaseDate: '2023-09-15',
      pros: ['Excellent camera quality', 'Premium build', 'Great performance'],
      cons: ['Expensive', 'No USB-C fast charging'],
      specs: {
        screen: '6.7" Super Retina XDR',
        processor: 'A17 Pro',
        camera: '48MP Triple',
        battery: '4441 mAh'
      },
      affiliateLinks: [
        { store: 'Amazon', url: 'https://amazon.com', price: '$1,199' },
        { store: 'Best Buy', url: 'https://bestbuy.com', price: '$1,199' },
        { store: 'Apple Store', url: 'https://apple.com', price: '$1,199' }
      ]
    },
    {
      id: 2,
      name: 'Samsung Galaxy S24 Ultra',
      brand: 'Samsung',
      category: 'flagship',
      image: 'https://images.pexels.com/photos/18525569/pexels-photo-18525569.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.7,
      price: '$1,299',
      releaseDate: '2024-01-17',
      pros: ['S Pen functionality', 'Excellent display', 'Great cameras'],
      cons: ['Battery life could be better', 'Expensive'],
      specs: {
        screen: '6.8" Dynamic AMOLED',
        processor: 'Snapdragon 8 Gen 3',
        camera: '200MP Quad',
        battery: '5000 mAh'
      },
      affiliateLinks: [
        { store: 'Amazon', url: 'https://amazon.com', price: '$1,299' },
        { store: 'Samsung', url: 'https://samsung.com', price: '$1,299' },
        { store: 'Best Buy', url: 'https://bestbuy.com', price: '$1,299' }
      ]
    },
    {
      id: 3,
      name: 'Google Pixel 8 Pro',
      brand: 'Google',
      category: 'flagship',
      image: 'https://images.pexels.com/photos/18525565/pexels-photo-18525565.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.6,
      price: '$999',
      releaseDate: '2023-10-04',
      pros: ['Pure Android experience', 'Great AI features', 'Excellent camera'],
      cons: ['Battery life', 'Limited availability'],
      specs: {
        screen: '6.7" LTPO OLED',
        processor: 'Tensor G3',
        camera: '50MP Triple',
        battery: '5050 mAh'
      },
      affiliateLinks: [
        { store: 'Google Store', url: 'https://store.google.com', price: '$999' },
        { store: 'Amazon', url: 'https://amazon.com', price: '$999' },
        { store: 'Best Buy', url: 'https://bestbuy.com', price: '$999' }
      ]
    },
    {
      id: 4,
      name: 'OnePlus 12',
      brand: 'OnePlus',
      category: 'flagship',
      image: 'https://images.pexels.com/photos/18525563/pexels-photo-18525563.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.5,
      price: '$799',
      releaseDate: '2024-01-23',
      pros: ['Fast charging', 'Good value', 'Clean software'],
      cons: ['No wireless charging', 'Camera could be better'],
      specs: {
        screen: '6.82" LTPO AMOLED',
        processor: 'Snapdragon 8 Gen 3',
        camera: '50MP Triple',
        battery: '5400 mAh'
      },
      affiliateLinks: [
        { store: 'OnePlus', url: 'https://oneplus.com', price: '$799' },
        { store: 'Amazon', url: 'https://amazon.com', price: '$799' }
      ]
    },
    {
      id: 5,
      name: 'Samsung Galaxy A54',
      brand: 'Samsung',
      category: 'budget',
      image: 'https://images.pexels.com/photos/18525572/pexels-photo-18525572.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.3,
      price: '$449',
      releaseDate: '2023-03-24',
      pros: ['Good cameras', 'Great display', 'Affordable'],
      cons: ['Plastic build', 'Average performance'],
      specs: {
        screen: '6.4" Super AMOLED',
        processor: 'Exynos 1380',
        camera: '50MP Triple',
        battery: '5000 mAh'
      },
      affiliateLinks: [
        { store: 'Amazon', url: 'https://amazon.com', price: '$449' },
        { store: 'Samsung', url: 'https://samsung.com', price: '$449' }
      ]
    },
    {
      id: 6,
      name: 'Nothing Phone 2',
      brand: 'Nothing',
      category: 'gaming',
      image: 'https://images.pexels.com/photos/18525575/pexels-photo-18525575.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.4,
      price: '$599',
      releaseDate: '2023-07-11',
      pros: ['Unique design', 'Good performance', 'Clean software'],
      cons: ['Limited availability', 'No wireless charging'],
      specs: {
        screen: '6.7" LTPO OLED',
        processor: 'Snapdragon 8+ Gen 1',
        camera: '50MP Dual',
        battery: '4700 mAh'
      },
      affiliateLinks: [
        { store: 'Nothing', url: 'https://nothing.tech', price: '$599' },
        { store: 'Amazon', url: 'https://amazon.com', price: '$599' }
      ]
    }
  ];

  const brands = ['all', 'Apple', 'Samsung', 'Google', 'OnePlus', 'Nothing'];
  const categories = ['all', 'flagship', 'budget', 'gaming', 'camera'];

  const filteredReviews = reviews.filter(review => {
    const brandMatch = selectedBrand === 'all' || review.brand === selectedBrand;
    const categoryMatch = selectedCategory === 'all' || review.category === selectedCategory;
    return brandMatch && categoryMatch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Smartphone Reviews</h1>
          <p className="text-lg text-gray-600">In-depth reviews and ratings for the latest smartphones</p>
        </div>

        {/* Content Ad */}
        <AdBanner position="content" className="mb-8" />

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Filters */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <div className="flex flex-wrap gap-4 items-center">
                <div className="flex items-center space-x-2">
                  <Filter className="w-5 h-5 text-gray-600" />
                  <span className="font-medium text-gray-900">Filter by:</span>
                </div>
                
                <select
                  value={selectedBrand}
                  onChange={(e) => setSelectedBrand(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {brands.map(brand => (
                    <option key={brand} value={brand}>
                      {brand === 'all' ? 'All Brands' : brand}
                    </option>
                  ))}
                </select>

                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category.charAt(0).toUpperCase() + category.slice(1)}
                    </option>
                  ))}
                </select>

                <div className="flex items-center space-x-2 ml-auto">
                  <Search className="w-5 h-5 text-gray-600" />
                  <input
                    type="text"
                    placeholder="Search reviews..."
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* Reviews Grid */}
            <div className="space-y-6">
              {filteredReviews.map((review) => (
                <div key={review.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img
                        src={review.image}
                        alt={review.name}
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <span className="text-sm font-medium text-blue-600">{review.brand}</span>
                          <h3 className="text-2xl font-bold text-gray-900">{review.name}</h3>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center">
                            <Star className="w-5 h-5 text-yellow-400 fill-current" />
                            <span className="text-lg font-semibold text-gray-900 ml-1">{review.rating}</span>
                          </div>
                          <span className="text-2xl font-bold text-blue-600">{review.price}</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                        <div className="text-center">
                          <div className="text-xs text-gray-500">Screen</div>
                          <div className="text-sm font-medium">{review.specs.screen}</div>
                        </div>
                        <div className="text-center">
                          <div className="text-xs text-gray-500">Processor</div>
                          <div className="text-sm font-medium">{review.specs.processor}</div>
                        </div>
                        <div className="text-center">
                          <div className="text-xs text-gray-500">Camera</div>
                          <div className="text-sm font-medium">{review.specs.camera}</div>
                        </div>
                        <div className="text-center">
                          <div className="text-xs text-gray-500">Battery</div>
                          <div className="text-sm font-medium">{review.specs.battery}</div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <h4 className="font-semibold text-green-600 mb-2">Pros</h4>
                          <ul className="text-sm space-y-1">
                            {review.pros.map((pro, index) => (
                              <li key={index} className="text-gray-700">• {pro}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-red-600 mb-2">Cons</h4>
                          <ul className="text-sm space-y-1">
                            {review.cons.map((con, index) => (
                              <li key={index} className="text-gray-700">• {con}</li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="border-t pt-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Buy from:</h4>
                        <div className="flex flex-wrap gap-2">
                          {review.affiliateLinks.map((link, index) => (
                            <a
                              key={index}
                              href={link.url}
                              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                            >
                              {link.store} - {link.price}
                              <ExternalLink className="w-3 h-3 ml-1" />
                            </a>
                          ))}
                        </div>
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
              <h3 className="text-lg font-bold text-gray-900 mb-4">Top Rated Phones</h3>
              <div className="space-y-3">
                {reviews.slice(0, 5).map((phone) => (
                  <div key={phone.id} className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                    <img src={phone.image} alt={phone.name} className="w-12 h-12 object-cover rounded" />
                    <div className="flex-1">
                      <div className="font-medium text-sm">{phone.name}</div>
                      <div className="flex items-center">
                        <Star className="w-3 h-3 text-yellow-400 fill-current" />
                        <span className="text-xs text-gray-600 ml-1">{phone.rating}</span>
                      </div>
                    </div>
                    <div className="text-sm font-bold text-blue-600">{phone.price}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;