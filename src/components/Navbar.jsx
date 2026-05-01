'use client';

import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { NavbarDrawer } from "./NavbarDrawer";
import { authClient } from "@/lib/auth-client";
import { BiLogOutCircle } from "react-icons/bi";

const Navbar = () => {

    const { data } = authClient.useSession();
    const user = data?.user;

    const handleSignOut = async () => {
        await authClient.signOut();
    };

    return (
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b shadow-sm">

            <div className="w-11/12 mx-auto py-3 flex justify-between items-center">

              
                <Link href="/" className="flex items-center">
                    <Image
                        src="/LOGO.png"
                        width={140}
                        height={140}
                        alt="logo"
                        priority
                    />
                </Link>

               
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
                    <Link className="hover:text-[#5D38DE] transition" href="/">Home</Link>
                    <Link className="hover:text-[#5D38DE] transition" href="/courses">Courses</Link>
                    <Link className="hover:text-[#5D38DE] transition" href="/profile">My Profile</Link>
                </nav>

               
                <div className="flex items-center gap-3">

                    {!user ? (
                        <div className="hidden md:flex gap-3">
                            <Link href="/login">
                                <Button className="bg-[#5D38DE] text-white rounded-xl px-5">
                                    Login
                                </Button>
                            </Link>

                            <Link href="/register">
                                <Button variant="bordered" className="rounded-xl px-5">
                                    Register
                                </Button>
                            </Link>
                        </div>
                    ) : (
                        <div className="hidden md:flex gap-3">
                            <Button
                                onClick={handleSignOut}
                                isIconOnly variant="danger">
                                <BiLogOutCircle />
                            </Button>
                        </div>
                    )}

                   
                    <div className="md:hidden">
                        <NavbarDrawer />
                    </div>

                </div>

            </div>
        </header>
    );
};

export default Navbar;