const currentYear = new Date().getFullYear();

export const Footer = () => (
  <footer className="bg-[#1e293b] text-gray-200 pt-10 pb-4 mt-12">
    <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* About */}
      <div>
        <h3 className="text-lg font-bold mb-3">CarRantel</h3>
        <p className="text-sm mb-2">
          Premium car rental service offering a wide range of luxury and economy vehicles for every journey.
        </p>
      </div>
      {/* Quick Links */}
      <div>
        <h3 className="text-lg font-bold mb-3">Quick Links</h3>
        <ul className="space-y-2 text-sm">
          <li><a href="/" className="hover:text-blue-400 transition-colors">Home</a></li>
          <li><a href="/cars" className="hover:text-blue-400 transition-colors">Cars</a></li>
          <li><a href="/about" className="hover:text-blue-400 transition-colors">About</a></li>
          <li><a href="/contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
        </ul>
      </div>
      {/* Contact */}
      <div>
        <h3 className="text-lg font-bold mb-3">Contact</h3>
        <ul className="text-sm space-y-2">
          <li>Email: info@carrantel.com</li>
          <li>Phone: +1 234 567 890</li>
          <li>Location: 123 Main St, City, Country</li>
        </ul>
      </div>
    </div>
    <div className="border-t border-gray-700 mt-8 pt-4 text-center text-xs text-gray-400">
      &copy; {currentYear} CarRantel. All rights reserved.
    </div>
  </footer>
);
