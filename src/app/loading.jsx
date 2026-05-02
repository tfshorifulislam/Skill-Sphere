'use client'
import { Spinner } from "@heroui/react";

export default function LoadingPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden">

           
            <div className="absolute w-80 h-80 bg-[#5D38DE]/10 blur-3xl rounded-full" />
            <div className="absolute w-80 h-80 bg-purple-300/10 blur-3xl rounded-full bottom-0 right-0" />

            
            <div className="relative flex flex-col items-center gap-4">

                <Spinner size="lg" color="secondary" />

                <h1 className="text-lg md:text-xl font-semibold text-[#5D38DE] animate-pulse">
                    Loading...
                </h1>

                <p className="text-sm text-gray-500">
                    Please wait a moment
                </p>

            </div>

        </div>
    );
}