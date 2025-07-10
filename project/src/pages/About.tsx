import React from 'react';
import { Users, Award, Target, Heart } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Editor-in-Chief',
      image: 'https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Tech journalist with 10+ years experience covering mobile technology and consumer electronics.'
    },
    {
      name: 'Mike Chen',
      role: 'Senior Reviewer',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Mobile enthusiast specializing in performance testing and camera reviews.'
    },
    {
      name: 'Emma Davis',
      role: 'Photography Expert',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Professional photographer focusing on smartphone camera capabilities and imaging technology.'
    },
    {
      name: 'Alex Rodriguez',
      role: 'Tech Analyst',
      image: 'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Industry analyst tracking smartphone trends and emerging technologies.'
    }
  ];

  const stats = [
    { label: 'Reviews Published', value: '500+' },
    { label: 'Monthly Readers', value: '2M+' },
    { label: 'Years of Experience', value: '8+' },
    { label: 'Happy Customers', value: '50K+' }
  ];

  const values = [
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: 'Honest Reviews',
      description: 'We provide unbiased, thorough reviews based on real-world testing and usage.'
    },
    {
      icon: <Award className="w-8 h-8 text-green-600" />,
      title: 'Expert Knowledge',
      description: 'Our team consists of tech experts with years of experience in mobile technology.'
    },
    {
      icon: <Heart className="w-8 h-8 text-red-600" />,
      title: 'Community First',
      description: 'We prioritize our readers\' needs and provide valuable insights for better decisions.'
    },
    {
      icon: <Users className="w-8 h-8 text-purple-600" />,
      title: 'Trusted Source',
      description: 'Millions of readers trust our recommendations and buying guides every month.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About PhonePulse</h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Your trusted source for smartphone reviews, buying guides, and tech insights since 2017
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-6">
              At PhonePulse, we believe that choosing the right smartphone shouldn't be overwhelming. 
              Our mission is to provide clear, honest, and comprehensive reviews that help you make 
              informed decisions about your next device.
            </p>
            <p className="text-lg text-gray-600">
              We test every phone thoroughly, compare features that matter most, and present our 
              findings in an easy-to-understand format. Whether you're looking for the latest flagship 
              or a budget-friendly option, we're here to guide you.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-xl mb-8">
            Have questions about our reviews or suggestions for phones to test?
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;