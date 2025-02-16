function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-3">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  Web Design
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Hosting
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">About</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  Company
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Team
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Serve Sense</h3>
            <p className="text-sm opacity-75">
              At ServeSense, we empower users to share feedback, helping
              businesses improve while guiding customers to the best services.
              By fostering trust and transparency, we create a more reliable
              service industry.
            </p>
          </div>
        </div>
        <div className="flex justify-center space-x-4 mt-8">
          <a href="#" className="text-gray-400 hover:text-white text-xl">
            <i className="icon ion-social-facebook"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white text-xl">
            <i className="icon ion-social-twitter"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white text-xl">
            <i className="icon ion-social-snapchat"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white text-xl">
            <i className="icon ion-social-instagram"></i>
          </a>
        </div>
        <p className="text-center text-sm opacity-50 mt-6">
          Serve Sense © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
