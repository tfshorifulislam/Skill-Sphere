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

    const handleSignOut = async () => {
        await authClient.signOut();
    }

    return (
        <div>

            {/* Toggle button */}
            <Button
                size="sm"
                variant="light"
                onPress={() => setIsOpen(!isOpen)}
                className="text-xl"
            >
                <RxHamburgerMenu />
            </Button>

            <Drawer.Backdrop isOpen={isOpen} onOpenChange={setIsOpen}>
                <Drawer.Content placement="right">
                    <Drawer.Dialog>

                        {/* HEADER */}
                        <Drawer.Header className="border-b pb-4">
                            <Drawer.Heading className="text-lg font-semibold">
                                Menu
                            </Drawer.Heading>
                        </Drawer.Header>

                        {/* BODY */}
                        <div className="p-5 space-y-6">

                            {/* AUTH SECTION */}
                            {!user && (
                                <div className="space-y-3">

                                    <Link href="/login">
                                        <Button className="w-full bg-[#5D38DE] text-white rounded-xl py-5 hover:bg-[#4c2fc2] transition">
                                            Login
                                        </Button>
                                    </Link>

                                    <Link href="/register">
                                        <Button
                                            variant="bordered"
                                            className="w-full rounded-xl py-5"
                                        >
                                            Register
                                        </Button>
                                    </Link>

                                </div>
                            )}

                            {/* NAV LINKS */}
                            {user && (
                                <div className="space-y-3">

                                    <Link href="/">
                                        <Button
                                            onClick={() => setIsOpen(false)}
                                            variant="light"
                                            className="w-full justify-start rounded-xl py-5 hover:bg-gray-100"
                                        >
                                            Home
                                        </Button>
                                    </Link>

                                    <Link href="/courses">
                                        <Button
                                            onClick={() => setIsOpen(false)}
                                            variant="light"
                                            className="w-full justify-start rounded-xl py-5 hover:bg-gray-100"
                                        >
                                            Courses
                                        </Button>
                                    </Link>

                                    <Link href="/profile">
                                        <Button
                                            onClick={() => setIsOpen(false)}
                                            variant="light"
                                            className="w-full justify-start rounded-xl py-5 hover:bg-gray-100"
                                        >
                                            My Profile
                                        </Button>
                                    </Link>

                                </div>
                            )}

                        </div>

                        {/* FOOTER (Logout fixed bottom) */}
                        {user && (
                            <div className="absolute bottom-5 left-0 w-full px-5">

                                <Link href={'/login'}>
                                    <Button

                                        onClick={handleSignOut}
                                        className="w-full bg-red-500 text-white rounded-xl py-5 hover:bg-red-600 transition"
                                    >
                                        Logout
                                    </Button>
                                </Link>

                            </div>
                        )}

                    </Drawer.Dialog>
                </Drawer.Content>
            </Drawer.Backdrop>
        </div>
    );
}