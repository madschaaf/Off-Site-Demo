import { Link } from 'react-router';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HeroProps {
  backgroundImage: string;
}

export function MainContent({ backgroundImage }: HeroProps) {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src={backgroundImage}
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl mb-6">
          Welcome to Our Platform
        </h1>
        <p className="text-xl sm:text-2xl mb-8 text-gray-200">
          Discover amazing solutions that transform your business and drive success
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
          <Link
            to="/page1"
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-center"
          >
            Page 1
          </Link>
          <Link
            to="/page2"
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-center"
          >
            Page 2
          </Link>
          <Link
            to="/usecase"
            className="px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-center"
          >
            Start Activity
          </Link>
        </div>
      </div>
    </div>
  );
}
