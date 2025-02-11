import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { User, Settings, Github, LayoutDashboard } from 'lucide-react';

export default function Home() {
  const { user } = useAuth();
  const fullName = user?.user_metadata?.full_name || 'User';

  const quickLinks = [
    { name: 'Dashboard', icon: LayoutDashboard, href: '/dashboard' },
    { name: 'Profile', icon: User, href: '/profile' },
    { name: 'Settings', icon: Settings, href: '/settings' },
  ];

  return (
    <div>
      {/* Welcome Section */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <h2 className="text-2xl font-bold text-gray-900">
          Welcome back, {fullName}!
        </h2>
        <p className="mt-1 text-gray-600">
          Here's what's happening with your account today.
        </p>
      </div>

      {/* Repository Showcase */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Featured Repository</h3>
            <p className="mt-1 text-gray-600">Check out our open-source project</p>
          </div>
          <Link
            to="https://github.com/ASHOKDUPATI09/Techplement"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            <Github className="h-5 w-5 mr-2" />
            View Repository
          </Link>
        </div>
        <div className="mt-4 p-4 bg-gray-50 rounded-md">
          <h4 className="font-medium text-gray-900">Techplement</h4>
          <p className="mt-1 text-gray-600">
            A modern authentication system with React, TypeScript, and Supabase.
            Features include user management, profile updates, and secure storage.
          </p>
          <div className="mt-4 flex items-center space-x-4">
            <div className="flex items-center text-gray-500">
              <svg className="h-5 w-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .25a.75.75 0 0 1 .673.418l3.058 6.197 6.839.994a.75.75 0 0 1 .415 1.279l-4.948 4.823 1.168 6.811a.75.75 0 0 1-1.088.791L12 18.347l-6.117 3.216a.75.75 0 0 1-1.088-.79l1.168-6.812-4.948-4.823a.75.75 0 0 1 .416-1.28l6.838-.993L11.327.668A.75.75 0 0 1 12 .25z" />
              </svg>
              <span>Star</span>
            </div>
            <div className="flex items-center text-gray-500">
              <svg className="h-5 w-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.75 19.25a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0ZM12 .25a.75.75 0 0 1 .673.418l3.058 6.197 6.839.994a.75.75 0 0 1 .415 1.279l-4.948 4.823 1.168 6.811a.75.75 0 0 1-1.088.791L12 18.347l-6.117 3.216a.75.75 0 0 1-1.088-.79l1.168-6.812-4.948-4.823a.75.75 0 0 1 .416-1.28l6.838-.993L11.327.668A.75.75 0 0 1 12 .25Z" />
              </svg>
              <span>Fork</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {quickLinks.map((link) => {
          const Icon = link.icon;
          return (
            <Link
              key={link.name}
              to={link.href}
              className="bg-white overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-5">
                    <h3 className="text-lg font-medium text-gray-900">
                      {link.name}
                    </h3>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}