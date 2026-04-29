"use client";

import { Button, Drawer, useOverlayState } from "@heroui/react";
import Link from "next/link";
import React from "react";
import { CgProfile } from "react-icons/cg";
import { FaBookReader, FaHome } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";

export function NavbarDrawer() {
    const [isOpen, setIsOpen] = React.useState(false);

    const state = useOverlayState();

    return (
        <div>

            <Button size="sm" onPress={() => setIsOpen(!isOpen)}>
                <RxHamburgerMenu />
            </Button>
            <Drawer.Backdrop isOpen={isOpen} onOpenChange={setIsOpen}>
                <Drawer.Content placement="right">
                    <Drawer.Dialog>
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
                        <div className="w-full space-y-5 flex flex-col">
                            <Link href={'/login'}>
                                <Button variant="primary" className='w-full' >Login</Button>
                            </Link>
                            <Link href={'/register'}>
                                <Button variant="outline" className='w-full' >Register</Button>
                            </Link>
                        </div>
                    </Drawer.Dialog>
                </Drawer.Content>
            </Drawer.Backdrop>
        </div>
    );
}