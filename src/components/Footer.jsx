export default function Footer() {
  return (
    <footer className="bg-dark-navy text-white pt-16 pb-8 border-t border-white/10">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img src="/logo.svg" alt="Al Mansoori & Partners Logo" className="w-14 h-14" />
              <h2 className="font-heading text-2xl font-semibold tracking-wide text-white leading-none">
                AL MANSOORI <br /> <span className="text-luxury-gold text-sm tracking-widest uppercase mt-1 block">& Partners</span>
              </h2>
            </div>
            <p className="text-light-gray/60 text-sm leading-relaxed mb-6">
              A premier law firm in Dubai providing world-class legal counsel to sophisticated clients across the globe.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-luxury-gold font-heading text-lg mb-6">Firm</h4>
            <ul className="space-y-3 text-sm text-light-gray/70">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#experience" className="hover:text-white transition-colors">Our Team</a></li>
              <li><a href="#results" className="hover:text-white transition-colors">Case Results</a></li>
              <li><a href="#insights" className="hover:text-white transition-colors">Publications</a></li>
            </ul>
          </div>
          
          {/* Practice Areas */}
          <div>
            <h4 className="text-luxury-gold font-heading text-lg mb-6">Practices</h4>
            <ul className="space-y-3 text-sm text-light-gray/70">
              <li><a href="#" className="hover:text-white transition-colors">Corporate Law</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Commercial Law</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Real Estate</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Arbitration</a></li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h4 className="text-luxury-gold font-heading text-lg mb-6">Legal</h4>
            <ul className="space-y-3 text-sm text-light-gray/70">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Disclaimer</a></li>
            </ul>
          </div>
          
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-light-gray/50">
          <p>&copy; {new Date().getFullYear()} Al Mansoori & Partners. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-6">
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
