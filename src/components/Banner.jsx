import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { IoStar, IoStarHalfOutline } from "react-icons/io5";

const Banner = () => {
    return (
        <section className="relative overflow-hidden bg-[#f8f9ff]">

            
            <div className="absolute -top-32 -left-32 w-100 h-100 bg-[#5D38DE]/30 blur-[120px] rounded-full"></div>
            <div className="absolute -bottom-32 -right-32 w-100 h-100 bg-purple-300/30 blur-[120px] rounded-full"></div>

            <div className="relative mx-auto w-11/12 md:w-9/12 py-14 md:py-24 flex flex-col md:flex-row items-center justify-between gap-12">

               
                <div className="max-w-xl text-center md:text-left">

                   
                    <div className="inline-block mb-4 px-4 py-1 rounded-full bg-[#5D38DE]/10 text-[#5D38DE] text-sm font-medium">
                        🚀 #1 Learning Platform
                    </div>

                    
                    <h1 className="text-3xl md:text-6xl font-extrabold leading-tight text-[#0f172a] mb-5">
                        Learn Skills That <br />
                        <span className="bg-linear-to-r from-[#5D38DE] to-purple-500 bg-clip-text text-transparent">
                            Actually Matter
                        </span>
                    </h1>

                   
                    <p className="text-gray-600 text-sm md:text-lg leading-7 md:leading-8 mb-6">
                        Join thousands of learners mastering real-world skills. Build your career, grow faster, and stay ahead of the competition.
                    </p>

                  
                    <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
                        <Image
                        sizes='(max-width: 768px) 100vw, 50vw'
                            width={110}
                            height={40}
                            src="/review.png"
                            alt="reviews"
                        />

                        <div className="flex items-center gap-1 text-yellow-500 text-lg">
                            <IoStar />
                            <IoStar />
                            <IoStar />
                            <IoStar />
                            <IoStarHalfOutline />
                        </div>

                        <span className="text-sm text-gray-500 font-medium">
                            4.5 (10k+ reviews)
                        </span>
                    </div>

                    {/* CTA */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">

                        <Link href="/courses">
                            <Button className="bg-[#5D38DE] text-white px-7 py-6 rounded-xl text-base hover:scale-105 hover:bg-[#4c2fc2] transition-all duration-300 shadow-lg">
                                Browse Courses
                            </Button>
                        </Link>

                        <Button
                            variant="bordered"
                            className="px-7 py-6 rounded-xl text-base hover:bg-gray-100 transition"
                        >
                            Watch Demo
                        </Button>
                    </div>

                   
                    <div className="flex gap-6 mt-8 justify-center md:justify-start text-sm text-gray-500">
                        <span><strong className="text-black">10K+</strong> Students</span>
                        <span><strong className="text-black">500+</strong> Courses</span>
                        <span><strong className="text-black">4.8★</strong> Rating</span>
                    </div>
                </div>

               
                <div className="relative w-full md:w-1/2 flex justify-center">

                   
                    <div className="absolute top-6 left-6 bg-white shadow-xl rounded-xl px-4 py-2 text-sm animate-bounce hidden md:block">
                        💡 New Courses Added
                    </div>

                   
                    <Image
                        className="w-full max-w-md md:max-w-lg object-contain drop-shadow-2xl"
                        width={600}
                        height={600}
                        src="/image.png"
                        alt="learning"
                        priority
                    />

                   
                    <div className="absolute bottom-6 right-6 bg-white shadow-xl rounded-xl px-4 py-2 text-sm hidden md:block">
                        ⭐ Top Rated
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;