"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Drawer, useOverlayState } from "@heroui/react";
import Link from "next/link";
import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";

export function NavbarDrawer() {
    const [isOpen, setIsOpen] = React.useState(false);

    const state = useOverlayState();

    const userData = authClient.useSession()
    const user = userData.data?.user
    console.log(user)

    return (
        <div>

            <Button size="sm" onPress={() => setIsOpen(!isOpen)}>
                <RxHamburgerMenu />
            </Button>
            <Drawer.Backdrop isOpen={isOpen} onOpenChange={setIsOpen}>
                <Drawer.Content placement="right">
                    <Drawer.Dialog>
                        <div>
                            {/* <ul className="flex flex-col space-y-3 text-xl">
                                <li className="bg-[#f2f2f2] shadow-sm flex items-center gap-3 pl-5 py-3 rounded-2xl">
                                    <FaHome className="text-2xl" />
                                    <Link href={'/'}>Home</Link>
                                </li>
                                <li className="bg-[#f2f2f2] shadow-sm flex items-center gap-3 pl-5 py-3 rounded-2xl">
                                    <FaBookReader />
                                    <Link href={'/'}>Courses</Link>
                                </li>
                                <li className="bg-[#f2f2f2] shadow-sm flex items-center gap-3 pl-5 py-3 rounded-2xl">
                                    <CgProfile />
                                    <Link href={'/'}>My Profile</Link>
                                </li>
                            </ul> */}
                            {!user && <div className="w-full space-y-5 flex flex-col">
                                <Link href={'/login'}>
                                    <Button variant="primary" className='w-full' >Login</Button>
                                </Link>
                                <Link href={'/register'}>
                                    <Button variant="outline" className='w-full' >Register</Button>
                                </Link>
                            </div>}
                            {user && <div className="px-5">
                                <Link href={'/login'}>
                                    <Button variant="danger" className=' absolute bottom-5 right-5 '>Logout</Button>
                                </Link>

                            </div>}
                        </div>
                    </Drawer.Dialog>
                </Drawer.Content>
            </Drawer.Backdrop>
        </div>
    );
}