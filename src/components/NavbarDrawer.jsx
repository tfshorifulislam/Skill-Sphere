"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Drawer, useOverlayState } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoCloseOutline } from "react-icons/io5";
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
                            <Drawer.Heading className="text-lg font-semibold flex justify-between items-center">
                                <p>Menu</p>
                                <IoCloseOutline onClick={() => setIsOpen(false)} />
                            </Drawer.Heading>
                        </Drawer.Header>

                        {/* BODY */}
                        <div className="p-5 flex flex-col h-full">

                            {/* USER HEADER (Account style) */}
                            {user &&
                                <div
                                    className="flex items-center gap-3 pb-5 border-b">

                                    <div className="w-10 h-10 rounded-full bg-[#5D38DE] flex items-center justify-center text-white font-bold">
                                        {user?.image && (
                                            <Image
                                                src={user.image}
                                                width={150}
                                                height={150}
                                                alt="avatar"
                                                className="rounded-full object-cover"
                                            />
                                        )}
                                    </div>

                                    <div className="flex flex-col">
                                        <p className="text-sm font-semibold">
                                            {user.name}
                                        </p>
                                        <p className="text-xs text-gray-500">
                                            {user.email}
                                        </p>
                                    </div>

                                </div>}

                            {/* NAVIGATION */}
                            <div className="mt-5 space-y-1">

                                <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">
                                    Navigation
                                </p>

                                <Link href="/">
                                    <Button
                                        onClick={() => setIsOpen(false)}
                                        variant="light"
                                        className="w-full justify-start rounded-xl py-5 hover:bg-gray-100 transition font-medium"
                                    >
                                        Home
                                    </Button>
                                </Link>

                                <Link href="/courses">
                                    <Button
                                        onClick={() => setIsOpen(false)}
                                        variant="light"
                                        className="w-full justify-start rounded-xl py-5 hover:bg-gray-100 transition font-medium"
                                    >
                                        Courses
                                    </Button>
                                </Link>

                                <Link href="/profile">
                                    <Button
                                        onClick={() => setIsOpen(false)}
                                        variant="light"
                                        className="w-full justify-start rounded-xl py-5 hover:bg-gray-100 transition font-medium"
                                    >
                                        My Profile
                                    </Button>
                                </Link>

                            </div>

                            {/* ACCOUNT SECTION */}
                            {!user && (
                                <div className="mt-8 space-y-3">

                                    <p className="text-xs text-gray-400 uppercase tracking-wider">
                                        Account
                                    </p>

                                    <Link href="/login">
                                        <Button className="w-full bg-[#5D38DE] text-white rounded-xl py-5 hover:bg-[#4c2fc2] transition font-medium">
                                            Login
                                        </Button>
                                    </Link>

                                    <Link href="/register">
                                        <Button
                                            variant="bordered"
                                            className="w-full rounded-xl py-5 font-medium"
                                        >
                                            Create account
                                        </Button>
                                    </Link>

                                </div>
                            )}

                            {/* FOOTER ACTIONS (X-style logout area) */}
                            {user && (
                                <div className="mt-auto pt-5 border-t space-y-3">

                                    <Button
                                        onClick={handleSignOut}
                                        className="w-full bg-red-500 text-white rounded-xl py-5 hover:bg-red-600 transition font-medium"
                                    >
                                        Logout
                                    </Button>

                                    <p className="text-xs text-gray-400 text-center">
                                        Signed in as account user
                                    </p>

                                </div>
                            )}

                        </div>
                    </Drawer.Dialog>
                </Drawer.Content>
            </Drawer.Backdrop>
        </div>
    );
}