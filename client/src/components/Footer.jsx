import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-red-500 text-white py-12">
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6">
                {/* Find Us Section */}
                <div>
                    <h3 className="text-lg font-bold mb-4">Find Us</h3>
                    <p className="mt-2 flex items-center space-x-2">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="text-white text-xl" />
                        <a href="https://www.google.com/maps?q=123+Preschool+Lane,+City,+State,+ZIP" target="_blank" rel="noopener noreferrer" className="hover:underline">
                            #4 Backside Maryland Hotel, Lajpat Nagar, Zirakpur, Punjab - 140603
                        </a>
                    </p>
                    <p className="mt-4 flex items-center space-x-2">
                        <FontAwesomeIcon icon={faPhoneAlt} className="text-white text-xl" />
                        <a href="tel:+9216100190" className="hover:underline">+91 921-610-0190</a>
                    </p>
                    <div className="flex items-center space-x-3 mt-4">
                        <FontAwesomeIcon icon={faEnvelope} className="text-white text-xl" />
                        <span className="text-white">contact@nextgenplayschool.com</span>
                    </div>
                </div>

                {/* Follow Us Section */}
                <div>
                    <h3 className="text-lg font-bold mb-4">Follow Us</h3>
                    <div className="mt-2 flex space-x-4 justify-center sm:justify-start">
                        <a href="https://www.facebook.com/nextgenplayschool/" aria-label="Facebook" className="hover:text-blue-500">
                            <FontAwesomeIcon icon={faFacebook} className="text-white text-2xl" />
                        </a>
                        <a href="https://twitter.com" aria-label="Twitter" className="hover:text-blue-400">
                            <FontAwesomeIcon icon={faTwitter} className="text-white text-2xl" />
                        </a>
                        <a href="https://www.instagram.com/nextgenplayschool/" aria-label="Instagram" className="hover:text-pink-500">
                            <FontAwesomeIcon icon={faInstagram} className="text-white text-2xl" />
                        </a>
                    </div>
                </div>

                {/* Quick Links Section (Modified to Three Columns) */}
                <div className="col-span-1 lg:col-span-2">
                    <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <ul className="space-y-2">
                            <li>
                                <Link to="/about" className="text-white hover:text-gray-200">About Us</Link>
                            </li>
                            <li>
                                <a href="/gallery" className="text-white hover:text-gray-200">Gallery</a>
                            </li>
                            <li>
                                <a href="/disclosures" className="text-white hover:text-gray-200">Mandatory Disclosures</a>
                            </li>
                        </ul>
                        <ul className="space-y-2">
                            <li>
                                <a href="/franchise" className="text-white hover:text-gray-200">Franchise</a>
                            </li>
                            <li>
                                <a href="/sitemap" className="text-white hover:text-gray-200">Sitemap</a>
                            </li>
                            <li>
                                <a href="/contact" className="text-white hover:text-gray-200">Contact Us</a>
                            </li>
                        </ul>
                        <ul className="space-y-2">
                            <li>
                                <a href="/blogs" className="text-white hover:text-gray-200">Blog</a>
                            </li>
                            <li>
                                <a href="/terms" className="text-white hover:text-gray-200">Terms & Conditions</a>
                            </li>
                            <li>
                                <a href="/privacy" className="text-white hover:text-gray-200">Privacy Policy</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="text-center mt-8 border-t border-white pt-4">
                <p>© 2024 Next Gen Play School. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
