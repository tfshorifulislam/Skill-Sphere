
import React from "react";
import Marquee from "react-fast-marquee";
import AllReviewsCard from "../components/AllReviewsCard";

const Reviews = async () => {
    const res = await fetch("https://skill-sphere-topaz.vercel.app/review.json", {
        cache: "no-store",
    });

    const data = await res.json();

    return (
        <section className="w-11/12 mx-auto mt-40 mb-20 overflow-hidden ">


            <div className="text-center mb-10">
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
                    Student <span className="text-[#5D38DE]">Reviews</span>
                </h2>
                <p className="text-gray-500 mt-3">
                    What our students say about us
                </p>
            </div>


            <Marquee>

                <div className="flex w-max gap-6 animate-scroll px-4">
                   {
                    data.map(review => <AllReviewsCard key={review.id} review={review}/>)
                   }

                </div>

            </Marquee>
        </section>
    );
};

export default Reviews;