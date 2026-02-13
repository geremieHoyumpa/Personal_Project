import React from 'react';

export default function Footer(){
  return (
    <div>
    {/* <!-- Footer --> */}
    <footer className="bg-white mt-12 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="text-gray-600 text-sm mb-4 md:mb-0">
                    © 2026 Profit Calculator. All rights reserved.
                </div>
                <div className="flex space-x-6 text-sm">
                    <a href="#" className="text-gray-600 hover:text-gray-900 transition">About</a>
                    <a href="#" className="text-gray-600 hover:text-gray-900 transition">Help</a>
                    <a href="#" className="text-gray-600 hover:text-gray-900 transition">Privacy</a>
                    <a href="#" className="text-gray-600 hover:text-gray-900 transition">Terms</a>
                </div>
            </div>
        </div>
    </footer>
    </div>
  );
}