import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black/90 mt-16 px-4 md:px-12 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-gray-400 text-sm">
          <div>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Audio Description</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Gift Cards</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Media Center</a></li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Investor Relations</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Jobs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Use</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Legal Notices</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookie Preferences</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Corporate Information</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Account</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Redeem Gift Cards</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Buy Gift Cards</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Ways to Watch</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-sm">
            © 2025 Netflix Clone. This is a demonstration project built by following a tutorial.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;