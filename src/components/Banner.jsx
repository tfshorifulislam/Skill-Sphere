import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";



const Banner = () => {
    return (
        <div className="mt-10 md:mt-20 pt-3 bg-white ">
            <div
                className="mx-auto w-11/12 md:w-9/12 flex flex-col md:flex-row items-center justify-between">
                <div className="md:max-w-2xl text-[#1e1e1e] text-center md:text-start animate__animated animate__fadeInLeft">
                    <h1 className="text-2xl md:text-6xl font-semibold  md:font-bold mb-5 md:leading-20 ">
                        Upgrade <span className="text-blue-800">Your Skills</span> Today
                    </h1>

                    <p className="mb-4 text-sm md:text-lg leading-8 opacity-60 ">
                        Upgrade your skills today and unlock new opportunities for growth, success, and a brighter future—start learning something new now!
                    </p>
                    <Link href="/courses">
                        <Button className="text-white md:rounded-md md:py-6">
                            View all Courses
                        </Button>
                    </Link>
                </div>
                <div className="animate__animated animate__fadeInDown">
                    <Image
                        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                        width={600}
                        height={600}
                        src='/man.png'
                        alt="to">

                    </Image>
                </div>
            </div>
        </div>
    );
};

export default Banner;