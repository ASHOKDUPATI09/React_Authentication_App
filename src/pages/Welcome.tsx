import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { User } from 'lucide-react';

export default function Welcome() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const fullName = user?.user_metadata?.full_name || 'there';

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center space-y-8">
        <div>
          <div className="mx-auto h-24 w-24 flex items-center justify-center rounded-full bg-blue-100">
            <User className="h-12 w-12 text-blue-600" />
          </div>
          <h1 className="mt-6 text-4xl font-extrabold text-gray-900">
            Welcome, {fullName}!
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            We're excited to have you join us. Let's get started by exploring your dashboard.
          </p>
        </div>

        <div className="mt-8">
          <button
            onClick={() => navigate('/home')}
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Continue to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}