import Link from "next/link";
import Image from "next/image";
import { Button, TextArea } from "@heroui/react";

const Footer = () => {
    return (
        <footer className="mt-24 bg-white px-5">


            <div className="w-11/12 mx-auto py-10 md:py-16">

                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <Image
                                src="/LOGO.png"
                                alt="logo"
                                width={200}
                                height={200}
                            />
                        </div>

                        <p
                            className="text-sm leading-relaxed text-gray-600 dark:text-gray-400 max-w-xs">
                            Skill Sphere is a modern online platform to build skills with expert guidance and quality courses.
                        </p>
                    </div>


                    {/* Company */}
                    <div>
                        <h3 className="text-sm font-semibold text-black dark:text-white mb-4">
                            Company
                        </h3>
                        <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                            <li>
                                <Link
                                    href="/about"
                                    className="hover:text-black dark:hover:text-white transition"
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className="hover:text-black dark:hover:text-white transition"
                                >
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/terms"
                                    className="hover:text-black dark:hover:text-white transition"
                                >
                                    Terms
                                </Link>
                            </li>
                        </ul>
                    </div>

                    
                    <div>
                        <h3 className="text-sm font-semibold text-black dark:text-white mb-4">
                            Contact Us
                        </h3>
                        <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                            <li>
                                <a
                                    href="https://www.facebook.com/tfshorifuislam"
                                    className="hover:text-black dark:hover:text-white transition"
                                >
                                    Facebook
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.instagram.com/tfshorifulislam/"
                                    className="hover:text-black dark:hover:text-white transition"
                                >
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.instagram.com/tfshorifulislam/"
                                    className="hover:text-black dark:hover:text-white transition"
                                >
                                    Twitter
                                </a>
                            </li>
                        </ul>
                    </div>



                    {/* CTA Block */}
                    <div className="space-y-4 flex flex-col">
                        <TextArea
                            aria-label="Quick project update"
                            className="h-32 "
                            placeholder="Share your..."
                        />
                        <Button>
                            Submit
                        </Button>
                    </div>
                </div>

                {/* Divider */}
                <div className="mt-12 h-px w-full bg-linear-to-r from-transparent via-gray-300 to-transparent dark:via-white/10" />

                {/* Bottom */}
                <div className="mt-6 flex justify-between flex-col md:flex-row items-center space-y-3 text-xs text-gray-500 dark:text-gray-400">
                    <p>© {new Date().getFullYear()} pixgen. All rights reserved.</p>

                    <div className="flex items-center gap-6">
                        <Link
                            href="/privacy"
                            className="hover:text-black dark:hover:text-white transition"
                        >
                            Privacy
                        </Link>
                        <Link
                            href="/terms"
                            className="hover:text-black dark:hover:text-white transition"
                        >
                            Terms
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;