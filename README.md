# Modern React Authentication App

A production-ready authentication system built with React, TypeScript, Tailwind CSS, and Supabase. Features a modern UI, secure authentication, and profile management capabilities.

![App Screenshot](https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000)

## Features

- 🔐 Secure Email & Password Authentication
- 👤 User Profile Management
- 🖼️ Profile Picture Upload
- 🎨 Modern UI with Tailwind CSS
- 📱 Responsive Design
- ⚡ Fast Development with Vite
- 🔒 Row Level Security with Supabase
- 🌐 Real-time Database Updates

## Tech Stack

- **Frontend Framework**: React with TypeScript
- **Styling**: Tailwind CSS
- **Backend/Database**: Supabase
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Notifications**: React Hot Toast
- **Routing**: React Router DOM

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Supabase account

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd <your-repo-name>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory:
   ```bash
   cp .env.example .env
   ```

4. Set up your Supabase project:
   - Create a new project in Supabase
   - Copy your project URL and anon key
   - Update the `.env` file with your Supabase credentials

5. Set up the Supabase storage:
   - Create a new bucket named 'avatars'
   - Make it public
   - The required policies will be applied through migrations

6. Run the development server:
   ```bash
   npm run dev
   ```

## Project Structure

```
src/
├── components/     # Reusable UI components
├── contexts/       # React contexts (Auth)
├── lib/           # Utility functions and configurations
├── pages/         # Application pages/routes
└── main.tsx       # Application entry point

supabase/
└── migrations/    # Database migrations
```

## Features in Detail

### Authentication
- Email & password sign up/sign in
- Protected routes
- Automatic session management

### Profile Management
- Update profile information
- Upload and update profile pictures
- Real-time updates

### Security
- Row Level Security (RLS) policies
- Secure file uploads
- Protected API endpoints

## Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy to your preferred hosting platform (Netlify, Vercel, etc.)

3. Set up environment variables on your hosting platform:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Supabase](https://supabase.io/) for the backend infrastructure
- [Tailwind CSS](https://tailwindcss.com/) for the styling system
- [Lucide React](https://lucide.dev/) for the beautiful icons#
