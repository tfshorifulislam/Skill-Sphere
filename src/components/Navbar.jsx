'use client'
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { NavbarDrawer } from "./NavbarDrawer";
import { authClient } from "@/lib/auth-client";


const Navbar = () => {

    const handleSignOut = async () => {
        await authClient.signOut();
    }

    const userData = authClient.useSession()
    const user = userData?.data?.user
    console.log(user)
    return (
        <div className="bg-white w-full py-3 shadow-sm">
            <div className="w-11/12 mx-auto flex justify-between items-center">
                <Link
                    href={'/'}>
                    <Image
                        src={'/LOGO.png'}
                        width={150}
                        height={150}
                        alt="logo"
                    />
                </Link>
                <ul className="gap-10 hidden md:flex">
                    <li>
                        <Link href={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link href={'/courses'}>Courses</Link>
                    </li>
                    <li>
                        <Link href={'/profile'}>My Profile</Link>
                    </li>
                </ul>
                <div>
                    {!user && <div className="hidden md:flex gap-4">
                        <Link href={'/login'}>
                            <Button variant="primary">Login</Button>
                        </Link>
                        <Link href={'/register'}>
                            <Button variant="outline">Register</Button>
                        </Link>
                    </div>}
                    {user && <div className="hidden md:flex gap-4">
                        <Link href={'/login'}>
                            <Button onClick={handleSignOut} variant="danger">Logout</Button>
                        </Link>

                    </div>}
                    <div className='flex md:hidden'>
                        <NavbarDrawer />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;