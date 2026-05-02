import Link from "next/link";
import { Button } from "@heroui/react";

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden">

            {/* background glow */}
            <div className="absolute w-96 h-96 bg-[#5D38DE]/10 blur-3xl rounded-full -top-20 -left-20"></div>
            <div className="absolute w-96 h-96 bg-purple-300/10 blur-3xl rounded-full -bottom-20 -right-20"></div>

            <div className="relative text-center space-y-5 px-5">

                {/* Big 404 */}
                <h1 className="text-7xl md:text-9xl font-bold text-[#5D38DE]">
                    404
                </h1>

                {/* Title */}
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
                    Page Not Found
                </h2>

                {/* Description */}
                <p className="text-gray-500 max-w-md mx-auto text-sm md:text-base">
                    The page you are looking for doesn’t exist or has been moved.
                </p>

                {/* Button */}
                <Link href="/">
                    <Button className="bg-[#5D38DE] text-white px-6 py-5 rounded-xl hover:bg-[#4c2fc2] transition">
                        Go Back Home
                    </Button>
                </Link>

            </div>
        </div>
    );
}