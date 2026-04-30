import { Button } from "@heroui/react";
import Link from "next/link";

const Banner = () => {
    return (
        <div className=" mt-5 md:mt-20 bg-[url('/slide01.jpg')] h-[70vh] w-full bg-cover bg-no-repeat bg-center flex items-center shadow-2xl">
            {/* Overlay */}
            <div className="w-full h-full bg-black/80 flex items-center text-center">
                <div className="max-w-7xl mx-auto px-1 md:px-6 text-white">
                    <h1 className="text-2xl md:text-6xl font-bold max-w-2xl mb-5 md:leading-20">
                        Upgrade Your Skills Today
                    </h1>
                    <p className="mb-4 max-w-2xl leading-8">
                        Upgrade your skills today and unlock new opportunities for growth, success, and a brighter future—start learning something new now!
                    </p>
                    <Link href="/courses">
                        <Button className="text-white">
                            View all Courses
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;