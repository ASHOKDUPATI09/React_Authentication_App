import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { LogOut, Home, Settings, Github, Menu, X } from 'lucide-react';
import { toast } from 'react-hot-toast';
import Avatar from './Avatar';
import { supabase } from '../lib/supabase';

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, signOut } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

  useEffect(() => {
    if (user?.id) {
      getProfile();
    }
  }, [user]);

  const getProfile = async () => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('avatar_url')
        .eq('id', user?.id)
        .single();

      if (error) throw error;

      if (data?.avatar_url) {
        const { data: storageData, error: storageError } = await supabase
          .storage
          .from('avatars')
          .createSignedUrl(data.avatar_url.split('/').pop()!, 60);
          
        if (!storageError && storageData) {
          setAvatarUrl(storageData.signedUrl);
        }
      }
    } catch (error) {
      console.error('Error loading avatar:', error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      toast.success('Signed out successfully');
      navigate('/login');
    } catch (error) {
      toast.error('Error signing out');
    }
  };

  const menuItems = [
    {
      name: 'Repository',
      icon: Github,
      href: 'https://github.com/ASHOKDUPATI09',
      external: true
    },
    {
      name: 'Settings',
      icon: Settings,
      href: '/profile',
      external: false
    }
  ];

  return (
    <header className="bg-white shadow-sm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Home className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">ASHOKDUPATI09</span>
            </Link>
          </div>

          {user && !isAuthPage ? (
            <>
              {/* Desktop Menu */}
              <div className="hidden md:flex items-center space-x-4">
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                  >
                    <item.icon className="h-5 w-5" />
                    <span>{item.name}</span>
                  </Link>
                ))}
                <div className="flex items-center space-x-2">
                  <Avatar 
                    url={avatarUrl}
                    alt={user.user_metadata?.full_name}
                    size="sm"
                    fallbackInitials={user.user_metadata?.full_name}
                  />
                  <span className="text-sm font-medium text-gray-700">
                    {user.user_metadata?.full_name}
                  </span>
                </div>
                <button
                  onClick={handleSignOut}
                  className="flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium text-red-600 hover:text-red-900 hover:bg-red-50"
                >
                  <LogOut className="h-5 w-5" />
                  <span>Sign Out</span>
                </button>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden flex items-center">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                >
                  {isMenuOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </button>
              </div>
            </>
          ) : null}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && user && !isAuthPage && (
        <div className="md:hidden absolute top-16 inset-x-0 z-50 bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 py-2 space-y-1">
            <div className="flex items-center space-x-2 px-3 py-2">
              <Avatar 
                url={avatarUrl}
                alt={user.user_metadata?.full_name}
                size="sm"
                fallbackInitials={user.user_metadata?.full_name}
              />
              <span className="text-sm font-medium text-gray-700">
                {user.user_metadata?.full_name}
              </span>
            </div>
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.name}</span>
              </Link>
            ))}
            <button
              onClick={() => {
                handleSignOut();
                setIsMenuOpen(false);
              }}
              className="flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium text-red-600 hover:text-red-900 hover:bg-red-50 w-full"
            >
              <LogOut className="h-5 w-5" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}