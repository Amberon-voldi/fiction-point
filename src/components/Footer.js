import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-center text-center md:text-left">
                    {/* Quick Links */}
                    <div className="w-full md:w-1/3 lg:w-1/4 p-5">
                        <h3 className="font-bold mb-4">Quick Links</h3>
                        <ul>
                            <li><a href="/about" className="hover:text-gray-300">About Us</a></li>
                            <li><a href="/services" className="hover:text-gray-300">Services</a></li>
                            <li><a href="/blog" className="hover:text-gray-300">Blog</a></li>
                            <li><a href="/contact" className="hover:text-gray-300">Contact</a></li>
                        </ul>
                    </div>
                    {/* Social Media */}
                    <div className="w-full md:w-1/3 lg:w-1/4 p-5">
                        <h3 className="font-bold mb-4">Follow Us</h3>
                        <ul>
                            <li><a href="https://facebook.com" className="hover:text-gray-300">Facebook</a></li>
                            <li><a href="https://twitter.com" className="hover:text-gray-300">Twitter</a></li>
                            <li><a href="https://instagram.com" className="hover:text-gray-300">Instagram</a></li>
                            <li><a href="https://linkedin.com" className="hover:text-gray-300">LinkedIn</a></li>
                        </ul>
                    </div>
                    {/* Contact or Newsletter */}
                    <div className="w-full md:w-1/3 lg:w-1/4 p-5">
                        <h3 className="font-bold mb-4">Stay Updated</h3>
                        <p>Sign up for our newsletter to get the latest news and updates.</p>
                        <form className="mt-4">
                            <input type="email" placeholder="Enter your email" className="p-2 rounded bg-gray-700 border-2 border-gray-700 focus:border-blue-500"/>
                            <button type="submit" className="p-2 ml-2 rounded bg-blue-500 hover:bg-blue-600">Subscribe</button>
                        </form>
                    </div>
                </div>
                <div className="text-center pt-8 border-t border-gray-700">
                    <p>&copy; {new Date().getFullYear()} {process.env.NEXT_PUBLIC_BRAND_NAME}. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;