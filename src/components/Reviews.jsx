import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

const Reviews = async () => {
    const res = await fetch("https://skill-sphere-topaz.vercel.app/studentReviews.json", {
        cache: "no-store",
    });

    const data = await res.json();

    return (
        <section className="w-11/12 mx-auto my-20">

            {/* Heading */}
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
                    Student <span className="text-[#5D38DE]">Reviews</span>
                </h2>
                <p className="text-gray-500 mt-3 max-w-xl mx-auto">
                    What our students say about their learning experience
                </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                {data?.map((review) => (
                    <div
                        key={review.id}
                        className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
                    >

                        {/* User Info */}
                        <div className="flex items-center gap-3">
                            <Image
                                src={review.image}
                                alt={review.name}
                                className="w-12 h-12 rounded-full object-cover"
                            />

                            <div>
                                <h4 className="font-semibold text-slate-900">
                                    {review.name}
                                </h4>
                                <p className="text-xs text-gray-500">
                                    {review.role}
                                </p>
                            </div>
                        </div>

                        {/* Review Text */}
                        <p className="text-gray-500 mt-4 text-sm leading-relaxed">
                            {review.review}
                        </p>

                        {/* Stars */}
                        <div className="flex items-center gap-1 mt-4 text-yellow-500">
                            {Array.from({ length: review.rating }).map((_, i) => (
                                <FaStar key={i} />
                            ))}
                        </div>

                    </div>
                ))}

            </div>
        </section>
    );
};

export default Reviews;