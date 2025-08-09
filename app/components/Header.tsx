import Link from "next/link";
import React from 'react';

interface HeaderProps {
  hideNavLinks?: boolean;
}

function Header({ hideNavLinks = false }: HeaderProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-['Pacifico'] text-blue-600 dark:text-amber-600">
            English2Deutsch
          </Link>
        </div>
        {!hideNavLinks && (
          <div className="flex items-center space-x-4" id="nav-links">
            <Link href="/lessons">
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-lg font-medium transition-colors whitespace-nowrap cursor-pointer">
                Get Started
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
