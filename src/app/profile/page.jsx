"use client";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";

const ProfileCard = () => {
    const userData = authClient.useSession();
    const user = userData.data?.user;

    if (!user) {
        return (
            <div className="flex justify-center mt-10 text-gray-500">
                Loading...
            </div>
        );
    }

    return (
        <div className="max-w-md mx-auto mt-10 bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">


            <div className="h-28 bg-linear-to-r from-[#5D38DE] to-[#7c5cff]" />

     
            <div className="flex justify-center -mt-10">
                <div className="w-20 h-20 relative rounded-full border-4 border-white overflow-hidden shadow-md bg-white">
                    <Image
                        src={user.image || "/default-avatar.png"}
                        alt="profile"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>

           
            <div className="text-center px-6 py-5">

              
                <h2 className="text-xl font-semibold text-slate-900">
                    {user.name}
                </h2>

              
                <p className="text-sm text-gray-500 mt-1">
                    {user.email}
                </p>

                
                <div className="mt-3">
                    {user.emailVerified ? (
                        <span className="text-xs bg-green-100 text-green-600 px-3 py-1 rounded-full">
                            Verified
                        </span>
                    ) : (
                        <span className="text-xs bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full">
                            Not Verified
                        </span>
                    )}
                </div>

                
                <div className="my-4 border-t border-gray-100" />

                <div className="text-sm text-gray-600 space-y-2">
                    <p>
                        <span className="text-gray-400">Joined:</span>{" "}
                        {new Date(user.createdAt).toLocaleDateString()}
                    </p>

                </div>

               
                <Button className="mt-5 w-full bg-[#5D38DE] text-white py-2.5 rounded-xl hover:bg-[#4c2fc2] transition">
                    Edit Profile
                </Button>

            </div>
        </div>
    );
};

export default ProfileCard;