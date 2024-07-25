import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-8 w-full">
            <div className="container mx-auto px-4 flex flex-wrap justify-between  w-full">
                {/* Branding and Description */}
                <div className="w-full lg:w-1/4 mb-6 lg:mb-0">
                    <h2 className="text-xl font-bold">{process.env.NEXT_PUBLIC_BRAND_NAME}</h2>
                    <p className="mt-2">Your go-to place for all things special. Join us on our journey to explore, discover, and share.</p>
                </div>

                {/* Links */}
                <div className="w-full lg:w-3/4 flex flex-wrap">
                    <div className="w-1/2 md:w-1/4 lg:w-1/6 mb-6">
                        <h3 className="font-bold mb-2">Legal</h3>
                        <ul>
                            <li><a href="/dmca" className="hover:text-gray-300">DMCA</a></li>
                            <li><a href="/terms" className="hover:text-gray-300">Terms</a></li>
                            <li><a href="/privacy" className="hover:text-gray-300">Privacy</a></li>
                        </ul>
                    </div>
                    <div className="w-1/2 md:w-1/4 lg:w-1/6 mb-6">
                        <h3 className="font-bold mb-2">Company</h3>
                        <ul>
                            <li><a href="/about" className="hover:text-gray-300">About Us</a></li>
                            <li><a href="/faq" className="hover:text-gray-300">FAQ</a></li>
                            <li><a href="/credits" className="hover:text-gray-300">Credits</a></li>
                        </ul>
                    </div>
                    <div className="w-1/2 md:w-1/4 lg:w-1/6 mb-6">
                        <h3 className="font-bold mb-2">Support</h3>
                        <ul>
                            <li><a href="/contact" className="hover:text-gray-300">Contact Us</a></li>
                            <li><a href="/donate" className="hover:text-gray-300">Donate</a></li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="w-full text-center pt-8 border-t border-gray-700">
                    <p>&copy; {new Date().getFullYear()} {process.env.NEXT_PUBLIC_BRAND_NAME}. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;