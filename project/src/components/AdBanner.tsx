import React from 'react';

interface AdBannerProps {
  position: 'sidebar' | 'content' | 'mobile';
  className?: string;
}

const AdBanner: React.FC<AdBannerProps> = ({ position, className = '' }) => {
  const getAdContent = () => {
    switch (position) {
      case 'sidebar':
        return {
          size: '300x250',
          text: '📱 Sidebar Ad Space | 300x250 | Premium Position',
          gradient: 'from-green-500 to-blue-500'
        };
      case 'content':
        return {
          size: '728x90',
          text: '🎯 In-Content Ad | 728x90 Desktop | 320x50 Mobile',
          gradient: 'from-purple-500 to-pink-500'
        };
      case 'mobile':
        return {
          size: '320x50',
          text: '📲 Mobile Ad | 320x50',
          gradient: 'from-yellow-500 to-orange-500'
        };
      default:
        return {
          size: '300x250',
          text: 'Ad Space',
          gradient: 'from-gray-500 to-gray-600'
        };
    }
  };

  const adContent = getAdContent();

  return (
    <div className={`bg-gradient-to-r ${adContent.gradient} text-white p-4 rounded-lg text-center ${className}`}>
      <div className="text-sm font-medium">
        {adContent.text}
      </div>
      <div className="text-xs mt-1 opacity-75">
        {adContent.size}
      </div>
    </div>
  );
};

export default AdBanner;