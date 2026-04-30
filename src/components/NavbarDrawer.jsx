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

            <Button variant="" size="sm" onPress={() => setIsOpen(!isOpen)}>
                <RxHamburgerMenu />
            </Button>
            <Drawer.Backdrop isOpen={isOpen} onOpenChange={setIsOpen}>
                <Drawer.Content placement="right">
                    <Drawer.Dialog>
                        <Drawer.Header>
                            <Drawer.Heading>Profile</Drawer.Heading>
                            <div>
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
                                {user && <ul className="flex flex-col space-y-3">
                                    <Button
                                        onClick={() => setIsOpen(false)}
                                        className=" w-full rounded-lg" variant="outline">
                                        <Link href={'/'}>Home</Link>
                                    </Button>
                                    <Button
                                        onClick={() => setIsOpen(false)}
                                        className=" w-full rounded-lg" variant="outline">
                                        <Link href={'/courses'}>Courses</Link>
                                    </Button>
                                    <Button
                                        onClick={() => setIsOpen(false)}
                                        className=" w-full rounded-lg" variant="outline">
                                        <Link href={'/profile'}>My Profile</Link>
                                    </Button>
                                </ul>}
                            </div>
                        </Drawer.Header>
                    </Drawer.Dialog>
                </Drawer.Content>
            </Drawer.Backdrop>
        </div>
    );
}