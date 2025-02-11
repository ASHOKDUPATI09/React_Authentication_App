import React, { useState } from 'react';
import { User } from 'lucide-react';

interface AvatarProps {
  url: string | null | undefined;
  alt?: string;
  size?: 'sm' | 'md' | 'lg';
  fallbackInitials?: string;
}

export default function Avatar({ url, alt = '', size = 'md', fallbackInitials }: AvatarProps) {
  const [imageError, setImageError] = useState(false);

  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-12 w-12',
    lg: 'h-24 w-24'
  };

  const iconSizes = {
    sm: 'h-4 w-4',
    md: 'h-6 w-6',
    lg: 'h-12 w-12'
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const renderFallback = () => {
    if (fallbackInitials && !imageError) {
      return (
        <span className="text-blue-600 font-medium">
          {getInitials(fallbackInitials)}
        </span>
      );
    }
    return <User className={`${iconSizes[size]} text-blue-600`} />;
  };

  return (
    <div className={`${sizeClasses[size]} rounded-full overflow-hidden bg-blue-100 flex items-center justify-center`}>
      {url && !imageError ? (
        <img
          src={url}
          alt={alt}
          className="h-full w-full object-cover"
          onError={() => setImageError(true)}
        />
      ) : renderFallback()}
    </div>
  );
}