import React from 'react';
import { Clock, User, ArrowRight, Tag } from 'lucide-react';
import AdBanner from '../components/AdBanner';

const BuyingGuides = () => {
  const guides = [
    {
      id: 1,
      title: 'Best Budget Smartphones Under $300 in 2025',
      excerpt: 'Discover the top affordable smartphones that offer excellent value without breaking the bank.',
      image: 'https://images.pexels.com/photos/18525577/pexels-photo-18525577.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Sarah Johnson',
      date: '2025-01-15',
      readTime: '8 min read',
      category: 'Budget',
      tags: ['Budget', 'Android', 'Value']
    },
    {
      id: 2,
      title: 'Gaming Smartphones: Ultimate Performance Guide',
      excerpt: 'Everything you need to know about choosing the perfect gaming smartphone for mobile gaming.',
      image: 'https://images.pexels.com/photos/18525573/pexels-photo-18525573.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Mike Chen',
      date: '2025-01-12',
      readTime: '12 min read',
      category: 'Gaming',
      tags: ['Gaming', 'Performance', 'Android']
    },
    {
      id: 3,
      title: 'Camera Phone Buying Guide: For Photography Enthusiasts',
      excerpt: 'Compare the best camera phones and learn what features matter most for mobile photography.',
      image: 'https://images.pexels.com/photos/18525570/pexels-photo-18525570.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Emma Davis',
      date: '2025-01-10',
      readTime: '10 min read',
      category: 'Photography',
      tags: ['Camera', 'Photography', 'Flagship']
    },
    {
      id: 4,
      title: 'iPhone vs Samsung: Which Should You Choose?',
      excerpt: 'A comprehensive comparison of iOS and Android flagship phones to help you decide.',
      image: 'https://images.pexels.com/photos/18525571/pexels-photo-18525571.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Alex Rodriguez',
      date: '2025-01-08',
      readTime: '15 min read',
      category: 'Comparison',
      tags: ['iPhone', 'Samsung', 'Comparison']
    },
    {
      id: 5,
      title: 'Senior-Friendly Smartphones: Easy to Use Options',
      excerpt: 'Find the best smartphones designed for seniors with large screens and simple interfaces.',
      image: 'https://images.pexels.com/photos/18525576/pexels-photo-18525576.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Lisa Thompson',
      date: '2025-01-05',
      readTime: '6 min read',
      category: 'Seniors',
      tags: ['Senior', 'Accessibility', 'Easy Use']
    },
    {
      id: 6,
      title: 'Flagship Smartphones 2025: Premium Features Guide',
      excerpt: 'Explore the latest flagship phones and their premium features worth the investment.',
      image: 'https://images.pexels.com/photos/18525578/pexels-photo-18525578.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'David Kim',
      date: '2025-01-03',
      readTime: '14 min read',
      category: 'Flagship',
      tags: ['Flagship', 'Premium', 'Features']
    }
  ];

  const categories = [
    { name: 'All Guides', count: 25 },
    { name: 'Budget', count: 8 },
    { name: 'Gaming', count: 5 },
    { name: 'Photography', count: 6 },
    { name: 'Flagship', count: 4 },
    { name: 'Seniors', count: 2 }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Buying Guides</h1>
          <p className="text-lg text-gray-600">Expert advice to help you choose the perfect smartphone</p>
        </div>

        {/* Content Ad */}
        <AdBanner position="content" className="mb-8" />

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Featured Guide */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={guides[0].image}
                    alt={guides[0].title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center space-x-2 mb-4">
                    <Tag className="w-4 h-4 text-blue-600" />
                    <span className="text-sm font-medium text-blue-600">Featured Guide</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{guides[0].title}</h2>
                  <p className="text-gray-600 mb-4">{guides[0].excerpt}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{guides[0].author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{guides[0].readTime}</span>
                    </div>
                  </div>
                  <button className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                    Read Guide
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            </div>

            {/* In-Content Ad */}
            <AdBanner position="content" className="mb-8" />

            {/* All Guides */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {guides.slice(1).map((guide) => (
                <div key={guide.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <img
                    src={guide.image}
                    alt={guide.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="px-2 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded-full">
                        {guide.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer">
                      {guide.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{guide.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{guide.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{guide.readTime}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-1">
                        {guide.tags.map((tag, index) => (
                          <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <button className="text-blue-600 hover:text-blue-700 font-medium">
                        Read More
                      </button>
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
              <h3 className="text-lg font-bold text-gray-900 mb-4">Guide Categories</h3>
              <div className="space-y-2">
                {categories.map((category, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors">
                    <span className="font-medium text-gray-900">{category.name}</span>
                    <span className="text-sm text-gray-500">{category.count}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Tips</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-1">Battery Life</h4>
                  <p className="text-sm text-gray-600">Look for phones with 4000mAh+ batteries for all-day usage.</p>
                </div>
                <div className="border-l-4 border-green-600 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-1">Storage</h4>
                  <p className="text-sm text-gray-600">128GB is the minimum for most users, 256GB for heavy users.</p>
                </div>
                <div className="border-l-4 border-purple-600 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-1">Updates</h4>
                  <p className="text-sm text-gray-600">Choose brands that provide 3+ years of software updates.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyingGuides;