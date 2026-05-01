import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { IoStar, IoStarHalfOutline } from "react-icons/io5";



const Banner = () => {
    return (
        <div className=" pt-3 bg-[url('/bg.png')] min-w-full bg-cover bg-no-repeat bg-center">
            <div
                className="mx-auto w-11/12 md:w-9/12 flex flex-col md:flex-row items-center justify-between">
                <div className="md:max-w-2xl text-[#1e1e1e] text-center md:text-start animate__animated animate__fadeInLeft">
                    <h1 className="text-3xl md:text-6xl font-semibold  md:font-bold mb-5 md:leading-20 text-[#141219] ">
                        Upgrade <span className="text-[#5D38DE]">Your Skills</span> Today
                    </h1>

                    <p className="mb-4 text-sm md:text-lg leading-6 md:leading-8 opacity-60 ">
                        Upgrade your skills today and unlock new opportunities for growth, success, and a brighter future—start learning something new now!
                    </p>
                    <div className="flex gap-4 items-center flex-col md:flex-row">
                        <Image
                            width={100}
                            height={150}
                            src={'/review.png'}
                            alt="reviews picture" />
                        <div className="flex gap-1 text-2xl text-[#5d38de]">
                            <IoStar />
                            <IoStar />
                            <IoStar />
                            <IoStar />
                            <IoStarHalfOutline />
                        </div>
                    </div>
                    <Link href="/courses">
                        <Button className="text-white md:rounded-md md:py-6 bg-[#5D38DE] mt-5">
                            View all Courses
                        </Button>
                    </Link>
                </div>
                <div className="animate__animated animate__fadeInDown">
                    <Image
                        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                        width={900}
                        height={900}
                        src='/Frame 3.png'
                        alt="to">

                    </Image>
                </div>
            </div>
        </div>
    );
};

export default Banner;