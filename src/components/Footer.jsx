import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-white border-t mt-24">

            <div className="w-11/12 md:w-10/12 mx-auto py-14 md:py-20">

                {/* TOP GRID */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

                    {/* Brand + Contact Info */}
                    <div>
                        <h2 className="text-2xl font-bold text-[#5D38DE] mb-3">
                            Skill Sphere
                        </h2>

                        <p className="text-sm text-gray-600 leading-6 mb-4">
                            A modern learning platform to build real-world skills with expert guidance.
                        </p>

                        <div className="text-sm text-gray-600 space-y-2">
                            <p>📍 Narayanganj, Dhaka, Bangladesh</p>
                            <p>📧 support@skillsphere.com</p>
                            <p>📞 +880 1568 621 583</p>
                        </div>
                    </div>

                  
                    <div>
                        <h3 className="font-semibold mb-4">Quick Links</h3>

                        <ul className="space-y-3 text-sm text-gray-600">
                            <li><Link href="/" className="hover:text-[#5D38DE]">Home</Link></li>
                            <li><Link href="/courses" className="hover:text-[#5D38DE]">Courses</Link></li>
                            <li><Link href="/about" className="hover:text-[#5D38DE]">About</Link></li>
                            <li><Link href="/profile" className="hover:text-[#5D38DE]">Profile</Link></li>
                        </ul>
                    </div>

                   
                    <div>
                        <h3 className="font-semibold mb-4">Follow Us</h3>

                        <ul className="space-y-3 text-sm text-gray-600">
                            <li>
                                <a href="#" className="hover:text-[#5D38DE]">Facebook</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-[#5D38DE]">Instagram</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-[#5D38DE]">Twitter</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-[#5D38DE]">LinkedIn</a>
                            </li>
                        </ul>
                    </div>

                   
                    <div>
                        <h3 className="font-semibold mb-4">Legal</h3>

                        <ul className="space-y-3 text-sm text-gray-600">
                            <li>
                                <Link href="/terms" className="hover:text-[#5D38DE]">
                                    Terms & Conditions
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy" className="hover:text-[#5D38DE]">
                                    Privacy Policy
                                </Link>
                            </li>
                        </ul>
                    </div>

                </div>

               
                <div className="my-10 h-px bg-gray-200"></div>

               
                <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-3">

                    <p>
                        © {new Date().getFullYear()} Skill Sphere. All rights reserved.
                    </p>

                    <p>
                        Built with ❤️ for learners
                    </p>

                </div>

            </div>
        </footer>
    );
};

export default Footer;